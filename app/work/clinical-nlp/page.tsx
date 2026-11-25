import { studyMeta } from '../meta';
import { StudyShell } from '../shell';

export const metadata = studyMeta(
  'clinical-nlp',
  'Clinical NLP',
  'NHS Digital internship building LSTM and word2vec models for clinical notes, raising ICD-9 coding accuracy from 42% to 71%.',
);

export default function ClinicalNlpPage() {
  return (
    <StudyShell
      kicker="NHS Digital · Nov – Dec 2019"
      title="Clinical NLP"
      lede="LSTM and word2vec models for clinical-note classification, from a data science internship at NHS Digital. ICD-9 coding accuracy moved from 42% to 71%."
      facts={[
        { value: '71%', label: 'ICD-9 accuracy, from 42%' },
        { value: 'Nov – Dec 2019', label: 'NHS Digital internship' },
        { value: 'Leeds', label: 'Where the CV places it' },
      ]}
      links={[
        { href: 'https://github.com/KannanSA/NLPK', label: 'View on GitHub' },
        { href: '/#work', label: 'Selected work' },
      ]}
    >
      <p>
        I was a data science intern at NHS Digital from November to December 2019. The experience entry on this site uses that title and those dates. The CV in the repository places the internship in Leeds. Selected work lists it as Clinical NLP.
      </p>
      <p>
        The project was clinical-note classification. I developed LSTM and word2vec models, with anomaly detection for rare diagnoses. The homepage panel draws the same pipeline in four steps: a clinical note, word2vec, an LSTM, and an ICD-9 label. ICD-9 is the coding scheme the published result is measured against.
      </p>
      <p>
        The result recorded on the site, and again in the CV, is a move from 42% to 71%. The site calls that figure ICD-9 coding accuracy. The CV calls it top-1 accuracy and describes a Python pipeline that combined Word2Vec embeddings, t-SNE dimensionality reduction, and a sequential LSTM over historical ICD-9 records, used to predict later diagnoses. Those are two wordings of the same internship and the same 42% to 71% result, not two separate evaluations.
      </p>
      <p>
        The CV also records how the work was run. I owned the NLP project end to end across Agile sprints, took part in sprint planning, and presented the model evaluation and a reproducible workflow to the engineering team. The shorter homepage line does not repeat that process detail.
      </p>
      <p>
        The repository does not give a dataset size, a hospital name, or a production-deployment figure for this internship. The skills list on the site includes TensorFlow, PyTorch, scikit-learn, and Keras. Those names are not in the NHS Digital entry, so they are not part of the claim for this project. The tools the record does name are Python, word2vec, and LSTM, plus the t-SNE step in the CV.
      </p>
      <p>
        The public code repository is KannanSA/NLPK, which is the link that used to sit on the Clinical NLP card. That card now opens this page. The 71% mark in the figures band is the same ICD-9 result, from 42%.
      </p>
    </StudyShell>
  );
}
