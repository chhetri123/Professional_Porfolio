"use client";

import React from "react";
import { Frontend, Backend, DevOps, CloudServices } from "./constant";

interface SkillComponents {
  [key: string]: () => JSX.Element;
}

const skillComponents: SkillComponents = {
  Frontend: Frontend,
  Backend: Backend,
  DevOps: DevOps,
  CloudServices: CloudServices,
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
];

const Skills = () => {
  return (
    <section className="md:py-10 mt-32 mb-32" id="skills">
      <div className="flex flex-col items-center justify-center py-5">
        <p className="font-bold text-3xl">Skills</p>
        <div className="h-[2px] w-20 bg-blue-500 rounded-full my-1"></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        {data.map(({ label }) => (
          <div key={label} className="flex flex-col md:ml-[1%] ml-[5%]">
            <div className="flex flex-col">
              <span className="animate_in text-base md:text-xl mt-1">
                {label}
              </span>
              <div className="w-16 h-[1px] bg-blue-500 rounded-full my-1"></div>
            </div>

            <div className="flex justify-center items-center gap-5">
              {skillComponents[label] && <div>{skillComponents[label]()}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
