'use client';

/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from 'next/image';

import Zoom from 'react-medium-image-zoom';

export const MdxImageZoom = (props: ImageProps) => {
  return (
    <Zoom>
      <Image {...props} />
    </Zoom>
  );
};

