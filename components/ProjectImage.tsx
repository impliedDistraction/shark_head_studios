import React from 'react';
import Image from 'next/image';

interface ProjectImageProps {
  imageUrl: string;
  title: string;
  width?: number; // Allow optional width and height to make the component more flexible
  height?: number;
}

const ProjectImage: React.FC<ProjectImageProps> = React.memo(
  ({ imageUrl, title, width = 600, height = 400 }) => { // Provide default width and height
    return (
      <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: `${(height / width) * 100}%` }}>
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover" 
        />
      </div>
    );
  }
);

ProjectImage.displayName = 'ProjectImage';

export default ProjectImage;