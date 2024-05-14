import React from "react";

const ProjectDescription = React.memo(({ title, description, link }: { title: string; description: string; link?: string }) => (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Learn more about ${title}`}>
          Learn More
        </a>
      )}
    </div>
  ));
  
  // Set displayName
  ProjectDescription.displayName = 'ProjectDescription';
  
  export default ProjectDescription;