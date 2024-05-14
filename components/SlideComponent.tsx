import React from 'react';

interface SlideProps {
    content: string;
    style?: React.CSSProperties;
}

const SlideComponent: React.FC<SlideProps> = ({ content, style }) => (
    <p style={style} className="slide">{content}</p>
);

export default SlideComponent;