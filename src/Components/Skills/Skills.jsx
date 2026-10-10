import { useState } from "react";
import "./Skills.css";

function Skills() {

    const [activeCategory, setActiveCategory] = useState("Languages");

    const skills = {
        Languages: [
            { name: "C++", level: 90 },
            { name: "Python", level: 88 },
            { name: "JavaScript", level: 72 },
            { name: "SQL", level: 75 },
        ],

        "Machine Learning": [
            { name: "Scikit-learn", level: 85 },
            { name: "XGBoost", level: 80 },
            { name: "Random Forest", level: 85 },
            { name: "Feature Engineering", level: 82 },
        ],

        "Deep Learning": [
            { name: "PyTorch", level: 75 },
            { name: "Neural Networks", level: 82 },
            { name: "CNN", level: 75 },
            { name: "Transformers", level: 70 },
        ],

        "Data Science": [
            { name: "Pandas", level: 90 },
            { name: "NumPy", level: 88 },
            { name: "Matplotlib", level: 80 },
            { name: "Data Analysis", level: 85 },
        ],

        "Web Dev": [
            { name: "React", level: 78 },
            { name: "HTML & CSS", level: 88 },
            { name: "Flask", level: 80 },
            { name: "REST APIs", level: 75 },
        ],

        Tools: [
            { name: "Git & GitHub", level: 88 },
            { name: "Docker", level: 65 },
            { name: "Jupyter", level: 90 },
            { name: "VS Code", level: 92 },
        ],
    };

    const categories = [
        "Languages",
        "Machine Learning",
        "Deep Learning",
        "Data Science",
        "Web Dev",
        "Tools",
    ];

    return (
        <section id="skills" className="skills">

            {/* ================= HEADING ================= */}

            <div className="skills-heading">

                <span className="skills-badge">
                    Expertise
                </span>

                <h2>
                    Technical Skills
                </h2>

                <p>
                    A comprehensive breakdown of my technical toolkit across ML,
                    data science, and software engineering.
                </p>

            </div>


            {/* ================= CATEGORY TABS ================= */}

            <div className="skills-tabs">

                {categories.map((category) => (

                    <button
                        key={category}
                        className={
                            activeCategory === category
                                ? "skill-tab active"
                                : "skill-tab"
                        }
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>

                ))}

            </div>


            {/* ================= SKILLS ================= */}

            <div className="skills-list">

                {skills[activeCategory].map((skill) => (

                    <div
                        className="skill-item"
                        key={skill.name}
                    >

                        <div className="skill-info">

                            <span className="skill-name">
                                {skill.name}
                            </span>

                            <span className="skill-percentage">
                                {skill.level}%
                            </span>

                        </div>


                        <div className="skill-bar">

                            <div
                                className="skill-progress"
                                style={{
                                    width: `${skill.level}%`
                                }}
                            ></div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Skills;
