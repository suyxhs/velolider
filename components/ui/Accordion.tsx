'use client';

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export function DefaultAccordion() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value: React.SetStateAction<number>) => setOpen(open === value ? 0 : value);
 
  return (
    <>
    <div className="mx-auto max-w-4xl text-center md:mb-12">
          <h2 className="font-accent text-4xl font-medium md:text-5xl">
            Частые вопросы
          </h2>
        </div>
      <div className="px-container mx-auto max-w-container my-12 "> 
      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Где проходят тренировки?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          text text text
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Вопрос 2?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          text text text
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Вопрос 3?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          text text text
        </AccordionBody>
      </Accordion>
      </div>
    </>
  );
}