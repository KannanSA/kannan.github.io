import type { Metadata } from 'next';
import { Footer, Header } from '../chrome';
import { siteUrl } from '../site';
import { PongGame } from './pong-game';

const title = 'Contribution Pong · Kannan S A (sakannan)';
const description =
  'Play Contribution Pong on sakannan: rally across Kannan S A’s GitHub contribution grid and light the tiles as you go.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${siteUrl}/pong/` },
  openGraph: {
    type: 'website',
    title,
    description,
    url: `${siteUrl}/pong/`,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Kannan Sekar, software engineer and physics researcher' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
};

export default function PongPage() {
  return (
    <>
      <a className="skip" href="#pong-arena">
        Skip to the game
      </a>
      <Header />
      <main className="pong-page">
        <PongGame />
      </main>
      <Footer />
    </>
  );
}
