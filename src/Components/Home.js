import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>HARRISON CAMM</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            Hi, I'm <b>Harrison</b>, a soon-to-be graduate with a <b>Bachelor's in Computer Science</b>. 
            My technical skills span backend development in <b>Spring Boot</b> and <b>Java</b>, as well as 
            front-end work with <b>React</b> (JavaScript/TypeScript). I’m experienced in the 
             <b>Agile Scrum</b> process and bring strong collaboration skills from group projects. 
            I have a solid foundation in <b>Git</b>, <b>C</b>, <b>Python</b>, and <b>Linux shell scripting</b>. 
            Additionally, I've worked on personal projects like a <b>stock website built in React</b> 
            that earned me a scholarship in UC’s summer startup program. <br /><br />
            Currently, I’m looking for an internship, ideally focused on <b>backend development</b> in 
            <b>cloud environments</b> or <b>embedded systems</b> work using <b>C</b>.
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home