import React from 'react';
import './Resume.scss';
import resume from '../../assets/harvey-zoe.pdf'

const Resume = () => {

  return(
    <div className="Resume">
      <h1>Resume</h1>
      <iframe src={resume}></iframe>
    </div>
  )
}

export default Resume;