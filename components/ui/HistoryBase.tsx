"use client";
import ImageGallery from "react-image-grid-gallery";


const imagesArray = [
  {
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "https://i.ibb.co/xMjjSB4/1.jpg",
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "https://i.ibb.co/rkQFs8Q/2.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/BLx8w4p/3.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/nkDjskP/4.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/QYsJMZc/5.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/jJBQ8tQ/6.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/j5jyY6c/7.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/25kBNzy/8.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/4mWfyTX/9.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/jhx40h9/10.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/7V0fmkm/11.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/cFgkZCj/12.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/PG6RDRk/13.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/m5VsyV1/14.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/89g6y1J/15.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/PgWLSfG/16.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/0rMZgg9/17.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/zR0NNck/18.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/wM7cVsL/19.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/XF5CCTR/20.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/qrTc3Nt/21.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/7jkhSGD/22.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/t2t0x32/23.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/NYP1JL2/24.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/W2Mdk2q/25.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/xqhdKLN/26.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/ft8v15j/27.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/3CTNmyK/28.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/9492fhc/29.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/CVhLS3Z/30.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/7X1NJxv/31.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/P4d1WsH/32.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/KzPKnGy/33.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/rkdPDkn/34.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/VQ5QJFM/35.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/D4tNm2L/36.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/3Bs1vBY/37.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/hC87QDd/38.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/5GXhDnR/39.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/H7gCDYk/40.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/pb7THdV/41.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/f0pFjB8/42.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/gdGx9JV/43.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/9ghL7r4/44.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/C92qS3G/45.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/r4s2R59/46.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/PGqsr7w/47.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/hYNKmyP/48.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/tPsNTqS/49.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/c6mkkLX/50.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/FYs8gpy/51.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/31qX6Gw/52.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/ZVWBnsT/53.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/S0gxCp1/54.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/5FcKgrm/55.jpg",
  },
];


export default function HistoryBase() {
  return ( 
  <ImageGallery imgArray={imagesArray} columnWidth={170} gapSize={10} />
  )
}