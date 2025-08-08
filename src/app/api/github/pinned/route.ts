export const dynamic = 'force-static'
export const revalidate = 3600

import { NextResponse } from 'next/server'

// Public helper service for pinned repos. No auth required.
const PINNED_SERVICE = (username: string) => `https://gh-pinned-repos.egoist.dev/?username=${encodeURIComponent(username)}`
// Public GitHub REST fallback (recent popular repos)
const USER_REPOS = (username: string) => `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`

export async function GET() {
  const username = 'KannanSA'

  try {
    // Try pinned helper first
    const res = await fetch(PINNED_SERVICE(username))
    if (res.ok) {
      const data = await res.json()
      const pinned = Array.isArray(data) ? data : []
      const normalized = pinned.map((r: any) => ({
        id: `gh-${r.owner || username}-${r.repo}`,
        name: r.repo,
        description: r.description || '',
        language: r.language || null,
        stars: Number(r.stars || 0),
        link: r.link || (r.owner && r.repo ? `https://github.com/${r.owner}/${r.repo}` : null),
        homepage: r.website || r.homepage || null
      }))
      return NextResponse.json({ source: 'pinned', username, repos: normalized }, { status: 200 })
    }
  } catch (e) {
    // ignore and fallback
  }

  // Fallback to user repos (public)
  try {
    const res = await fetch(USER_REPOS(username), { headers: { 'Accept': 'application/vnd.github+json' } })
    if (!res.ok) throw new Error('GitHub REST error')
    const repos = await res.json()
    // Sort by stargazers and updated recency, pick top 6
    const top = (Array.isArray(repos) ? repos : [])
      .filter((r: any) => !r.fork)
      .sort((a: any, b: any) => (b.stargazers_count - a.stargazers_count) || (new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()))
      .slice(0, 6)
      .map((r: any) => ({
        id: `gh-${r.full_name}`,
        name: r.name,
        description: r.description || '',
        language: r.language || null,
        stars: Number(r.stargazers_count || 0),
        link: r.html_url,
        homepage: r.homepage || null
      }))
    return NextResponse.json({ source: 'repos', username, repos: top }, { status: 200 })
  } catch (e) {
    return NextResponse.json({ source: 'error', username, repos: [] }, { status: 200 })
  }
}
