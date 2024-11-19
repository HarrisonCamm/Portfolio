import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Copyright &copy; 2024 HC</h4>
      <div className='footerLinks'>
        <a href="https://github.com/HarrisonCamm" target='_blank' rel='noopener noreferrer'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/harrison-camm-5aa95217b/" target='_blank' rel='noopener noreferrer'><FaLinkedin/></a>
        <a href='mailTo:harrisoncamm@gmail.com' target='_blank' rel='noopener noreferrer'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer