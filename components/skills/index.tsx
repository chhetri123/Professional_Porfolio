"use client";

import React from "react";
import SectionHeading from "@/components/SectionHeading";
import {
  Frontend,
  Backend,
  DevOps,
  CloudServices,
  MachineLearning,
} from "./constant";

interface SkillComponents {
  [key: string]: () => JSX.Element;
}

const skillComponents: SkillComponents = {
  Frontend: Frontend,
  Backend: Backend,
  DevOps: DevOps,
  CloudServices: CloudServices,
  MachineLearning: MachineLearning,
};

const data = [
  {
    label: "Backend",
  },
  {
    label: "Frontend",
  },
  {
    label: "DevOps",
  },
  {
    label: "CloudServices",
  },
  {
    label: "MachineLearning",
  },
];

const Skills = () => {
  return (
    <section className="reveal px-4 sm:px-6 py-14 md:py-20" id="skills">
      <SectionHeading
        eyebrow="Toolkit"
        title="Skills"
        description="The languages, platforms and tools I use to build and study reliable systems."
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-2">
        {data.map(({ label }) => (
          <div key={label} className="flex w-full flex-col items-center">
            <h3 className="text-sm sm:text-base font-semibold uppercase tracking-wider text-muted-foreground mt-4">
              {label.replace(/([a-z])([A-Z])/g, "$1 $2")}
            </h3>
            {skillComponents[label] && skillComponents[label]()}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
