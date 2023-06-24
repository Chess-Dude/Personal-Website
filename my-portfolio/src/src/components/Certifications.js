import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { certifications } from "../data";

export default function Certifications() {
  return (
    <section id="Certifications">
      {/* Container */}
      <div className="container px-5 py-10 mx-auto">
        {/* Title and description */}
        <div className="text-center mb-20">
          {/* Icon */}
          <ChipIcon className="w-10 inline-block mb-4" />
          {/* Title */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Certifications
          </h1>
          {/* Description */}
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here are some of my certifications!
          </p>
        </div>
        {/* Certifications list */}
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="flex justify-center items-center w-full">
            {/* Mapping through certifications array */}
            {certifications.map((certification) => (
              <div key={certification} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  {/* Badge icon */}
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  {/* Certification name */}
                  <span className="title-font font-medium text-white">
                    {certification}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
