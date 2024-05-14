import React from 'react';

interface IndicatorsProps {
    count: number;
    currentIndex: number;
}

const IndicatorsComponent: React.FC<IndicatorsProps> = ({ count, currentIndex }) => (
    <div className="indicators">
        {Array.from({ length: count }).map((_, index) => (
            <span key={index} className={index === currentIndex ? 'active' : ''} aria-label={`Slide ${index + 1}`}></span>
        ))}
    </div>
);

export default IndicatorsComponent;