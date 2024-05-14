import React from 'react';
// Assuming you're using a custom Image component or something like Next.js Image
import Image from 'next/image'; // or your custom Image path

interface ImageProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
}

const ImageComponent: React.FC<ImageProps> = ({ src, alt, width = 800, height = 600 }) => (
    <Image src={src} alt={alt || 'Slideshow Image'} width={width} height={height} layout="responsive" />
);

export default ImageComponent;