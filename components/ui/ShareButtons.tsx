"use client"

import React from 'react';
import { OKShareButton, TelegramShareButton, ViberShareButton, VKShareButton, WhatsappShareButton } from 'react-share';
  
const ShareButtons = ({ url }: any) => {
    // const currentPageUrlReal = window.location.href;
  return (
    <div>
      <OKShareButton url={url} >
        <button>Поделиться в Facebook</button>
      </OKShareButton>
      <TelegramShareButton url={url} >
        <button>Поделиться в Twitter</button>
      </TelegramShareButton>
      <ViberShareButton url={url} >
        <button>Поделиться в Viber</button>
      </ViberShareButton>
      <VKShareButton url={url} >
        <button>Поделиться в VK</button>
      </VKShareButton>
      <WhatsappShareButton url={url} >
        <button>Поделиться в Whatsapp</button>
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButtons;
