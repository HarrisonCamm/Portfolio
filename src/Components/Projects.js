import React from 'react';
import ProjectBox from './ProjectBox';
import GamersGrove from '../images/GamersGrove.png';
import HeliRigImage from '../images/HeliRig.png';
import StockSiteImage from '../images/Excess Alpha Image.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={StockSiteImage} projectName="Stock Website" />
        {/* <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" /> */}
        <ProjectBox projectPhoto={HeliRigImage} projectName="HeliRig Project" />
        <ProjectBox projectPhoto={GamersGrove} projectName="Gamer's Grove" />
      </div>

    </div>
  )
}

export default Projects