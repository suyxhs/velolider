"use client"

import type { FC } from 'react';
import React from "react";

import { CheckCircle } from 'lucide-react';
import { VariantProps, tv } from 'tailwind-variants';
import Image from 'next/image';
import Popup from '../Modal/Modal';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


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
  buttonLink = Popup,
  buttonAdornment = <DefaultButtonAdornment />,
//   benefits = ['+-30 мин', 'Обратная связь'],
  secondaryButtonText,
  secondaryButtonLink,
  variant,
}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
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
          <Button className='focus-default inline-block flex-shrink-0 cursor-pointer rounded-full px-[20px] py-[10px] !font-medium transition-colors bg-black text-white' onPress={onOpen}>Оставить заявку</Button>
      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-black backdrop-opacity-20"
        }}
      >
        <ModalContent className='bg-black rounded-lg text-white'>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button className='bg-mint p-3 rounded-md text-black' color="danger" variant="ghost" onPress={onClose}>
                  Отправить
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
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
