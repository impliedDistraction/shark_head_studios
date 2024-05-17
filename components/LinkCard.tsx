import React, { useMemo } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { useRouter } from 'next/router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LinkCard.css';

const DEFAULT_IMAGE = { src: '/path/to/default/image.jpg', alt: 'Default Image', maxWidth: 500, maxHeight: 300 };

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

interface ImageProps {
  src: string;
  alt: string;
  maxWidth?: number;
  maxHeight?: number;
}

interface LinkCardProps {
  title: string;
  description: string;
  images?: ImageProps[];
  redirectTo: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, description, images, redirectTo }) => {
  const router = useRouter();

  const imagesToDisplay = useMemo(() => {
    return images?.length ? images : [DEFAULT_IMAGE];
  }, [images]);

  return (
    <div className="link-card" onClick={() => router.push(redirectTo)}>
      <div className="image-container">
        <Slider {...sliderSettings}>
          {imagesToDisplay.map((image, index) => (
            <div key={`${image.src}-${index}`} style={{ maxWidth: image.maxWidth, maxHeight: image.maxHeight }}>
              <Image src={image.src} alt={image.alt} layout="responsive" width={image.maxWidth} height={image.maxHeight} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LinkCard;