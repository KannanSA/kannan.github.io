import { studyMeta } from '../meta';
import { StudyShell } from '../shell';

export const metadata = studyMeta(
  'ipong',
  'iPong',
  'iPong is an Apple Watch app from Kannan Industrials, using Core ML for on-device motion classification.',
);

export default function IPongPage() {
  return (
    <StudyShell
      kicker="Kannan Industrials · Apple Watch"
      title="iPong"
      lede="An Apple Watch app built at Kannan Industrials. The site records Core ML motion classification. The code is in the public iPong repository."
      facts={[
        { value: 'Apple Watch', label: 'Where the site places it' },
        { value: 'Core ML', label: 'On-device motion classification' },
        { value: '70%', label: 'Throughput across four apps, per the CV' },
      ]}
      links={[
        { href: 'https://github.com/KannanSA/iPong', label: 'View on GitHub' },
        { href: 'https://www.kannanindustrials.com', label: 'Kannan Industrials' },
        { href: '/#work', label: 'Selected work' },
      ]}
    >
      <p>
        iPong is an Apple Watch app. Selected work lists it with that context, and the panel reads Apple Watch, Core ML, and motion classification. The repository linked from the site is github.com/KannanSA/iPong.
      </p>
      <p>
        It is one of four products named under Kannan Industrials: 1minuteDOEShelp, iPong, DabCounter, and OK Gym. The site dates that studio from February 2021 to the present, with the role iOS Developer and Founder. The technical line for the studio is Core ML and Apple Watch motion classification. Other projects in the same entry, and not part of iPong, are Face Rift AR, IceFiSh Browser, and GrokTube.
      </p>
      <p>
        The CV dates Kannan Industrials Ltd from July 2025 to the present and titles the role Lead Software Engineer, in London. The February 2021 date remains the one on the site. The two start dates are both in the repository, and this page does not pick a third.
      </p>
      <p>
        The CV records a throughput change across those four production iOS applications, not for iPong on its own. Real-time on-device Core ML inference rose by 70%, from 35 to 60 frames per second, after profiling thread contention, lock overhead, and heap allocations. It also records a 50% cut in release lead time, and the removal of manual deployment toil, from automated build, unit-test, and release pipelines across web and mobile services, including sakannan.com. Those pipeline figures are for the studio&apos;s services. They are not a separate iPong-only measurement.
      </p>
      <p>
        The app-development line on the site lists SwiftUI, UIKit, REST, GraphQL, and Git. The CV&apos;s language list includes Swift, and Core ML is named both on the studio entry and on the iPong panel. The repository does not state that iPong&apos;s interface is SwiftUI or UIKit specifically, so this page does not.
      </p>
      <p>
        A separate selected project in the CV, the Low-Latency Sensor and Edge Inference Engine from 2024, reports gesture classification under 50 milliseconds at the 99th percentile. It is not described there as iPong, so that latency figure is not used here. The homepage card now opens this page. The GitHub repository is still the code link.
      </p>
    </StudyShell>
  );
}
