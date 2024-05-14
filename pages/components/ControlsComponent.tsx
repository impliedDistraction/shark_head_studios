import React from 'react';

interface ControlsProps {
    onPrev: () => void;
    onNext: () => void;
    onTogglePlay: () => void;
    isPlaying: boolean;
}

const ControlsComponent: React.FC<ControlsProps> = ({ onPrev, onNext, onTogglePlay, isPlaying }) => (
    <div className="controls">
        <button onClick={onPrev} aria-label="Previous slide">Previous</button>
        <button onClick={onTogglePlay} aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}>
            {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={onNext} aria-label="Next slide">Next</button>
    </div>
);

export default ControlsComponent;