"use client";

import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export const Experience = () => {
  const data = [
    {
      title: "2025 - Present",
      content: (
        <div>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <Image
                src="https://raw.githubusercontent.com/KannanSA/kannan.github.io/main/old/images/KCL.png"
                alt="King's College London"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-semibold">
                  King's Undergraduate Research Fellowship
                </p>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-md font-medium mb-2">
                King's College London
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                Worked under Dr. Carla de Tomas on machine-learning-driven analysis of carbon nanoclusters.
                Applied physics-informed neural networks and dimensionality reduction to understand emergent structures.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Neural Networks",
                  "LAMMPS ASE QUIP", 
                  "Data Analysis",
                  "Python",
                  "TensorFlow",
                  "Research"
                ].map((skill, index) => (
                  <span key={index} className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021 - Present",
      content: (
        <div>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <Image
                src="https://raw.githubusercontent.com/KannanSA/kannan.github.io/main/old/images/fish.JPG"
                alt="Kannan Industrials"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-semibold mb-2">
                CEO iOS Developer
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-md font-medium mb-2">
                Kannan Industrials
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
               Designed and deployed several iOS applications including 1minuteDOEShelp, iPong, and DabCounter.
               Implemented real-time sensor data processing, CoreML integration, and user-centric design for accessibility.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Swift",
                  "React", 
                  "Node.js",
                  "API Development",
                  "Responsive Design",
                  "Performance Optimization"
                ].map((skill, index) => (
                  <span key={index} className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2019",
      content: (
        <div>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <Image
                src="https://raw.githubusercontent.com/KannanSA/kannan.github.io/main/old/images/NHS.PNG"
                alt="NHS Digital"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-semibold mb-2">
                Data Science Intern
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-md font-medium mb-2">
                NHS Digital
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                Built an NLP pipeline using LSTM and Word2Vec to predict ICD-9 diagnostic codes from clinical records. Implemented t-SNE for dimensionality reduction and model visualization. Contributed to exploratory work on clinical informatics.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Data Analysis",
                  "Tensorflow",
                  "SQL", 
                  "Python",
                  "Healthcare Analytics",
                  "t-Sne",
                  "Statistics"
                ].map((skill, index) => (
                  <span key={index} className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2019",
      content: (
        <div>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white text-xs font-bold">
              <Image
                src="https://raw.githubusercontent.com/KannanSA/kannan.github.io/main/old/images/kennedy.png"
                alt="Kennedy Institute of Rheumatology"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            </div>
            <div className="flex-1">
              <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-semibold mb-2">
                Research Intern
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-md font-medium mb-2">
                Kennedy Institute of Rheumatology, Oxford
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                Used TensorFlow to design and train convolutional models for image classification (MNIST).
                Built a trading bot using LSTM for time-series prediction to simulate market decision strategies.
                Shadowed Informatics Manager Mr Vinod Kumar.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "CNN, RNN, LSTM, Neural Nets",
                  "Data Collection", 
                  "Statistical Analysis",
                  "Clinical Studies",
                  "Tensorflow",
                  "Python"
                ].map((skill, index) => (
                  <span key={index} className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <section className="w-full py-20" id="experience">
      <Timeline data={data} />
    </section>
  );
};