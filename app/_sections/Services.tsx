"use client"

import { Check } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Avatar
} from "@material-tailwind/react";

import { Button } from '@/components/Button';
import { CodeBrackets, Pointer } from '@/components/Illustration';
import { Growth, PuzzlePiece, SpeedingClock } from '@/components/Icon';
import { Label } from '@/components/Label';
import { FreshEyesAuditSchedulingLink } from '@/config/navigation.config';
import Image from 'next/image';


export const ServicesSection = () => {
  return (
    <div className="relative mb-12 bg-gradient-to-b from-black-50 via-sun/5 to-black-50 dark:from-black dark:to-black md:mb-24">
      <div className="px-container mx-auto max-w-container">
        <div className="mx-auto max-w-4xl text-center md:mb-12">
          <h2 className="font-accent text-4xl font-medium md:text-5xl">
            Мы в социальных сетях
          </h2>
        </div>
        <div className="mt-12 flex items-center justify-center">
          <Label color="gray" size="lg">
            Спорт - норма жизни
          </Label>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
          <div className='flex flex-col md:flex-row'>
            {/* <div className="relative m-10 max-w-sm rounded-2xl border-2 border-violet/75 bg-black-50 px-8 py-10 ring-2 ring-violet/25 ring-offset-2 dark:bg-black dark:ring-offset-black">
                  <h3 className="font-accent text-3xl font-medium">
                    <span className="text-violet">QR код</span>
                  </h3>
                  <Image
                    src="/images/qr.jpg"
                    alt="Team VeloLider"
                    width={300}
                    height={300}
                    className=" rounded-md object-cover mb-10"
                  />
                  <Button
                    as="a"
                    href={`${FreshEyesAuditSchedulingLink}?source=$QR код`}
                    size="sm"
                  >
                    Консультация
                  </Button>
                </div> */}
            <Card className="max-w-sm my-10 md:m-10 relative border-2 border-violet/75 bg-black-50 px-8 py-10 ring-2 ring-violet/25 ring-offset-2">
              <CardHeader floated={false} className="h-80">
                <Image
                  src="/images/qr.jpg"
                  alt="Team VeloLider"
                  width={300}
                  height={300}
                  className=" rounded-md object-cover"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  QR код
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                  <Button
                    as="a"
                    href={`${FreshEyesAuditSchedulingLink}?source=$QR код`}
                    size="sm"
                  >
                    Консультация
                  </Button>
                </Typography>
              </CardBody>

            </Card>

            <Card
              shadow={false}
              className="max-w-sm my-10 md:m-10 relative border-2 border-violet/75 bg-black-50 px-8 py-10 ring-2 ring-violet/25 ring-offset-2 items-end justify-center overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-popup bg-cover"
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                  variant="h4"
                  color="white"
                  className="mb-6 font-medium leading-[1.5]"
                >
                  Наша группа ВК по ссылке
                </Typography>
                <Typography variant="h5" className="mb-4 text-gray-400">
                  ВелоЛидер
                </Typography>
                <Button
                as="a"
                href="https://vk.com/teamvelolider"
                size="sm"
              >
                Группа в ВК
              </Button>
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="tania andrew"
                  className="border-2 border-white"
                  src="https://sun9-15.userapi.com/impf/M_9AQLumU0aHI7aPZkerb_qRhdQJ1mpui5Eifw/B2eSDbH3Glo.jpg?size=1215x2160&quality=95&sign=0f1c19f98a6ec05136e54aa8d91cc573&type=album"
                />
              </CardBody>
            </Card>

            {/* <div className="relative m-10 max-w-sm rounded-2xl border-2 border-violet/75 bg-black-50 px-8 py-10 ring-2 ring-violet/25 ring-offset-2 dark:bg-black dark:ring-offset-black">
              <h3 className="font-accent text-3xl font-medium">
                <span className="text-violet">Ссылка</span>
              </h3>

              <Image
                src="/images/logoSport.png"
                alt="Team VeloLider"
                width={250}
                height={250}
                className=" rounded-md object-cover "
              />

              <Button
                as="a"
                href="https://vk.com/teamvelolider"
                size="sm"
              >
                Группа в ВК
              </Button>
            </div> */}
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center gap-10 md:flex-row lg:gap-20">
          {coreBenefits.map(({ title, description, Icon }) => {
            return (
              <div key={title} className="flex max-w-xs flex-col gap-2">
                <Icon className="h-20 w-20" />
                <span className="font-semibold">{title}</span>
                <span className="opacity-90">{description}</span>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

const services = [
  {
    title: 'QR код',
    benefits: [
      'I listen to user feedback, develop solutions, and manage the delivery.',
      'Worried about a bloated backlog? Whenever needed, I can directly execute on ideas we developed.',
    ],
    Decoration: Pointer,
  },
  {
    title: 'Ссылка',
    benefits: [
      'I design and implement features based on your existing strategy.',
      'Lacking detailed mockups and specs? No worries, these are exciting puzzles to deal with.',
    ],
    Decoration: CodeBrackets,
  },
];

const coreBenefits = [
  {
    title: 'A silver bullet for your team.',
    description: 'Staying flexible as your product grows.',
    Icon: PuzzlePiece,
  },
  {
    title: 'You ship what matters.',
    description: 'Without agonizing over code details.',
    Icon: Growth,
  },
  {
    title: 'You spend more time on strategy.',
    description: 'Less on tightly managing engineers.',
    Icon: SpeedingClock,
  },
];
