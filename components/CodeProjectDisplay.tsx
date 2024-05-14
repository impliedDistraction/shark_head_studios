import React from 'react';
import { Helmet } from 'react-helmet';
import ProjectImage from './ProjectImage';
import ProjectDescription from './ProjectDescription';
import ProjectPlatforms from './ProjectPlatforms';

// Use TypeScript's type alias for better readability.
type CodeProjectProps = {
  title: string;
  imageUrl: string;
  description: string;
  releaseDate: string;
  platforms: string[];
  link?: string;
};

const CodeProjectDisplay: React.FC<CodeProjectProps> = ({
  title,
  imageUrl,
  description,
  releaseDate,
  platforms = [],
  link,
}) => {
  // Format date using toLocaleDateString for better internationalization.
  const formattedDate = new Date(releaseDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <article className="code-project">
      <Helmet>
        <title>{`${title} - Project Showcase`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ProjectImage imageUrl={imageUrl} title={title} />
      <ProjectDescription title={title} description={description} link={link} />
      <p>Release Date: <time dateTime={releaseDate}>{formattedDate}</time></p>
      <ProjectPlatforms platforms={platforms} />
    </article>
  );
};

export default CodeProjectDisplay;