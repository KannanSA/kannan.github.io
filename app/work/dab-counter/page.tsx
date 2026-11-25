import { personalInfo, siteUrl } from '../../site';
import { studyMeta } from '../meta';
import { StudyShell } from '../shell';

const summary =
  'Dab Counter is an Apple Watch app that uses CoreMotion on the device to detect dab gestures and count them.';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dab Counter',
  description: summary,
  url: `${siteUrl}/work/dab-counter/`,
  sameAs: 'https://github.com/KannanSA/DabCounter',
  author: {
    '@type': 'Person',
    name: personalInfo.name,
    url: `${siteUrl}/`,
  },
};

export const metadata = studyMeta('dab-counter', 'Dab Counter', summary);

export default function DabCounterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StudyShell
        kicker="Kannan Industrials · Apple Watch"
        title="Dab Counter"
        lede="An Apple Watch app that uses CoreMotion on the device to detect dab gestures and count them. The public repository describes it in those words."
        facts={[
          { value: 'Apple Watch', label: 'Where the repository places it' },
          { value: 'CoreMotion', label: 'On-device gesture detection' },
          { value: 'Offline', label: 'Motion data stays on the watch' },
        ]}
        links={[
          { href: 'https://github.com/KannanSA/DabCounter', label: 'View on GitHub' },
          { href: personalInfo.industrials, label: 'Kannan Industrials' },
          { href: '/#work', label: 'Selected work' },
        ]}
      >
        <p>
          Dab Counter is listed on this site under Kannan Industrials, with 1minuteDOEShelp, iPong, and OK Gym. That role is iOS Developer and Founder, from February 2021. The public repository is github.com/KannanSA/DabCounter. Its description, and the README title line, are the same sentence: Apple Watch app with CoreMotion. GitHub records the repository language as Swift. The repository homepage field is empty, so this page does not add a store link.
        </p>
        <p>
          The README privacy policy says the app does not collect, store, or share personally identifiable information. The only data it processes is motion-sensor data, via CoreMotion, to detect dab gestures. That data is used locally on the device and is not transmitted, stored, or shared with third parties. The policy says the motion data is used only for detecting dabs and counting them in the app. The app operates entirely offline and does not transmit user data to external servers. All motion processing happens on the Apple Watch.
        </p>
        <p>
          The CV names DabCounter as one of four production iOS applications, with 1minuteDOEShelp, iPong, and OK Gym. It records a Core ML inference change across those four apps, not for Dab Counter alone: real-time on-device throughput rose by 70%, from 35 to 60 frames per second, after profiling thread contention, lock overhead, and heap allocations. The README for Dab Counter names CoreMotion, not Core ML. The studio line on this site groups Core ML and Apple Watch motion classification with that set of products.
        </p>
        <p>
          The CV dates Kannan Industrials Ltd from July 2025. The site dates the same studio from February 2021. Both dates are in the repository. This page does not choose between them.
        </p>
      </StudyShell>
    </>
  );
}
