import "./Projects.css";

import digital_calculator from "../../assets/digital_calculator.avif";
import heart_img from "../../assets/heart-disease.png";
import student_img from "../../assets/student-performance.png";
import house_img from "../../assets/house-price.png";
import spam_img from "../../assets/spam-detection.png";
import churn_img from "../../assets/customer-churn.png";

function Projects() {

    const projects = [
        {
            title: "Digital Calculator",
            image: digital_calculator,
            description:
                "The project is designed to behave like a modern Casio-style scientific calculator. using react + vite and python + flask",
            technologies: ["React","Vite", "Flask", "Python"],
            featured: true,
            github: "https://github.com/vikaskasaudhan786253/Calculator",
            live: "https://calculator-nine-beta-16.vercel.app/",
        },

        {
            title: "Heart Disease Prediction",
            image: heart_img,
            description:
                "ML pipeline using Random Forest & XGBoost achieving high accuracy across patient clinical data with explainable predictions.",
            technologies: ["Python", "XGBoost", "Scikit-Learn", "SHAP"],
            featured: true,
            github: "#",
            live: "#",
        },

        {
            title: "Student Performance Predictor",
            image: student_img,
            description:
                "Regression model predicting final grades from demographic and behavioral features with an interactive data dashboard.",
            technologies: ["Python", "Pandas", "Seaborn", "Scikit-Learn"],
            featured: true,
            github: "#",
            live: "#",
        },

        {
            title: "House Price Estimation",
            image: house_img,
            description:
                "End-to-end ML pipeline with feature engineering, hyperparameter tuning, and Flask API deployment.",
            technologies: ["Python", "Pandas", "Flask", "Scikit-Learn"],
            featured: false,
            github: "#",
            live: "#",
        },

        {
            title: "Spam Detection NLP",
            image: spam_img,
            description:
                "TF-IDF + Naive Bayes text classifier achieving strong spam detection accuracy with a real-time prediction interface.",
            technologies: ["Python", "NLP", "TF-IDF", "Naive Bayes"],
            featured: false,
            github: "#",
            live: "#",
        },

        {
            title: "Customer Churn Prediction",
            image: churn_img,
            description:
                "LightGBM binary classification model for telecom churn prediction with SHAP explanations and business-oriented insights.",
            technologies: ["Python", "LightGBM", "SHAP", "Pandas"],
            featured: false,
            github: "#",
            live: "#",
        },
    ];

    return (
        <section id="projects" className="projects">

            {/* ================= HEADER ================= */}

            <div className="projects-heading">

                <span className="projects-badge">
                    Portfolio
                </span>

                <h2>
                    Featured Projects
                </h2>

                <p>
                    Real-world ML and full-stack projects built to solve
                    meaningful problems.
                </p>

            </div>


            {/* ================= PROJECT GRID ================= */}

            <div className="projects-grid">

                {projects.map((project, index) => (

                    <div
                        className="project-card"
                        key={index}
                    >

                        {/* Image */}

                        <div className="project-image-container">

                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />

                            {project.featured && (
                                <span className="featured-badge">
                                    ⭐ Featured
                                </span>
                            )}

                        </div>


                        {/* Content */}

                        <div className="project-content">

                            <h3>
                                {project.title}
                            </h3>

                            <p className="project-description">
                                {project.description}
                            </p>


                            {/* Technologies */}

                            <div className="project-tech">

                                {project.technologies.map((tech) => (

                                    <span
                                        key={tech}
                                        className="tech-tag"
                                    >
                                        {tech}
                                    </span>

                                ))}

                            </div>


                            {/* Buttons */}

                            <div className="project-buttons">

                                <a
                                    href={project.github}
                                    className="project-code"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>⌘</span>
                                    Code
                                </a>

                                <a
                                    href={project.live}
                                    className="project-live"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>↗</span>
                                    Live
                                </a>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Projects;
