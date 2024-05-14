import React from 'react';
import './GlitchText.css';

type CustomStyleProps = React.CSSProperties & {
    '--skew-degrees': string;
};

interface GlitchTextProps {
    text: string;
    tag?: keyof JSX.IntrinsicElements; // Allows any valid HTML tag as a string
    color?: string;
    backgroundColor?: string;
    glitchColor1?: string;
    glitchColor2?: string;
    animationDuration1?: string;
    animationDuration2?: string;
    skewDegrees?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({
    text,
    tag = 'h1', // Default to an h1 tag
    color = '#FFF',
    backgroundColor = 'black',
    glitchColor1 = 'blue',
    glitchColor2 = 'red',
    animationDuration1 = '3s',
    animationDuration2 = '2s',
    skewDegrees = 5,
}) => {
    const baseStyle: React.CSSProperties = {
        color,
        backgroundColor,
    };

    const Tag = tag; // Dynamically determined tag

    return (
        <Tag
            className="glitch"
            style={baseStyle}
            data-text={text}
            role="heading"
            aria-level={typeof tag === 'string' && tag.startsWith('h') && parseInt(tag[1]) ? parseInt(tag[1]) : undefined}
            aria-label={text}
        >
            <span
                className="glitch-before"
                style={{
                    '--skew-degrees': `${skewDegrees}deg`,
                    color: glitchColor1,
                    animationDuration: animationDuration1,
                } as React.CSSProperties}
            ></span>
            {text}
            <span
                className="glitch-after"
                style={{
                    '--skew-degrees': `${-skewDegrees}deg`,
                    color: glitchColor2,
                    animationDuration: animationDuration2,
                } as React.CSSProperties}
            ></span>
        </Tag>
    );
};

export default React.memo(GlitchText);