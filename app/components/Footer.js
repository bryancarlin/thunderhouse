import React from "react";
import Blog from "./Blog";

const Footer = () => {
    return (
        <>
            {/* Projects Area */}
            <section className="projects__area">
                <div className="container">
                    <div className="section__heading">
                        <h2>Industries & Projects</h2>
                    </div>

                    <div className="projects">
                        <Blog
                            title="MarCom Spectrum"
                            imgUrl="/images/project-1.jpg"
                            imgAlt="MarCom Spectrum"
                        />

                        <Blog
                            title="NextGen MarCom"
                            imgUrl="/images/project-2.jpg"
                            imgAlt="NextGen MarCom"
                        />

                        <Blog
                            title="Marketing Communications Technologies"
                            imgUrl="/images/project-3.jpg"
                            imgAlt="Marketing Communications"
                        />
                    </div>
                </div>
            </section>
            {/* Projects Area */}

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <p>
                            © {new Date().getFullYear()} ThunderHouse. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
            {/* Footer */}
        </>
    );
};

export default Footer;
