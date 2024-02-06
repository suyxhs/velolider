'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { FC } from 'react';

import { Video } from '../[slug]/_mdxComponents/Video'
import { Callout } from '../[slug]/_mdxComponents/Callout'
import { ImageZoom } from '../[slug]/_mdxComponents/Image'
import VideoPlayer from '../[slug]/_mdxComponents/VideoPlayer';

type HighlightContentProps = {
  code: string;
};

export const HighlightContent: FC<HighlightContentProps> = ({ code }) => {
  const MDXContent = useMDXComponent(code);

  return (
    <div className="prose-custom">
      <MDXContent components={{ Video, Callout, ImageZoom, VideoPlayer }} />
    </div>
  );
};
