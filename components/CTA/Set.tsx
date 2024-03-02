import type { FC } from "react";

import { CheckCircle } from "lucide-react";
import { VariantProps, tv } from "tailwind-variants";
import Image from "next/image";

import { Button } from "../Button";
import { Avatar } from "../Avatar";
import { FreshEyesAuditSchedulingLink } from "@/config/navigation.config";
import { useRef } from "react";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import BottomPanel from "../ui/BottomSheet";

const setCta = tv({
  base: "rounded-[20px] px-10 py-10 text-center text-black shadow-sm",
  variants: {
    variant: {
      sun: "bg-sun",
      mint: "bg-mint",
      violet: "bg-violet",
    },
  },
  defaultVariants: {
    variant: "sun",
  },
});

type setCtaVariants = VariantProps<typeof setCta>;

type setCtaProps = setCtaVariants & {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonAdornment?: React.ReactNode;
  benefits?: string[];
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
};

export const SetCta: FC<setCtaProps> = ({
  title = "Набор в команду",
  description = "Узнайте подробнее про то, как попасть в команду",
  buttonText = "Консультация",
  buttonLink = FreshEyesAuditSchedulingLink,
  buttonAdornment = <DefaultButtonAdornment />,
  //   benefits = ['+-30 мин', 'Обратная связь'],
  secondaryButtonText,
  secondaryButtonLink,
  variant,
}) => {
  return (
    <div className={setCta({ variant })}>
      <div className="mx-auto max-w-4xl">
        <h2 className="font-accent text-4xl font-medium md:text-5xl">
          {title}
        </h2>
        <p className="text-md mx-auto mb-7 mt-5 max-w-3xl text-center">
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
          {/* <BottomPanel /> */}
          <a href="https://velolider-child.vercel.app">
          <button className="focus-default inline-block flex-shrink-0 cursor-pointer rounded-full bg-black px-[20px] py-[10px] !font-medium text-white transition-colors">
            Подробнее
          </button>
          </a>
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
