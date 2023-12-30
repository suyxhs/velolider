/* eslint-disable @next/next/no-img-element */
'use client'

import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
import Image, { ImageProps } from 'next/image';


import Kravchenko from '/public/images/reviews/kravchenko.jpg'
import img1 from '/public/images/galleryPage/1.jpg'
import img2 from '/public/images/galleryPage/2.jpg'
import img3 from '/public/images/galleryPage/3.jpg'
import img4 from '/public/images/galleryPage/4.jpg'
import img5 from '/public/images/galleryPage/5.jpg'
import img6 from '/public/images/galleryPage/6.jpg'
import img7 from '/public/images/galleryPage/7.jpg'
import img8 from '/public/images/galleryPage/8.jpg'
import img9 from '/public/images/galleryPage/9.jpg'
import img10 from '/public/images/galleryPage/10.jpg'
import img11 from '/public/images/galleryPage/11.jpg'
import img12 from '/public/images/galleryPage/12.jpg'
import img13 from '/public/images/galleryPage/13.jpg'
import img14 from '/public/images/galleryPage/14.jpg'
import img15 from '/public/images/galleryPage/15.jpg'
import img16 from '/public/images/galleryPage/16.jpg'
import img17 from '/public/images/galleryPage/17.jpg'
import img18 from '/public/images/galleryPage/18.jpg'
import img19 from '/public/images/galleryPage/19.jpg'
import img20 from '/public/images/galleryPage/20.jpg'
import img21 from '/public/images/galleryPage/21.jpg'
import img22 from '/public/images/galleryPage/22.jpg'
import img23 from '/public/images/galleryPage/23.jpg'
import img24 from '/public/images/galleryPage/24.jpg'
import img25 from '/public/images/galleryPage/25.jpg'
import img26 from '/public/images/galleryPage/26.jpg'
import img27 from '/public/images/galleryPage/27.jpg'
import img28 from '/public/images/galleryPage/28.jpg'
import img29 from '/public/images/galleryPage/29.jpg'
import img30 from '/public/images/galleryPage/30.jpg'
import img31 from '/public/images/galleryPage/31.jpg'
import img32 from '/public/images/galleryPage/32.jpg'
import img33 from '/public/images/galleryPage/33.jpg'
import img34 from '/public/images/galleryPage/34.jpg'
import img35 from '/public/images/galleryPage/35.jpg'
import img36 from '/public/images/galleryPage/36.jpg'
import img37 from '/public/images/galleryPage/37.jpg'
import img38 from '/public/images/galleryPage/38.jpg'
import img39 from '/public/images/galleryPage/39.jpg'
import img40 from '/public/images/galleryPage/40.jpg'
import img41 from '/public/images/galleryPage/41.jpg'
import img42 from '/public/images/galleryPage/42.jpg'
import img43 from '/public/images/galleryPage/43.jpg'
import img44 from '/public/images/galleryPage/44.jpg'
import img45 from '/public/images/galleryPage/45.jpg'
import img46 from '/public/images/galleryPage/46.jpg'
import img47 from '/public/images/galleryPage/47.jpg'
import img48 from '/public/images/galleryPage/48.jpg'
import img49 from '/public/images/galleryPage/49.jpg'
import img50 from '/public/images/galleryPage/50.jpg'
import img51 from '/public/images/galleryPage/51.jpg'
import img52 from '/public/images/galleryPage/52.jpg'
import img53 from '/public/images/galleryPage/53.jpg'
import img54 from '/public/images/galleryPage/54.jpg'
import img55 from '/public/images/galleryPage/55.jpg'
import img56 from '/public/images/galleryPage/56.jpg'
import img57 from '/public/images/galleryPage/57.jpg'
import img58 from '/public/images/galleryPage/58.jpg'
import img59 from '/public/images/galleryPage/59.jpg'



export function MasonryGridGallery() {

  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <div>
        
        <Image src={Kravchenko} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

        <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>ВелоЛидер</DialogHeader>
        <DialogBody>
        <Image src={Kravchenko} onClick={handleOpen} className='rounded-[20px] h-[400px] w-full object-cover object-center' alt={'person'} />

        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Закрыть</span>
          </Button>
        </DialogFooter>
      </Dialog>
          </div>
          <div>
          <Image src={img1} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />
         
          </div>
          <div>
          <Image src={img2} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img3} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img4} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img5} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img6} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img7} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img8} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img9} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img10} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img11} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img12} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img13} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img14} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img15} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img16} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img17} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img18} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img19} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img20} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img21} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img22} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img23} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img24} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img25} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img26} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img27} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img28} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img28} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img29} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img30} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img31} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img32} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img33} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img34} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img35} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img36} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img37} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img38} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img39} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img40} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img41} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img42} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img43} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img44} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img45} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img46} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img47} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img48} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img49} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img50} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img51} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img52} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img53} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img54} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img55} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img56} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img57} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <Image src={img58} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
          <div>
          <Image src={img59} onClick={handleOpen} className='rounded-[20px] h-full w-full object-cover object-center' alt={'person'} />

          </div>
        </div>
      </div>
    );
  }
  