import { studyMeta } from '../meta';
import { StudyShell } from '../shell';

export const metadata = studyMeta(
  'snap-ar',
  'Snap AR',
  'Independent Snap AR lenses from 2018–2019, reaching 2.5M+ views and 150K downloads, tuned for mobile performance and memory.',
);

export default function SnapArPage() {
  return (
    <StudyShell
      kicker="Snap · Sep 2018 – Aug 2019"
      title="Snap AR"
      lede="Independent AR lenses for Snap, from September 2018 to August 2019. The recorded reach is 2.5M+ views and 150K downloads."
      facts={[
        { value: '2.5M+', label: 'AR lens views' },
        { value: '150K', label: 'Downloads' },
        { value: '2018 – 2019', label: 'Lens Studio, per the CV' },
      ]}
      links={[
        { href: 'https://github.com/KannanSA/Argumented-Reality-SC', label: 'View on GitHub' },
        { href: '/#work', label: 'Selected work' },
      ]}
    >
      <p>
        From September 2018 to August 2019 I built AR lenses independently for Snap. The site calls the role Independent AR Lens Developer. The CV calls the same stretch of work the Snap AR Ecosystem, in Lens Studio, and places it in Gateshead. It describes the lenses as real-time mobile computer vision.
      </p>
      <p>
        The reach recorded on the site is 2.5M+ views and 150K downloads. The CV writes 150K+ downloads and the same 2.5M+ views. The figures band on the homepage uses 2.5M+ AR lens views. The work panel uses 2.5M+ and 150K downloads, with the kicker Snap AR, 2018–2019.
      </p>
      <p>
        The site says the lenses were optimised for mobile performance and memory use. The CV is more specific about that work: GPU shader execution and memory footprints were profiled so the lenses could hold target frame rates on constrained mobile hardware. No frame rate, shader budget, or memory figure is written down for these lenses, so none is added here.
      </p>
      <p>
        The code link on the site is github.com/KannanSA/Argumented-Reality-SC. The repository name is spelled the way that URL spells it. There is no Lens Studio store URL in the repository, so this page does not add one.
      </p>
      <p>
        It is the only Snap role in the record. On the homepage it sits with the other selected projects, and the figures band repeats the 2.5M+ view count beside the ICD-9 result, the carbon-structure count, and the A-level grades. Those are the four headline figures on the page. The lens views are one of them, taken from this 2018–2019 work.
      </p>
      <p>
        Face Rift AR is listed separately, under Kannan Industrials, with IceFiSh Browser and GrokTube. The view and download counts above are the Snap lens figures from the 2018–2019 role. The repository does not describe them as Face Rift AR&apos;s counts.
      </p>
      <p>
        The homepage card for AR lenses now opens this page. The GitHub repository remains the external code link.
      </p>
    </StudyShell>
  );
}