import Image from "next/image";
import { GridContainer } from "../../components/grid";
import { Button } from '@/components/Button';
import { FreshEyesAuditSchedulingLink } from '@/config/navigation.config';


import IconFile from '/public/icon-file.svg'
import IconHand from '/public/icon-hand.svg'
import IconHand2 from '/public/icon-hand-02.svg'
import IconMockups from '/public/mockup.svg'

export function SectionHero() {
    return (
        <section className="relative rounded-t-3xl w-full h-section-hero pt-16 overflow-hidden bg-hero bg-top">
            <GridContainer className="flex flex-col items-center">
                <div className="w-full max-w-text-hero text-center">
                    <h3 className="text-xl font-medium text-white mb-4">Официальный сайт ведущей команды по велоспорту</h3>
                    <h1 className="text-white text-5xl/normal font-semibold mb-2">ВелоЛидер</h1>
                    <div className="flex items-center justify-center gap-10">
                        <button className="flex items-center gap-2">
                            <Image
                                src={IconFile}
                                alt="Icon File"
                            />
                            <span className="text-white font-medium ">Обратная связь</span>
                        </button>
                        <Button as="a" href={`${FreshEyesAuditSchedulingLink}?source=Hero`} className="bg-green-btn text-black">
                            Консультация
                        </Button>
                    </div>
                </div>
                <div className="relative max-w-area-icons w-full mt-4 h-28">
                    <Image
                        src={IconHand}
                        alt="Icon Hand"
                        className="absolute left-0 bottom-0"
                    />
                    <Image
                        src={IconHand2}
                        alt="Icon Hand02"
                        className="absolute top-0 right-0"
                    />
                </div>
                <div className="absolute -bottom-44 w-full max-w-area-mockups flex justify-between">
                    <Image
                        src={IconMockups}
                        alt="Icon Mockups"
                        className="relative -rotate-12 top-[1.1rem] left-[.3rem] hidden md:block"
                    />
                    <Image
                        src={IconMockups}
                        alt="Icon Mockups"
                        className="relative rotate-12 top-[1.1rem] left-[.3rem] hidden md:block"
                    />
                </div>
            </GridContainer>
        </section>
    )
}