import React from "react";
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () =>{
    return(
        <div id="home" className="hero">
            <img src={profile_img} alt=""/>
            <h1><span>I'm Vikas Kasaudhan,</span> Machine Learning Engineer</h1>
            <p>I am a BTech Computer Science and Engineering Student currently enrolled in National Institute of Technology Durgapur</p>
            <div className="hero-action">
                <div className="hero-connect"><a className='anchor-link' offset={50} href='#contact'>Connect With Me</a></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero
