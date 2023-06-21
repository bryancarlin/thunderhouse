"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Competencies = () => {
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
                        <h1>Core Competencies</h1>

                        <div className="single__content-subhead">
                            <h3>
                                What does it take to bring innovation fruition?
                            </h3>
                            <p>
                                Communications is the central core competence of
                                ThunderHouse. An innovation cannot move forward
                                unless the innovator effectively communicates
                                its value to the many constituent audiences in
                                the pathway to fruition. Narrations drive the
                                value of the innovation. As with Franklin's
                                ThunderHouse, the more impactful the
                                communication, the easier to overcome the
                                barriers to success. No skill set is more
                                critical. The recognition of the primacy of
                                Communications differentiates ThunderHouse from
                                competing resources.
                            </p>
                            <p>
                                ThunderHouse builds on Communications with four
                                enabling core competencies to skillfully move
                                innovations from concept to reality to fruition.
                            </p>
                        </div>

                        <div className="features__cards">
                            {/* Single Card */}
                            <div className="features__card single__content-subhead glossy__bg">
                                <h3>Teamwork</h3>

                                <p>
                                    Individuals or partnerships often create the
                                    innovation; however, in today's business
                                    environment, innovations rarely come to
                                    fruition without network connections and a
                                    team effort. Often the more significant the
                                    innovation, the more complex and demanding
                                    is the need for both teamwork and
                                    networking.
                                </p>
                            </div>
                            {/* Single Card */}
                            {/* Single Card */}
                            <div className="features__card single__content-subhead glossy__bg">
                                <h3>Market Expertise</h3>

                                <p>
                                    Is the innovator's new product or service
                                    truly an innovation? Market Expertise is
                                    needed to answer this basic question.
                                    ThunderHouse seeks out Subject Matter
                                    Experts who know the product and connect
                                    with the industry, the customer and the
                                    marketplace. Their knowledge, combined with
                                    that of the innovator, guides all
                                    ThunderHouse activities.
                                </p>
                            </div>
                            {/* Single Card */}
                            {/* Single Card */}
                            <div className="features__card single__content-subhead glossy__bg">
                                <h3>Design</h3>

                                <p>
                                    Design literally says: "look at me... I'm
                                    new...I'm different...I'm better!"
                                    Functional design often provides the primary
                                    point of difference. Aesthetic design, the
                                    visible face of innovation, engages the
                                    senses, influences behavior and secures the
                                    support of the constituencies that can make
                                    innovations successful.
                                </p>
                            </div>
                            {/* Single Card */}
                            {/* Single Card */}
                            <div className="features__card single__content-subhead glossy__bg">
                                <h3>Technology</h3>

                                <p>
                                    Most innovations today, both goods and
                                    services, are based on new technologies.
                                    ThunderHouse appreciates the importance of
                                    technology to innovations and to the work
                                    processes necessary to bring them to
                                    fruition. And, when technology questions
                                    arise, ThunderHouse knows to ask the right
                                    questions of the right people.
                                </p>
                            </div>
                            {/* Single Card */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Competencies;
