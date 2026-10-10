import { useRef, useState } from "react";

import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

import "./Navbar.css";

function Navbar() {


    const [menu, setMenu] = useState("home");

    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    };

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    };

    const handleMenuClick = (section) => {
        setMenu(section);
        closeMenu();
    };


    return (

        <nav className="navbar">

            {/* =========================
                LOGO
            ========================= */}

            <div className="name-logo">

                <a
                    href="#home"
                    className="logo-name"
                    onClick={() => handleMenuClick("home")}
                >
                    &lt;Vikas /&gt;
                </a>

            </div>


            {/* =========================
                MOBILE OPEN BUTTON
            ========================= */}

            <img
                src={menu_open}
                onClick={openMenu}
                alt="Open menu"
                className="nav-mob-open"
            />


            {/* =========================
                NAVIGATION MENU
            ========================= */}

            <ul
                ref={menuRef}
                className="nav-menu"
            >

                {/* Mobile close button */}

                <img
                    src={menu_close}
                    onClick={closeMenu}
                    alt="Close menu"
                    className="nav-mob-close"
                />


                <li>
                    <a
                        href="#about"
                        className={menu === "about" ? "active" : ""}
                        onClick={() => handleMenuClick("about")}
                    >
                        About
                    </a>
                </li>


                <li>
                    <a
                        href="#skills"
                        className={menu === "skills" ? "active" : ""}
                        onClick={() => handleMenuClick("skills")}
                    >
                        Skills
                    </a>
                </li>


                <li>
                    <a
                        href="#projects"
                        className={menu === "projects" ? "active" : ""}
                        onClick={() => handleMenuClick("projects")}
                    >
                        Projects
                    </a>
                </li>


                <li>
                    <a
                        href="#journey"
                        className={menu === "journey" ? "active" : ""}
                        onClick={() => handleMenuClick("journey")}
                    >
                        Journey
                    </a>
                </li>


                <li>
                    <a
                        href="#dsa"
                        className={menu === "dsa" ? "active" : ""}
                        onClick={() => handleMenuClick("dsa")}
                    >
                        DSA
                    </a>
                </li>


                <li>
                    <a
                        href="#experience"
                        className={menu === "experience" ? "active" : ""}
                        onClick={() => handleMenuClick("experience")}
                    >
                        Experience
                    </a>
                </li>


                <li>
                    <a
                        href="#github"
                        className={menu === "github" ? "active" : ""}
                        onClick={() => handleMenuClick("github")}
                    >
                        GitHub
                    </a>
                </li>


                <li>
                    <a
                        href="#contact"
                        className={menu === "contact" ? "active" : ""}
                        onClick={() => handleMenuClick("contact")}
                    >
                        Contact
                    </a>
                </li>

            </ul>


            {/* =========================
                HIRE ME BUTTON
            ========================= */}

            <div className="nav-connect">

                <a href="#contact">
                    Hire Me
                </a>

            </div>

        </nav>
    );
}

export default Navbar;
