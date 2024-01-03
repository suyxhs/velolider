"use client";
import ImageGallery from "react-image-grid-gallery";

const imagesArray = [
  {
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "https://i.ibb.co/dbs11Gt/1.jpg",
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "https://i.ibb.co/bdMRcTT/2.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/wQ2k4bZ/3.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/f2mRpfC/4.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/jWbRL98/5.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/c19Wbcr/6.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/C2J67L4/7.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/3p0cVfy/8.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/VgMf0Xt/9.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/6ZCDMqf/10.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/SPdL1GT/11.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/F0wzvtL/12.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/WFh7HGD/13.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/9ZnWDnb/14.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/2d3YhgB/15.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/2KS3jfC/16.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/Y82ZFH5/17.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/bF4y3TC/18.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/N9KbQ01/19.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/232Q83x/20.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/N71LkN7/21.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/R9kNWVq/22.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/Mk6bqfS/23.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/1RRsd3w/24.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/vBzn2Th/25.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/B31Jvgs/26.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/QbVNfNY/27.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/VqQxHYb/28.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/gzzj5bc/29.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/R3by8n1/30.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/Jd1FXN4/31.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/1JbDL80/32.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/6NtWMP5/33.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/4j1KyNj/34.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/gTdstKb/35.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/QJNhDgC/36.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/hR9TxsH/37.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/0GncQPx/38.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/ZKcM289/39.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/18YcJLs/40.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/ZWxn9LV/41.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/5rB96pS/42.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/C81zzMF/43.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/Bzdzj9N/44.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/TBTvq58/45.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/mXZXj8V/46.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/SwMp99C/47.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/YQCgGVT/48.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/7kv8ZxD/49.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/9wcDWx8/50.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/y0KjxhY/51.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/YN2FsV5/52.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/L9tD1Bw/53.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/r4wckRh/54.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/KVLhMsL/55.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/nMHhTXm/56.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/mzCVf3d/57.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/8bjJwXx/58.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i.ibb.co/7kjgGmD/59.jpg",
  },
];


export default function TestGallery() {
  return ( 
  <ImageGallery imgArray={imagesArray} columnWidth={190} gapSize={10} />
  )
}