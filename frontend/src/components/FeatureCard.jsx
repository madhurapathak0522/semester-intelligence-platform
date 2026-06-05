import React from 'react';

const FeatureCard = ({ icon, title, description, tags }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon-wrapper">
        {icon}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      
      {tags && (
        <div className="feature-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="feature-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
