import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="footer-content">

                {/* ================= ABOUT ================= */}

                <div className="footer-about">

                    <h3 className="footer-logo">
                        &lt;Vikas /&gt;
                    </h3>

                    <p>
                        B.Tech CS student building intelligent systems at the
                        intersection of ML, data science, and software
                        engineering.
                    </p>

                </div>


                {/* ================= QUICK LINKS ================= */}

                <div className="footer-links">

                    <h4>Quick Links</h4>

                    <div className="footer-link-columns">

                        <div>
                            <a href="#about">About</a>
                            <a href="#projects">Projects</a>
                            <a href="#dsa">DSA</a>
                            <a href="#github">GitHub</a>
                        </div>

                        <div>
                            <a href="#skills">Skills</a>
                            <a href="#journey">Journey</a>
                            <a href="#experience">Experience</a>
                            <a href="#contact">Contact</a>
                        </div>

                    </div>

                </div>


                {/* ================= CONNECT ================= */}

                <div className="footer-connect">

                    <h4>Connect</h4>

                    <div className="connect-links">

                        <a
                            href="https://github.com/vikaskasaudhan786253"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/vikas-kasaudhan-55b706326/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://leetcode.com/u/Vikaskasaudhan/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LeetCode
                        </a>

                        <a
                            href="https://www.kaggle.com/vikaskasaudhan"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Kaggle
                        </a>

                        <a href="vikaskasaudhan542@gmail.com" target="_blank">
                            Email
                        </a>

                    </div>

                </div>

            </div>


            {/* ================= BOTTOM ================= */}

            <div className="footer-bottom">

                <p>
                    © {currentYear} Vikas Kasaudhan. Crafted with
                    <span className="heart"> ♥ </span>
                    and lots of Python.
                </p>


                <button
                    className="back-to-top"
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                >
                    ↑ &nbsp; Back to Top
                </button>

            </div>

        </footer>
    );
}

export default Footer;
