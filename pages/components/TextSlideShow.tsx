import React from 'react';
import SlideComponent from './SlideComponent';
import ImageComponent from './ImageComponent';
import ControlsComponent from './ControlsComponent';
import IndicatorsComponent from './IndicatorsComponent';

import { useSlideShow, useDocumentMeta } from "../hooks/TextSlideShowHooks";

interface TextSlideshowProps {
    title?: string;
    imageSrc?: string;
    paragraphs: string[];
    interval?: number; // interval in milliseconds
    containerStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    imageStyle?: React.CSSProperties;
    paragraphStyle?: React.CSSProperties;
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
}

const renderControls = (
    goToPrev: () => void, 
    togglePlay: () => void, 
    goToNext: () => void, 
    isPlaying: boolean
) => (
    <div className="controls">
        <button onClick={goToPrev} aria-label="Previous slide">Previous</button>
        <button onClick={togglePlay} aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}>
            {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={goToNext} aria-label="Next slide">Next</button>
    </div>
);

const renderIndicators = (paragraphs: string[], currentIndex: number) => (
    <div className="indicators">
        {paragraphs.map((_, index) => (
            <span key={index} className={index === currentIndex ? 'active' : ''} aria-label={`Slide ${index + 1}`}></span>
        ))}
    </div>
);

const TextSlideshow: React.FC<TextSlideshowProps> = ({ title, imageSrc, paragraphs, interval = 3000, containerStyle, titleStyle, imageStyle, paragraphStyle, metaTitle, metaDescription, metaKeywords }) => {
    const { currentIndex, isPlaying, setCurrentIndex, setIsPlaying } = useSlideShow(paragraphs.length, interval);
    useDocumentMeta(metaTitle, metaDescription, metaKeywords);

    const goToNext = () => setCurrentIndex((currentIndex + 1) % paragraphs.length);
    const goToPrev = () => setCurrentIndex((currentIndex - 1 + paragraphs.length) % paragraphs.length);
    const togglePlay = () => setIsPlaying(!isPlaying);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowRight') {
            goToNext();
        } else if (event.key === 'ArrowLeft') {
            goToPrev();
        } else if (event.key === ' ') {
            togglePlay();
        }
    };

    return (
        <div className="text-slideshow" style={containerStyle} tabIndex={0} onKeyDown={handleKeyDown}>
            {title && <h1 style={titleStyle}>{title}</h1>}
            {imageSrc && <ImageComponent src={imageSrc} alt={title} />}
            <SlideComponent content={paragraphs[currentIndex]} style={paragraphStyle} />
            <ControlsComponent onPrev={goToPrev} onNext={goToNext} onTogglePlay={togglePlay} isPlaying={isPlaying} />
            <IndicatorsComponent count={paragraphs.length} currentIndex={currentIndex} />
        </div>
    );
};