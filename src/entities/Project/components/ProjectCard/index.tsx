import './style.scss';

import React from 'react';

interface Props {
  title: string;
  years: string;
  description: string;
}

const ProjectCard = ({ title, years, description }: Props) => {
  return (
    <div className="card-container">
      <p className="card-title">{title}</p>
      <p className="card-years">{years}</p>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
