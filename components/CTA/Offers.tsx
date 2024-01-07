"use client"

import type { FC } from 'react';
import React from "react";
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

import { CheckCircle } from 'lucide-react';
import { VariantProps, tv } from 'tailwind-variants';
import Image from 'next/image';
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   Input,
//   Textarea,
//   Typography,
// } from "@material-tailwind/react";



// import { Button } from '../Button';
import { Avatar } from '../Avatar';
import { FreshEyesAuditSchedulingLink } from '@/config/navigation.config';

const offers = tv({
  base: 'rounded-[20px] px-10 py-10 text-center text-black shadow-sm',
  variants: {
    variant: {
      sun: 'bg-sun',
      mint: 'bg-mint',
      violet: 'bg-violet',
    },
  },
  defaultVariants: {
    variant: 'sun',
  },
});

type OffersVariants = VariantProps<typeof offers>;

type OffersProps = OffersVariants & {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonAdornment?: React.ReactNode;
  //   benefits?: string[];
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
};

export const Offers: FC<OffersProps> = ({
  title = "Связаться с нами",
  description = 'Команда ВелоЛидер стремится быть доступной и своевременно отвечать на все поступающие в наш адрес запросы.',
  buttonText = 'Оставить заявку',
  buttonLink = FreshEyesAuditSchedulingLink,
  buttonAdornment = <DefaultButtonAdornment />,
  //   benefits = ['+-30 мин', 'Обратная связь'],
  secondaryButtonText,
  secondaryButtonLink,
  variant,
}) => {

  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  return (
    <div className={offers({ variant })}>
      <div className="mx-auto max-w-4xl">
        <h2 className="font-accent text-4xl font-medium md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mb-7 mt-5 max-w-3xl text-center text-md">
          {description}
        </p>
        <div className="flex items-center justify-center gap-4">
          {/* {secondaryButtonLink && secondaryButtonText && (
            <Button
              as="a"
              href={secondaryButtonLink}
              variant="text"
              className="!text-black"
            >
              {secondaryButtonText}
            </Button>
          )} */}
          <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="bg-black text-white focus-default inline-block flex-shrink-0 cursor-pointer rounded-full px-[20px] py-[10px] !font-medium transition-colors">
        Отправить заявку
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-white/30 backdrop-blur-md data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[20px] bg-popup bg-cover p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[25px] font-medium text-white">
            Форма обратной связи
        </Dialog.Title>
        <Dialog.Description className="text-green-btn mt-[5px] mb-5 text-[15px] leading-normal">
            Оставьте свои данные для обратной связи
        </Dialog.Description>
        <fieldset className="mb-[15px] gap-5">
          <label className="text-white w-[90px] text-right text-[15px]" htmlFor="name">
            Ваше имя
          </label>
          <input
            className="border-green-btn text-black shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="name"
            placeholder='Имя'
          />
        </fieldset>
        <fieldset className="mb-[15px]  gap-5">
          <label className="text-white w-[90px] text-right text-[15px]" htmlFor="username">
            Ваша почта
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="username"
            placeholder='velolider@example.com'
          />
        </fieldset>
        <fieldset className="mb-[15px] gap-5">
          <label className="text-white w-[90px] text-right text-[15px]" htmlFor="message">
            Ваше сообщение
          </label>
          <textarea
            className="p-4 text-violet11 shadow-violet7 focus:shadow-violet8 h-[100px] inline-flex  w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="message"
            placeholder='Сообщение'
          />
        </fieldset>
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className="bg-green-btn text-green11 hover:bg-green-btn focus:shadow-green-btn inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
              Отправить
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
          {buttonAdornment}
        </div>
        {/* {benefits && (
          <div className="mt-6 flex justify-center gap-4 text-xs opacity-50 sm:text-sm">
            {benefits.map(benefit => {
              return (
                <span key={benefit} className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" /> {benefit}
                </span>
              );
            })}
          </div>
        )} */}
      </div>
    </div>
  );
};

const DefaultButtonAdornment = () => {
  return (
    <div className="hidden -space-x-3 overflow-hidden p-1 sm:flex">
      <Image
        src="/images/reviews/kravchenko.jpg"
        width={10}
        height={10}
        alt="author"
        className="h-11 w-11 rounded-full object-cover"
      />
      <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-mint ring-2 ring-black-100">
        <span className="text-2xl font-semibold text-black/20">?</span>
      </div>
    </div>
  );
};
