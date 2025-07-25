import React from 'react';

const Feature = ({ id, icon, image, title, description, buttonText }) => {
  const handleClick = () => {
    switch(id) {
      case 'resume-builder': alert('Resume Builder launching soon!'); break;
      case 'post-generator': alert('Social Post Generator launching soon!'); break;
      case 'email-generator': alert('Email Generator launching soon!'); break;
      case 'job-alerts': alert('Job Alerts launching soon!'); break;
      case 'training-courses': alert('Training Courses launching soon!'); break;
      default: alert('Feature launching soon!');
    }
  };

  return (
    <div className="feature" id={id}>
      <div className="feature-icon">
        <i className={icon}></i>
      </div>
      <div className="feature-image">
        <img src={image} alt={title} />
      </div>
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="feature-btn" onClick={handleClick}>
          {buttonText} <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Feature;