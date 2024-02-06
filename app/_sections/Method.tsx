"use client"

import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { projects } from '../../lib/data';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import CardScroll from "@/components/CardScroll";

export default function MethodSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <>
    <div className="gap-2 grid grid-cols-12 grid-rows-2 px-8 pb-10">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/images/projects/preparingForTheSeason/logo.jpg" />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="/images/portraits/velo.jpg" />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Новости</p>
              <p className="text-tiny text-white/60">Подготовка к сезону</p>
            </div>
          </div>
          <a href="/projects/preparing-for-the-season"><Button radius="full" size="sm">Перейти</Button></a>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/images/posts/schedule.png" />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="/images/portraits/velo.jpg" />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Пост</p>
              <p className="text-tiny text-white/60">Расписание занятий</p>
            </div>
          </div>
          <a href="/blog/class-schedule"><Button radius="full" size="sm">Перейти</Button></a>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Image

          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/images/projects/results/logo.jpg" />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="/images/portraits/velo.jpg" />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Новости</p>
              <p className="text-tiny text-white/60">Подводим итоги сезона</p>
            </div>
          </div>
          <a href="/projects/results"><Button radius="full" size="sm">Перейти</Button></a>
        </CardFooter>
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Блог</p>
          <h4 className="text-white font-medium text-2xl">Попов Антон</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="/images/posts/adopting-a-no-code-mindset/popov.jpg" />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="/images/portraits/velo.jpg" />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Кравченко Виктория</p>
              <p className="text-tiny text-white/60">Тренер стажёр</p>
            </div>
          </div>
          <a href="/blog/popov-anton-post"><Button radius="full" size="sm">Перейти</Button></a>
        </CardFooter>
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Новости</p>
          <h4 className="text-white/90 font-medium text-xl">В тени чемпионов</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="/images/portraits/velo.jpg" />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="/images/portraits/velo.jpg" />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Кравченко Виктория</p>
              <p className="text-tiny text-white/60">Тренер стажёр</p>
            </div>
          </div>
          <a href="/projects/lazy"><Button radius="full" size="sm">Перейти</Button></a>
        </CardFooter>
      </Card>
    </div>
    
    {/* <div>
    {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <CardScroll key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </div> */}
    
    </>
  );
}
