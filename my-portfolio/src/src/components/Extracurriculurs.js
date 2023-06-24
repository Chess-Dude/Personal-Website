import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { extracurriculurs } from "../data";

export default function Extracurriculurs() {
  return (
    <section id="extracurriculurs">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Extracurriculurs
        </h1>
        <div className="flex flex-wrap justify-center">
          {extracurriculurs.map((extracurriculur) => (
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded flex flex-col items-center">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{extracurriculur.jobDescription}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="extracurriculurs"
                    src={extracurriculur.image}
                    className="w-16 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white text-lg">
                      {extracurriculur.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {extracurriculur.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
