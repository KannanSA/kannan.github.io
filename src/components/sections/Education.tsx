"use client";

import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export const Education = () => {
  const data = [
    {
      title: "2024 - 2027",
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
                  BSc Physics
                </p>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-md font-medium mb-2">
                King's College London
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                Recipient of the Alessandro de Vita Computational Physics Prize 2024–25.
                Passed first year.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Mathematics & Computation", "Classical Physics", "Astrophysics", "Modern Physics"
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
      title: "2021 - 2023",
      content: (
        <div>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <Image
                src="https://raw.githubusercontent.com/KannanSA/kannan.github.io/main/old/images/UCL.png"
                alt="University College London"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-semibold mb-2">
                MEng Computer Science
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-md font-medium mb-2">
                University College London
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                Gained robust training in theoretical computer science and software engineering.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Theory of Computation"," Algorithms", "Object-Oriented Programming", "Discrete Maths", "Engineering Challenges"
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
      title: "2012 - 2020",
      content: (
        <div>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <Image
                src="https://raw.githubusercontent.com/KannanSA/kannan.github.io/main/old/images/RGS.png"
                alt="Royal Grammar School"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-semibold mb-2">
                A Levels: A*A*A*
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-md font-medium mb-2">
                Royal Grammar School, Newcastle
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                Achieved top grades in A Level Mathematics (A*), Further Mathematics (A*), and Physics (A*). 7A*S an 4As at GCSE.
                Developed strong analytical and problem-solving skills with a focus on mathematical reasoning and scientific methodology.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Mathematics A*",
                  "Further Maths A*", 
                  "Physics A*",
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
    <section className="w-full py-20" id="education">
      <Timeline data={data} />
    </section>
  );
};