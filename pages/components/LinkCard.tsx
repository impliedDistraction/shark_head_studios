import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { useRouter } from 'next/router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LinkCard.css';

interface LinkCardProps {
  title: string;
  description: string;
  images: string[]; // Adjusted for an array of images
  redirectTo: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, description, images, redirectTo }) => {
  const router = useRouter();

  // Settings for the react-slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="link-card" onClick={() => router.push(redirectTo)}>
      <div className="image-container">
        <Slider {...settings}>
          {images.map((imagePath, index) => (
            <div key={index}>
              <Image src={imagePath} alt={`Slide ${index}`} width={500} height={300} layout='responsive' />
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