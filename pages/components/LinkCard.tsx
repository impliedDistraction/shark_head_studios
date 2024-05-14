import React, { useMemo } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { useRouter } from 'next/router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LinkCard.css';

const DEFAULT_IMAGE = { src: '/path/to/default/image.jpg', alt: 'Default Image' };

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
}

interface LinkCardProps {
  title: string;
  description: string;
  images?: ImageProps[];
  redirectTo: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, description, images, redirectTo }) => {
  const router = useRouter();

  // Calculate images to display only when images prop changes
  const imagesToDisplay = useMemo(() => {
    return images?.length ? images : [DEFAULT_IMAGE];
  }, [images]);

  return (
    <div className="link-card" onClick={() => router.push(redirectTo)}>
      <div className="image-container">
        <Slider {...sliderSettings}>
          {imagesToDisplay.map((image, index) => (
            <div key={`${image.src}-${index}`}>
              <Image src={image.src} alt={image.alt} width={500} height={300} layout='responsive' />
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