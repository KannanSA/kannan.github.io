import { studyMeta } from '../meta';
import { StudyShell } from '../shell';

export const metadata = studyMeta(
  'global-travel-vaccinations',
  'Global Travel Vaccinations',
  'Clinic websites, chatbots, and services for Global Travel Vaccinations, built as PCN tech lead with NHS England and Galleries Medical Practice.',
);

export default function GlobalTravelVaccinationsPage() {
  return (
    <StudyShell
      kicker="NHS England · Galleries Medical Practice · Nov 2025 – Present"
      title="Global Travel Vaccinations"
      lede="Healthcare websites, chatbots, and the services behind Global Travel Vaccinations. Interfaces, backend, deployment, and reliability, from November 2025."
      facts={[
        { value: 'Nov 2025 – Present', label: 'PCN Tech Lead' },
        { value: '50,000+', label: 'Patient base, per the CV' },
        { value: 'GCP · Linux', label: 'Where the CV says it runs' },
      ]}
      links={[
        { href: 'https://globaltravelvaccinations.com', label: 'Open the clinic site' },
        { href: '/#work', label: 'Selected work' },
      ]}
    >
      <p>
        Since November 2025 I have been PCN Tech Lead with NHS England and Galleries Medical Practice. The role on the site covers healthcare websites, chatbots, and iOS products, including Global Travel Vaccinations, and responsibility for interfaces, backend services, deployment, and reliability. The public product site linked from the homepage is globaltravelvaccinations.com.
      </p>
      <p>
        The CV describes the same start date as a software engineer at Galleries Medical Practice in London. It does not use the title PCN Tech Lead. The engineering scope it records is production clinical web services, idempotent REST APIs, and patient triage workflows for globaltravelvaccinations.com, running on GCP and Linux, for a patient base of 50,000+ across North East healthcare workflows.
      </p>
      <p>
        Two operational results are in the CV and not repeated as numbers on the homepage. Mean time to detection during service incidents was reduced by instrumenting backend endpoints with structured JSON logging, latency and error-rate SLIs, and automated health-check alerting. The CV does not give a numeric MTTD, so this page does not invent one. Deployment-related downtime was eliminated with containerized staging environments, automated integration and regression tests, and safe rollback workflows.
      </p>
      <p>
        The homepage panel calls the same product clinic sites and patient chat, under NHS England. iOS products are part of the role line on the site. The CV bullets for this job are about the web services, APIs, triage, logging, and deployment. The Apple Watch and Core ML work is recorded under Kannan Industrials, on the iPong page, and is not reassigned to Global Travel Vaccinations here.
      </p>
      <p>
        The skills list includes GCP, Docker, Kubernetes, and CI/CD. The CV entry for this role names GCP, Linux, containers, staging, integration and regression tests, and rollback. Kubernetes is on the skills list and is not named in this job&apos;s bullets, so it is not claimed for this product.
      </p>
      <p>
        Selected work links here. The live clinic site remains the external link.
      </p>
    </StudyShell>
  );
}
