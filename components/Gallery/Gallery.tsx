"use client"

import React from 'react';
import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import { Button } from '@/components/Button';


import Agapov from '/public/images/gallery/2.jpg'
import Hatunceva from '/public/images/gallery/3.jpg'
import Shikin from '/public/images/gallery/4.jpg'
import Diblenko from '/public/images/gallery/5.jpg'


export default function Gallery() {
    return (
        <div className="p-5 md:px-40">
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4">


                <Link href="/blog/agapov-maksim-post" className="a-reset focus-default">
                    <div className="mt-10">
                        <Image src={Agapov} className='rounded-[20px] mb-5' alt={'person'} />
                        <p>Агапов Максим</p>
                    </div>
                </Link>

                <Link href="/blog/khatuntseva-alexandra" className="a-reset focus-default">
                <div >
                    <Image src={Hatunceva} className='rounded-[20px] mb-5' alt={'person'} />
                    <p>Хатунцева Александра</p>
                </div>
                </Link>

                <Link href="/blog/shikin-alexander" className="a-reset focus-default">
                <div className="mt-10">
                    <Image src={Shikin} className='rounded-[20px] mb-5' alt={'person'} />
                    <p>Шикин Александр</p>
                </div>
                </Link>

                <Link href="/blog/dyblenko-artyom" className="a-reset focus-default">
                <div>
                <Image src={Diblenko} className='rounded-[20px] mb-5' alt={'person'} />
                    <p>Дыбленко Артём</p>
                </div>
                </Link>
            </div>
            <Button as="a" href='/leaders' className="bg-green-btn text-black mt-10">
                Все спортсмены
            </Button>
        </div>
    );
}