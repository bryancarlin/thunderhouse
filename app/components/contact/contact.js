"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    useEffect(() => {
        const innerContents = document.querySelectorAll(".other__fade-in");

        gsap.to(".other__hero-area", { opacity: 1, duration: 3 });

        innerContents.forEach((content) => {
            const innerElements = content.querySelectorAll(
                "h1, h2, h3, p, .single__content-image"
            );

            innerElements.forEach((element) => {
                gsap.from(element, {
                    opacity: 0,
                    filter: "blur(6px)",
                    stagger: 0.25,
                    ease: "power2.out",
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
            });
        });
    }, []);

    return (
        <section className="other__hero-area">
            <div className="other__hero-bg"></div>

            <div className="container">
                <div className="other__hero">
                    {/* Single Content */}
                    <div className="single__content other__fade-in">
                        <h1>Contact Us</h1>

                        <div className="single__content-subhead">
                            <p>
                                For additional information on ThunderHouse, our
                                projects or business opportunities, please
                                contact ThunderHouse founder, Art Tauder at{" "}
                                <a
                                    className="conlink"
                                    href="mailto:art@thunderhouse.org"
                                >
                                    art@thunderhouse.org
                                </a>{" "}
                                or by phone at 203-451-2699.
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
