import React from 'react';
import { Helmet } from 'react-helmet';

// Define the props interface
interface SEOHelmetProps {
    title: string;
    description: string;
}

// Apply the interface to your component function
const SEOHelmet: React.FC<SEOHelmetProps> = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {/* SEO-related tags here */}
        </Helmet>
    );
};

export default SEOHelmet;