"use client"

import type { FC } from 'react';
import React from "react";
// import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

import { CheckCircle } from 'lucide-react';
import { VariantProps, tv } from 'tailwind-variants';
import Image from 'next/image';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";



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
          <Button onClick={handleOpen}>Отправить заявку</Button>
    <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
              Форма обратной связи{" "}
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
            Оставьте свои данные для обратной связи
          </Typography>
          <div className="grid gap-6">
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Ваше имя
            </Typography>
            <Input label="Имя" />
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Ваша почта
            </Typography>
            <Input label="Почта" />
            <Textarea label="Сообщение" />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            Отмена
          </Button>
          <Button variant="gradient" color="gray" onClick={handleOpen}>
            Отправить
          </Button>
        </DialogFooter>
      </Dialog>
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
