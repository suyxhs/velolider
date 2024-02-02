"use client"

import React, { useState, useEffect } from "react";
import { Cross2Icon } from '@radix-ui/react-icons';
import clsx from "clsx"

const ComponentNavBar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;

      // Установка состояния видимости в зависимости от позиции прокрутки
      setIsNavbarVisible(scrollPosition >= 300 && scrollPosition + windowHeight < bodyHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isNavbarVisible && <NavigationBottom />}
    </div>
  );
};



const NavigationBottom = () => {
  return (
    <div className='bg-white max-h-[4.4rem] px-6 rounded-xl fixed bottom-2 md:left-[560px] left-[30px] border-2 border-green-btn transition-opacity duration-500 z-40'>
      <ul className="flex relative items-center">
        <li className="w-16 h-16 flex items-center pr-4">
          <a href="/" className="flex flex-col items-center">
            <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z" fill="#000000" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            <span className=" text-[10px] text-black">Домой</span>
          </a>
        </li>

        <li className="w-16 h-16 flex items-center pr-4">
          <a href="/blog" className="flex flex-col items-center">
            <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 11.0001V4.00006L1 4.00006L1 11.0001H14ZM15 4.00006V11.0001C15 11.5523 14.5523 12.0001 14 12.0001H1C0.447715 12.0001 0 11.5523 0 11.0001V4.00006C0 3.44778 0.447715 3.00006 1 3.00006H14C14.5523 3.00006 15 3.44778 15 4.00006ZM2 5.25C2 5.11193 2.11193 5 2.25 5H5.75C5.88807 5 6 5.11193 6 5.25V9.75C6 9.88807 5.88807 10 5.75 10H2.25C2.11193 10 2 9.88807 2 9.75V5.25ZM7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H7.5ZM7 9.5C7 9.22386 7.22386 9 7.5 9H12.5C12.7761 9 13 9.22386 13 9.5C13 9.77614 12.7761 10 12.5 10H7.5C7.22386 10 7 9.77614 7 9.5ZM7.5 5C7.22386 5 7 5.22386 7 5.5C7 5.77614 7.22386 6 7.5 6H11.5C11.7761 6 12 5.77614 12 5.5C12 5.22386 11.7761 5 11.5 5H7.5Z" fill="#000000" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            <span className=" text-[10px] text-black">Блог</span>
          </a>
        </li>

        <li className="w-16 h-16 flex items-center pr-4">
          <a href="/projects" className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill="#000000" className="w-5 h-5">
              <path fill-rule="evenodd" d="M10 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a2 2 0 0 0 2 2h8a2 2 0 0 1-2-2V3ZM4 4h4v2H4V4Zm4 3.5H4V9h4V7.5Zm-4 3h4V12H4v-1.5Z" clip-rule="evenodd" />
              <path d="M13 5h-1.5v6.25a1.25 1.25 0 1 0 2.5 0V6a1 1 0 0 0-1-1Z" />
            </svg>
            <span className=" text-[10px] text-black">Новости</span>
          </a>
        </li>

        <li className="w-7 h-16 flex items-center pr-4">
          <a href="/leaders" className="flex flex-col items-center">
            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
              width="20" height="20" viewBox="0 0 122.699 122.699"
            >
              <g>
                <circle cx="19.5" cy="12.2" r="12.1" />
                <path d="M6,66.699h1.2v24c0,3.301,2.7,6,6,6h12.6c3.3,0,6-2.699,6-6V89.3c-1.1-2.101-1.8-4.5-1.8-7v-31.4c0-6.1,3.7-11.4,9-13.7
		v-2.4c0-3.3-2.7-6-6-6H6c-3.3,0-6,2.7-6,6v25.9C0,64,2.6,66.699,6,66.699z"/>
                <circle cx="103.3" cy="12.2" r="12.1" />
                <path d="M83.699,34.7v2.4c5.301,2.3,9,7.6,9,13.7v31.3c0,2.5-0.6,4.9-1.799,7v1.4c0,3.3,2.699,6,6,6h12.6c3.3,0,6-2.7,6-6v-24
		h1.199c3.301,0,6-2.7,6-6V34.7c0-3.3-2.699-6-6-6h-27C86.4,28.7,83.699,31.399,83.699,34.7z"/>
                <path d="M39.1,50.899L39.1,50.899v9.8v21.6c0,3.3,2.7,6,6,6h2.3v28.3c0,3.3,2.7,6,6,6h16.1c3.3,0,6-2.7,6-6v-28.4h2.3
		c3.3,0,6-2.699,6-6V60.7v-9.8l0,0c0-3.3-2.7-6-6-6H45.1C41.7,44.899,39.1,47.6,39.1,50.899z"/>
                <circle cx="61.4" cy="26" r="13.9" />
              </g>
            </svg>
            <span className=" text-[10px] text-black">Состав</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ComponentNavBar;