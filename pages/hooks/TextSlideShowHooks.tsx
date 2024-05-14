import React, { useState, useEffect } from 'react';

export function useSlideShow(paragraphsLength: number, interval: number) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isPlaying) {
            timer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % paragraphsLength);
            }, interval);
        }
        return () => clearInterval(timer);
    }, [paragraphsLength, interval, isPlaying]);

    return { currentIndex, isPlaying, setCurrentIndex, setIsPlaying };
}

export function useDocumentMeta(metaTitle?: string, metaDescription?: string, metaKeywords?: string) {
    useEffect(() => {
        if (metaTitle) {
            document.title = metaTitle;
        }
        updateMetaTag('description', metaDescription);
        updateMetaTag('keywords', metaKeywords);
    }, [metaTitle, metaDescription, metaKeywords]);
}


function updateMetaTag(name: string, content?: string) {
    if (content) {
        let metaTag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
        if (!metaTag) {
            metaTag = document.createElement('meta');
            metaTag.name = name;
            document.head.appendChild(metaTag);
        }
        metaTag.setAttribute('content', content);
    }
}