import React from 'react';
import './GlitchText.css';

/**
 * Custom style properties that extend React's CSSProperties
 * @type {Object} CustomStyleProps
 * @property {string} --skew-degrees - The skew degree for the glitch effect
 */
type CustomStyleProps = React.CSSProperties & {
    '--skew-degrees': string;
};

/* Changed @typedef to @type */
/**
 * Props for the GlitchText component
 * @type {Object} GlitchTextProps   
 * @property {string} text - The text to display with the glitch effect
 * @property {keyof JSX.IntrinsicElements} [tag] - The HTML tag to use, defaults to 'h1'
 * @property {string} [color] - The text color
 * @property {string} [backgroundColor] - The background color
 * @property {string} [glitchColor1] - The first glitch color
 * @property {string} [glitchColor2] - The second glitch color
 * @property {string} [animationDuration1] - The duration of the first glitch animation
 * @property {string} [animationDuration2] - The duration of the second glitch animation
 * @property {number} [skewDegrees] - The skew degree for the glitch effect
 */
interface GlitchTextProps {
    text: string;
    tag?: keyof JSX.IntrinsicElements;
    color?: string;
    backgroundColor?: string;
    glitchColor1?: string;
    glitchColor2?: string;
    animationDuration1?: string;
    animationDuration2?: string;
    skewDegrees?: number;
}

/**
 * GlitchText component to display text with a glitch effect
 * @param props - The props for the GlitchText component
 * @returns The rendered GlitchText component
 */
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
}: {
    text: string;
    tag?: keyof JSX.IntrinsicElements;
    color?: string;
    backgroundColor?: string;
    glitchColor1?: string;
    glitchColor2?: string;
    animationDuration1?: string;
    animationDuration2?: string;
    skewDegrees?: number;
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
