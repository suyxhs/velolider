import Image from "next/image";

import Mockup from "/public/mockup-main.png"

import Card01 from "/public/images/user/03.jpg"
import Card02 from "/public/images/user/07.jpg"
import Card03 from "/public/images/user/02.jpg"
import Card04 from "/public/images/user/01.jpg"
import Card05 from "/public/images/user/04.jpg"
import Card06 from "/public/images/user/06.jpg"

export function SectionCards() {
    return(
        <>
        <section className="w-full pb-20">
            <Image 
            src={Mockup}
            alt="Mockup"
            className="sticky z-10 top-56 mx-auto -mt-[32rem] mb-16"
            />

            <h2 className="text-center text-4xl font-semibold mb-56">Добро пожаловать в <span className="text-green-title-card">команду</span></h2>
            <div className="relative w-full max-w-area-cards h-area-cards mx-auto">
                <Image src={Card01} className="absolute md:top-8 md:left-44 w-80 rounded-2xl hidden md:block" alt="Card01" />
                <Image src={Card02} className="absolute left-0 bottom-32 w-80 rounded-2xl hidden md:block" alt="Card02" />
                <Image src={Card03} className="absolute bottom-0 md:left-80 w-80 rounded-2xl hidden md:block" alt="Card03" />
                <Image src={Card04} className="absolute top-0 right-32 w-80 rounded-2xl hidden md:block" alt="Card04" />
                <Image src={Card05} className="absolute right-0 bottom-28 w-80 rounded-2xl hidden md:block" alt="Card05" />
                <Image src={Card06} className="absolute bottom-0 right-80 w-80 rounded-2xl hidden md:block" alt="Card06" />
            </div>
        </section>
        </>
    )
}