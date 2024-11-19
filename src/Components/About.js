import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
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

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Npm' />
      </div>
    </>
  )
}

export default About