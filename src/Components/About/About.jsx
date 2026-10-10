import "./About.css";

function About() {
    return (
        <section id="about" className="about">

            {/* Heading */}
            <div className="about-heading">
                <span className="about-badge">Who I Am</span>

                <h2>About Me</h2>

                <p>
                    Passionate AI/ML engineering student on a mission to solve
                    real-world problems with data and algorithms.
                </p>
            </div>


            {/* Main Content */}
            <div className="about-content">

                {/* ================= EDUCATION ================= */}
                <div className="education-section">

                    <h3 className="about-subtitle">
                        <span className="subtitle-icon">▣</span>
                        Education
                    </h3>

                    <div className="education-timeline">

                        {/* Education 1 */}
                        <div className="timeline-item">

                            <div className="timeline-dot"></div>

                            <div className="education-card">

                                <div className="education-top">
                                    <span className="education-year">
                                        2024 – 2028
                                    </span>

                                    <span className="cgpa">
                                        CGPA: 8.3
                                    </span>
                                </div>

                                <h4>
                                    B.Tech Computer Science Engineering
                                </h4>

                                <p className="institution">
                                    National Institute of Technology (Prestigious)
                                </p>

                                <p className="education-details">
                                    Specialization: Machine Learning & AI
                                    · Minor: Data Science
                                </p>

                            </div>

                        </div>


                        {/* Education 2 */}
                        <div className="timeline-item">

                            <div className="timeline-dot secondary"></div>

                            <div className="education-card">

                                <div className="education-top">
                                    <span className="education-year muted">
                                        2020 – 2022
                                    </span>
                                </div>

                                <h4>
                                    Class XII – Science (PCM + CS)
                                </h4>

                                <p className="institution">
                                    St. Xavier's Senior Secondary School
                                </p>

                                <p className="education-details">
                                    Score: 97.2%
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= CAREER OBJECTIVE ================= */}
                <div className="career-section">

                    <h3 className="about-subtitle">
                        Career Objective
                    </h3>

                    <p className="career-description">
                        To leverage my expertise in Machine Learning, Data Science,
                        and competitive programming to build scalable AI solutions
                        that create real-world impact. I aim to grow as a full-stack
                        ML engineer — from data wrangling to model deployment —
                        while continuously exploring the cutting edge of deep
                        learning and generative AI.
                    </p>


                    {/* Skills */}
                    <div className="about-skills">

                        <div className="skill-box blue">
                            <span>♧</span>
                            <p>Machine<br />Learning</p>
                        </div>

                        <div className="skill-box green">
                            <span>▥</span>
                            <p>Data Science</p>
                        </div>

                        <div className="skill-box purple">
                            <span>&lt;/&gt;</span>
                            <p>DSA in C++</p>
                        </div>

                        <div className="skill-box orange">
                            <span>▣</span>
                            <p>Deep Learning</p>
                        </div>

                        <div className="skill-box cyan">
                            <span>▱</span>
                            <p>Backend Dev</p>
                        </div>

                        <div className="skill-box pink">
                            <span>ϟ</span>
                            <p>Gen AI</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;
