import { studyMeta } from '../meta';
import { StudyShell } from '../shell';

export const metadata = studyMeta(
  'carbon-nanoclusters',
  'Carbon nanoclusters',
  'King’s Undergraduate Research Fellowship on carbon nanoclusters: physics-informed machine learning, LAMMPS on HPC, and 5,000+ structures.',
);

export default function CarbonNanoclustersPage() {
  return (
    <StudyShell
      kicker="King's College London · May – Nov 2025"
      title="Carbon nanoclusters"
      lede="Physics-informed machine learning on carbon nanoclusters, during a King's Undergraduate Research Fellowship. LAMMPS on HPC, and analysis of 5,000+ structures."
      facts={[
        { value: '5,000+', label: 'Structures analysed' },
        { value: 'May – Nov 2025', label: 'KURF, Department of Physics' },
        { value: '60% / 80%', label: 'Runtime and MAE, per the CV' },
      ]}
      links={[
        { href: 'https://www.kcl.ac.uk/physics', label: 'Department of Physics' },
        { href: '/#work', label: 'Selected work' },
      ]}
    >
      <p>
        From May to November 2025 I was a Research Fellow on the King&apos;s Undergraduate Research Fellowship at King&apos;s College London, in the Department of Physics. The site lists the role as Research Fellow (KURF). The CV uses Undergraduate Research Fellow (KURF) for the same dates.
      </p>
      <p>
        The subject was carbon nanoclusters. I applied physics-informed machine learning, ran LAMMPS simulations on HPC clusters, and analysed 5,000+ structures using OVITO, TensorFlow, and CUDA. The site records a collaboration with researchers at Penn State. The experience row still links to the King&apos;s Department of Physics, which is the department home rather than the write-up of the work.
      </p>
      <p>
        The CV states three measured outcomes for this fellowship. Molecular-dynamics simulation runtime fell by 60%, and interatomic energy prediction error, reported as MAE, fell by 80% relative to empirical baselines. Those potentials were physics-informed machine-learning models written in C++ and Python. Trajectory preprocessing and I/O throughput rose by 3× across multi-gigabyte structural datasets, using vectorized CUDA and TensorFlow ingestion pipelines. Manual cluster supervision was removed across 5,000+ distributed LAMMPS jobs on Linux and Slurm, using automated batch scheduling, checkpoint recovery, and PCA and t-SNE outlier detection.
      </p>
      <p>
        The site&apos;s 5,000+ is structures analysed. The CV&apos;s 5,000+ is distributed LAMMPS jobs. Both figures are in the repository. They are reported here as written, not combined into a different total.
      </p>
      <p>
        The tools named on the fellowship entry are LAMMPS, OVITO, TensorFlow, and CUDA. The skills section also lists AIRSS, NumPy, and pandas under Research. Those three are not named in the fellowship description, so they are not claimed as part of this project.
      </p>
      <p>
        The BSc Physics at King&apos;s is dated 2024–2027 on the site and in the CV. The education record also lists the Alessandro de Vita Computational Physics Prize for 2024–25 and a King&apos;s Research Award in November 2025. The repository does not state that either award was given for this fellowship. They belong to the same King&apos;s record, and that is all the source says.
      </p>
      <p>
        There is no public code link for the fellowship on the site. The homepage card that used to jump to the experience anchor now opens this page.
      </p>
    </StudyShell>
  );
}
