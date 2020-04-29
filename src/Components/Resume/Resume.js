import React from 'react';
import './Resume.scss';
import resume from '../../assets/harvey-zoe.pdf';

const Resume = () => {

  return(
    <>
    <div className="Resume">
      <iframe className="resume-iframe" src={resume}></iframe>

  
    </div>

<object className="resume-mobile" data={resume} type="application/pdf">
<embed src={resume} type="application/pdf" />
</object>
</>

  );
};

export default Resume;