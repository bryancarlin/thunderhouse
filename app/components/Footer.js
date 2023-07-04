import React from "react";
import Blog from "./Blog";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            {/* Projects Area */}
            <section className="projects__area">
                <div className="container">
                    <div className="section__heading">
                        <h2>Initiatives</h2>
                    </div>

                    <div className="projects">
                        <Blog
                            title="CodeBlue"
                            imgUrl="/images/cb.png"
                            imgAlt="CodeBlue"
                        />

                        <Blog
                            title="OrgCom"
                            imgUrl="/images/oc.png"
                            imgAlt="OrgCom"
                        />

                        <Blog
                            title="PeerSourcing"
                            imgUrl="/images/ps.png"
                            imgAlt="PeerSourcing"
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

                            <Link className="conlink2" href="/">Home</Link>  &nbsp;&nbsp;&nbsp;
                            <Link className="conlink2" href="/think">How We Think</Link> &nbsp;&nbsp;&nbsp;
                            <Link className="conlink2" href="/work">How We Work</Link> &nbsp;&nbsp;&nbsp;
                            <Link className="conlink2" href="/who">Who We Are</Link> &nbsp;&nbsp;&nbsp;
                            <Link className="conlink2" href="/insights">Insights</Link> &nbsp;&nbsp;&nbsp;
                            <Link className="conlink2" href="/legacy">Legacy</Link> &nbsp;&nbsp;&nbsp;
                            <Link className="conlink2" href="/competencies">Competencies</Link> &nbsp;&nbsp;&nbsp;
                            <Link className="conlink2" href="/contact">Contact</Link>

                           
                        </p>
                        <p class="topPad">
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
