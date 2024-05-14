import React from "react";

const ProjectPlatforms = React.memo(({ platforms }: { platforms: string[] }) => {
  if (!platforms || platforms.length === 0) {
    return <p>No platforms available</p>;
  }

  return (
    <ul>
      {platforms.map((platform, index) => (
        <li key={index}>{platform}</li> // Note on keys: It's better to use unique ids instead of index when available.
      ))}
    </ul>
  );
});

// Set displayName
ProjectPlatforms.displayName = 'ProjectPlatforms';

export default ProjectPlatforms;
