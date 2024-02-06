'use client'
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

const CardScroll = ({i, title, description, src, url, color, progress, range, targetScale}: any) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className={styles.cardContainer}>  
    <motion.div 
        style={{scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className="flex flex-col relative top-[-25%] lg:h-[500px] lg:w-[1000px] lg:p-[50px] rounded-[25px] origin-top"
      >
        <Card isFooterBlurred >
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={`/images/banner/${src}`} />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="/images/portraits/velo.jpg" />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">{title}</p>
              <p className="text-tiny text-white/60">{description}</p>
            </div>
          </div>
          <a href="/projects/lazy"><Button radius="full" size="sm">Перейти</Button></a>
        </CardFooter>
      </Card>


        {/* <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
            <span>
              <a href={url} target="_blank">See more</a>
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black"/>
              </svg>
            </span>
          </div>

          <div className={styles.imageContainer}>
            <motion.div
              className={styles.inner}
              style={{scale: imageScale}}
            >
              <Image
                fill
                src={`/images/banner/${src}`}
                alt="image" 
              />
            </motion.div>
          </div>

        </div> */}
      </motion.div>
    </div>
  )
}

export default CardScroll