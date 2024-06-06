import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import  './LinkCard.css'; 

interface ImageProps {
  src: string;
  alt: string;
  maxWidth?: number;
  maxHeight?: number;
}

const DEFAULT_IMAGE: ImageProps = {
  src: '/path/to/default/image.jpg',
  alt: 'Default Image',
  maxWidth: 500,
  maxHeight: 300,
};

interface LinkCardProps {
  title: string;
  description: string;
  additionalInfo?: string;
  images?: ImageProps[];
  redirectTo: string;
}

interface ImageWrapperProps {
  image: ImageProps;
  index: number;
}

/**
 * ImageWrapper component to display individual images with provided styles.
 *
 * @param {ImageWrapperProps} props - The properties for the ImageWrapper component.
 * @returns {JSX.Element} The ImageWrapper component.
 */
const ImageWrapper: React.FC<ImageWrapperProps> = (props: ImageWrapperProps): JSX.Element => {
  const { image, index } = props;
  return (
    <div 
      key={`${image.src}-${index}`} 
      className={styles.imageWrapper} 
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
  );
};

/**
 * LinkCard component displays a card with an image, title, description,
 * and optional additional information. Clicking the card redirects to a specified URL.
 * 
 * @param {LinkCardProps} props - The properties for the LinkCard component.
 * @returns {JSX.Element} The LinkCard component.
 */
const LinkCard: React.FC<LinkCardProps> = ({ title, description, additionalInfo, images, redirectTo }: LinkCardProps): JSX.Element => {
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
    <div 
      className={styles.linkCard} 
      onClick={() => router.push(redirectTo)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && router.push(redirectTo)}
    >
      {/* Image container */}
      <div className={styles.imageContainer}>
        {imagesToDisplay.map((image, index) => (
          <ImageWrapper key={index} image={image} index={index} />
        ))}
      </div>
      
      {/* Content container */}
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
        
        {/* Toggle button for additional information */}
        {additionalInfo && (
          <button 
            className={styles.toggleButton} 
            onClick={handleToggleDropdown}
            aria-expanded={isDropdownVisible}
            aria-controls="additional-info-dropdown"
          >
            {isDropdownVisible ? 'Show Less' : 'Show More'}
          </button>
        )}
        
        {/* Additional information dropdown */}
        {additionalInfo && (
          <div 
            id="additional-info-dropdown"
            className={`${styles.dropdown} ${isDropdownVisible ? styles.visible : ''}`}
          >
            <p>{additionalInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkCard;
