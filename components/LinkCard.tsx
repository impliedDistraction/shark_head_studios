import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import './LinkCard.css';

const DEFAULT_IMAGE = { src: '/path/to/default/image.jpg', alt: 'Default Image', maxWidth: 500, maxHeight: 300 };

interface ImageProps {
  src: string;
  alt: string;
  maxWidth?: number;
  maxHeight?: number;
}

interface LinkCardProps {
  title: string;
  description: string;
  additionalInfo?: string;
  images?: ImageProps[];
  redirectTo: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, description, additionalInfo, images, redirectTo }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const router = useRouter();

  const imagesToDisplay = useMemo(() => {
    return images?.length ? images : [DEFAULT_IMAGE];
  }, [images]);

  const handleToggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="link-card" onClick={() => router.push(redirectTo)}>
      <div className="image-container">
        {imagesToDisplay.map((image, index) => (
          <div 
            key={`${image.src}-${index}`} 
            className="image-wrapper" 
            style={{ maxWidth: image.maxWidth, maxHeight: image.maxHeight }}
          >
            <Image 
              src={image.src} 
              alt={image.alt} 
              layout="responsive" 
              width={image.maxWidth || 500} 
              height={image.maxHeight || 300} 
            />
          </div>
        ))}
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        {additionalInfo && (
          <button className="toggle-button" onClick={handleToggleDropdown}>
            {isDropdownVisible ? 'Show Less' : 'Show More'}
          </button>
        )}
        {additionalInfo && (
          <div className={`dropdown ${isDropdownVisible ? 'visible' : ''}`}>
            <p>{additionalInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkCard;
