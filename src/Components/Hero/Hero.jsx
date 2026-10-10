import React from "react";
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () =>{
    return(
        <div id="home" className="hero">

    {/* LEFT SIDE */}
    <div className="hero-left">

        <div className="available">
            Available for Internship & Projects
        </div>

        <div className="name-card">

            <div className="card">
                VK
            </div>

            <div className="name">
                <p>Hello, I'm</p>
                <span>Vikas Kasaudhan</span>
            </div>

        </div>

        <h1>
            Building <span>Intelligent Systems</span>
        </h1>

        <p className="hero-description">
            B.Tech CSE student specializing in{" "}
            <span>Machine Learning</span>,{" "}
            <span>Data Science</span>, and{" "}
            <span>DSA in C++</span>. Currently exploring the
            frontiers of Deep Learning and Generative AI.
        </p>

        <div className="hero-action">

            <div className="hero-connect">
                <a href="#contact" className="anchor-link">
                    Connect With Me
                </a>
            </div>

            <div className="hero-resume">
                <a
                    href="/Vikas_Kasaudhan_Resume.pdf"
                    download="Vikas_Kasaudhan_Resume.pdf"
                    className="hero-resume"
                >
                    My Resume
                </a>
            </div>

        </div>

    </div>


    {/* RIGHT SIDE */}
    <div className="hero-right">

        <img src={profile_img} alt="Vikas Kasaudhan" />

    </div>

</div>
    )
}

export default Hero
