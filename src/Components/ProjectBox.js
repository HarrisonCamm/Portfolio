import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    GamersGroveDesc : "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    GamersGroveGithub : "https://github.com/HarrisonCamm/Gardeners-Grove",
    GamersGroveWebsite : "https://devanshsahni.github.io/tindog/",

    RogFreeDesc : "I implemented a PID controller for a HeliRig in C in this project using a TIVA TM4C microcontroller. The system was designed to control the helicopter's altitude and yaw through real-time, interrupt-driven processes, ensuring stable and responsive flight. We were one of the few pairs who successfully calibrated our HeliRig to a level suitable for testing on an actual rig, rather than the simulator. This achievement involved fine-tuning PID gains and managing real-time sensor input, ultimately demonstrating robust control and precision.",
    RogFreeGithub : "https://github.com/DevanshSahni/Rog-Free",
    RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

    NewsletterDesc: "This is a description for the Newsletter project.",
    NewsletterGithub: "https://github.com/YourUsername/NewsletterProject",
    NewsletterWebsite: "https://csse-seng302-team600.canterbury.ac.nz/test/home",
    
    WigglesDesc:"An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
    WigglesGithub:"https://github.com/DevanshSahni/Wiggles",
    WigglesWebsite:"https://wiggles.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank' rel='noreferrer'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank' rel='noreferrer'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox