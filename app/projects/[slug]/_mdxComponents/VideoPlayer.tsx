import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  width?: string;
  height?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, width = '100%', height = 'auto' }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    setIsMobile(/iPad|iPhone|iPod|Android/i.test(userAgent));
  }, []);

  return (
    <div>
      <ReactPlayer url={src} width={width} height={isMobile ? 'auto' : height} controls />
    </div>
  );
};

export default VideoPlayer;
