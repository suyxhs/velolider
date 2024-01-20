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
      <div className="px-container mx-auto max-w-container my-12"> 
      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Где проходят тренировки?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal dark:text-white">
          У основного состава тренировки проходят на шоссе, также наша команда специализируется на треке. <br />
          У резервного состава тренировки проходят на шоссе, а также на байке в лестной местности. <br />
          Новички тренируются на стадионах, в парках и в лестной местности.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          С какого возраста принимают в спортивную школу?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal dark:text-white">
          Набор в школу олимпийского резерва начинается с 7 лет.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Какие документы требуются?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal dark:text-white">
        Документы, необходимые для зачисления в группу начальной подготовки: <br />
        1. Свидетельства о рождении (ксерокопия) <br />
        2. СНИЛС (ксерокопия) <br />
        3. Медицинский полис (ксерокопия)  <br />
        4. Ксерокопия паспорта (одного из родителей)  <br />
        5. Медицинская справка с поликлиники <br />
        6. Справка из школы <br />
        7. Фото 3х4 ( от 1 до 4) <br />
        8. ГТО - регистрация на сайте (УИН ГТО) <br />
        9. СДО - сертификат дополнительного образования (<a href="https://pfdo.govvrn.ru/app">https://pfdo.govvrn.ru/app</a>) <br />
        </AccordionBody>
      </Accordion>
      </div>
    </>
  );
}