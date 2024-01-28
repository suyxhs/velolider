"use client"

import React from 'react';
import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import { Button } from '@/components/Button';


import Agapov from '/public/images/posts/testStaffLogo/5.jpg'
import Kravchenko from '/public/images/posts/testStaffLogo/3.jpg'
import Tonkih from 'public/images/posts/testStaffLogo/4.jpg'
import AgapovDenis from '/public/images/posts/testStaffLogo/2.jpg'


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

                <Link href="/blog/kravchenko-victoria" className="a-reset focus-default">
                <div >
                    <Image src={Kravchenko} className='rounded-[20px] mb-5' alt={'person'} />
                    <p className='text-[15px] font-bold '>Кравченко Виктория</p>
                    <span className='text-[0.8em] opacity-80'>Тренер-стажёр младшей группы</span>
                </div>
                </Link>

                <Link href="/blog/tonkih-post" className="a-reset focus-default">
                <div className="mt-10">
                    <Image src={Tonkih} className='rounded-[20px] mb-5' alt={'person'} />
                    <p className='text-[15px] font-bold '>Тонких Илья</p>
                    <span className='text-[0.8em] opacity-80'>Тренер и механик</span>
                </div>
                </Link>

                <Link href="/blog/agapov-denis" className="a-reset focus-default">
                <div>
                    <Image src={AgapovDenis} className='rounded-[20px] mb-5' alt={'person'} />
                    <p className='text-[15px] font-bold '>Агапов Денис</p>
                    <span className='text-[0.8em] opacity-80'>Тренер средней группы</span>
                </div>
                </Link>
            </div>
            <Button as="a" href='/leaders#timelines' className="bg-green-btn text-black mt-10">
                Весь персонал
            </Button>
        </div>
    );
}