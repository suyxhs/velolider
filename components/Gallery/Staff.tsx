"use client"

import React from 'react';
import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import { Button } from '@/components/Button';


import Agapov from '/public/images/gallery/agapov.jpg'
import Kravchenko from '/public/images/reviews/kravchenko.jpg'
import Tonkih from 'public/images/posts/adopting-a-no-code-mindset/t9.jpg'
import AgapovDenis from '/public/images/posts/agapovDenis/staffLogo.jpg'


export default function Staff() {
    return (
        <div className="p-5 md:px-40">
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4">


                <Link href="/blog/agapov-oleg" className="a-reset focus-default">
                    <div className="mt-10">
                        <Image src={Agapov} className='rounded-[20px] mb-5' alt={'person'} />
                        <p className='text-[15px] font-bold '>Агапов Олег</p>
                        <span className='text-[0.8em] opacity-80'>Главный тренер</span>
                    </div>
                </Link>

                <div >
                    <Image src={Kravchenko} className='rounded-[20px] mb-5' alt={'person'} />
                    <p className='text-[15px] font-bold '>Кравченко Виктория</p>
                    <span className='text-[0.8em] opacity-80'>Тренер-стажёр младшей группы</span>
                </div>

                <div className="mt-10">
                    <Image src={Tonkih} className='rounded-[20px] mb-5' alt={'person'} />
                    <p className='text-[15px] font-bold '>Тонких Илья</p>
                    <span className='text-[0.8em] opacity-80'>Механик</span>
                </div>

                <div>
                    <Image src={AgapovDenis} className='rounded-[20px] mb-5' alt={'person'} />
                    <p className='text-[15px] font-bold '>Агапов Денис</p>
                    <span className='text-[0.8em] opacity-80'>Тренер средней группы</span>
                </div>
            </div>
            <Button as="a" href='/blog' className="bg-green-btn text-black mt-10">
                Весь персонал
            </Button>
        </div>
    );
}