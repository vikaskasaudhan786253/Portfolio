import "./Contact.css";
import { useState } from "react";
function Contact() {

    const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
        "access_key",
        "1043f676-e43c-4098-8c35-aef753d32766"
    );

    try {
        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData,
            }
        );

        const result = await response.json();

        if (response.ok && result.success) {
            alert("Message sent successfully! Thank you for reaching out.");
            form.reset();
        } else {
            alert("Failed to send your message. Please try again.");
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
};

    return (
        <section id="contact" className="contact">

            {/* ================= HEADER ================= */}

            <div className="contact-heading">

                <span className="contact-badge">
                    Get In Touch
                </span>

                <h2>
                    Contact Me
                </h2>

                <p>
                    Whether it's a project, internship, or just a chat about ML —
                    I'm always open.
                </p>

            </div>


            {/* ================= MAIN CONTENT ================= */}

            <div className="contact-content">

                {/* ================= FORM ================= */}

                <div className="contact-form-container">

                    <form className="contact-form" onSubmit={handleSubmit}>

                        <div className="form-row">

                            <div className="form-group">
                                <label>Name</label>

                                <input
                                    type="text"
    name="name"
    placeholder="Your name"
    required
                                />
                            </div>


                            <div className="form-group">
                                <label>Email</label>

                                <input
                                    type="email"
    name="email"
    placeholder="you@example.com"
    required
                                />
                            </div>

                        </div>


                        <div className="form-group">

                            <label>Subject</label>

                            <input
                                type="text"
    name="subject"
    placeholder="Internship Opportunity / ML Project Collab"
    required
                            />

                        </div>


                        <div className="form-group">

                            <label>Message</label>

                            <textarea
                                 name="message"
    placeholder="Tell me about the opportunity or project..."
    required
                            ></textarea>

                        </div>


                        <button
    type="submit"
    className="send-message"
    disabled={isSubmitting}
>
    {isSubmitting
        ? "Sending..."
        : "➤ Send Message"}
</button>{status === "success" && (
    <p className="form-status success">
        Message sent successfully! Thank you for reaching out.
    </p>
)}

{status === "error" && (
    <p className="form-status error">
        Failed to send your message. Please try again.
    </p>
)}

                    </form>

                </div>


                {/* ================= CONTACT INFO ================= */}

                <div className="contact-info">

                    <h3>
                        Let's Build Something Together
                    </h3>

                    <p className="contact-description">
                        I'm actively looking for ML internships, research
                        opportunities, and exciting project collaborations.
                        My C++ + Python combination makes me a strong fit
                        for both ML and systems-level projects.
                    </p>


                    {/* Email */}

                    <div className="contact-item">

                        <div className="contact-icon">
                            ✉
                        </div>

                        <div>
                            <span>Email</span>
                            <a href="mailto:vikaskasaudhan542@gmail.com" aria-label="Email" target="_blank">
    ✉
vikaskasaudhan542@gmail.com</a>
                        </div>

                    </div>


                    {/* Phone */}

                    <div className="contact-item">

                        <div className="contact-icon">
                            ☎
                        </div>

                        <div>
                            <span>Phone</span>
                            <a href="tel:+918127087231" target="_blank">
                                +91 8127087231
                            </a>
                        </div>

                    </div>


                    {/* Location */}

                    <div className="contact-item">

                        <div className="contact-icon">
                            ◉
                        </div>

                        <div>
                            <span>Location</span>
                            <p>
                                India
                            </p>
                        </div>

                    </div>


                    {/* LinkedIn */}

                    <div className="contact-item">

                        <div className="contact-icon">
                            in
                        </div>

                        <div>
                            <span>LinkedIn</span>

                            <a
                                href="https://www.linkedin.com/in/vikas-kasaudhan-55b706326/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                linkedin.com/in/vikas-kasaudhan
                            </a>
                        </div>

                    </div>


                    {/* GitHub */}

                    <div className="contact-item">

                        <div className="contact-icon">
                            ◇
                        </div>

                        <div>
                            <span>GitHub</span>

                            <a
                                href="https://github.com/vikaskasaudhan786253"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                ◇
                            github.com/vikaskasaudhan</a>
                        </div>

                    </div>


                    {/* Social Links */}

                    <div className="social-links">

                        <a href="https://github.com/vikaskasaudhan786253" aria-label="GitHub" target="_blank">
                            ◇
                        </a>

                        <a href="https://www.linkedin.com/in/vikas-kasaudhan-55b706326/" aria-label="LinkedIn" target="_blank">
                            in
                        </a>

                        <a href="vikaskasaudhan542@gmail.com" aria-label="Email" target="_blank">
                            ✉
                        </a>

                        <a href="https://leetcode.com/u/Vikaskasaudhan/" aria-label="Code" target="_blank">
                            &lt;/&gt;
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;
