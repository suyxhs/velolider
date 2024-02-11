import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ src }: any) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPad|iPhone|iPod|Android/i.test(navigator.userAgent || navigator.vendor));
  }, []);

  return (
    <ReactPlayer
      url={src}
      width="100%"
      height={isMobile ? 'auto' : 'auto'}
      playing={false}
      controls={true}
    />
  );
};

export default VideoPlayer;
