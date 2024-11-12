import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Harrison Camm</h4>
      <h4>Copyright &copy; 2023 DS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/HarrisonCamm" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/harrison-camm-5aa95217b/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:harrisoncamm@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer