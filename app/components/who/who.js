"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Who = () => {
    useEffect(() => {
        const innerContents = document.querySelectorAll(".other__fade-in");

        gsap.to(".other__hero-area", { opacity: 1, duration: 3 });

        innerContents.forEach((content) => {
            const innerElements = content.querySelectorAll(
                "h1, h2, h3, h4, h5, p, .single__content-image, .think__item-image"
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
            <div className="other__hero-bg other__white-bg"></div>

            <div className="container">
                <div className="other__hero">
                    {/* Single Content */}
                    <div className="single__content other__fade-in">
                        <h1>Who We Are</h1>

                        <div className="teams">
                            {/* Single Team */}
                            <div className="team">
                                <div className="team__heading">
                                    <h4>Arthur R. Tauder</h4>
                                    <h5>Founder Partner</h5>
                                </div>

                                <div className="team__details">
                                    <p>
                                        Art Tauder created the ThunderHouse
                                        concept as a result of his keen interest
                                        in innovation and 50+ years of
                                        experience in marketing communications.
                                        He championed innovative service
                                        offerings and evolving digital
                                        technologies as Senior Vice President of
                                        the Interpublic Group. Later in his
                                        career, as Vice Chairman of
                                        McCann-Erickson, he was the architect
                                        and operational lead in the
                                        transformation of the 92-year old
                                        advertising agency into the McCann
                                        WorldGroup, an integrated marketing
                                        communications company. Based on his
                                        expertise and interest in new
                                        technologies, Tauder was appointed a
                                        Visiting Scholar at The MIT Media Lab.
                                    </p>
                                </div>
                            </div>
                            {/* Single Team */}

                            {/* Single Team */}
                            <div className="team">
                                <div className="team__heading">
                                    <h4>Bryan Carlin</h4>
                                    <h5>
                                        Lead Partner - Digital Communications
                                    </h5>
                                </div>

                                <div className="team__details">
                                    <p>
                                        Bryan Carlin brings to ThunderHouse a
                                        melding of three skill sets: Business
                                        strategy, Digital technology know-how
                                        and Production. Bryan thrives in today’s
                                        “maker” culture and jumps right in to
                                        deliver results. He keeps current with
                                        the torrent of innovation in technology
                                        and digital marketing, bringing “what’s
                                        next” to meet client objectives. He is
                                        hands-on with fast prototyping and then
                                        scaling to produce solutions that work.
                                        Bryan has served as Director of
                                        Technology & Production for Unfold, a
                                        Los Angeles-based digital agency,
                                        developing websites and digital
                                        marketing projects for top-tier
                                        entertainment studios and gaming
                                        companies.
                                    </p>
                                </div>
                            </div>
                            {/* Single Team */}

                            {/* Single Team */}
                            <div className="team">
                                <div className="team__heading">
                                    <h4>Suguru Ishizaki</h4>
                                    <h5>
                                        Lead Partner - UX, UI and Visualization
                                    </h5>
                                </div>

                                <div className="team__details">
                                    <p>
                                        Suguru Ishizaki combines 30+ years of
                                        scholarly and practical experience in
                                        interaction design and research on
                                        visual/verbal communication. While
                                        earning his PhD at The MIT Media Lab, he
                                        first worked with Art Tauder on a visual
                                        taxonomy of marketing communications and
                                        more recently on related tools to
                                        facilitate collaboration. Suguru, a
                                        Professor at Carnegie Mellon, is now
                                        focused on Technology-enhanced Learning
                                        for writing and Computer-assisted
                                        rhetorical analysis. He has been a
                                        prolific author/contributor of scholarly
                                        papers, articles, presentations and
                                        books. Suguru is a past president of the
                                        IEEE Professional Communications
                                        Society.
                                    </p>
                                </div>
                            </div>
                            {/* Single Team */}

                            {/* Single Team */}
                            <div className="team">
                                <div className="team__heading">
                                    <h4>Ira Carlin</h4>
                                    <h5>
                                        Lead Partner for Media & Marketing
                                        Communications Technologies
                                    </h5>
                                </div>

                                <div className="team__details">
                                    <p>
                                        Ira Carlin brings to ThunderHouse 40+
                                        years of top level experience in media,
                                        communications technologies and
                                        strategic thinking for Interpublic, its
                                        largest agencies and their global
                                        clients. Ira was the founding Chairman
                                        of MAGNA Worldwide, a groundbreaking
                                        consolidated media group to harness the
                                        combined media knowledge, technologies
                                        and marketplace leverage of
                                        Interpublic's largest media companies,
                                        Initiative and Universal McCann.
                                        Earlier, he was Chairman & CEO of
                                        Universal McCann. A visionary in new
                                        digital technologies and their impact on
                                        marketing communicates, Ira has been a
                                        featured speaker at many world venues.
                                    </p>
                                </div>
                            </div>
                            {/* Single Team */}

                            {/* Single Team */}
                            <div className="team">
                                <div className="team__heading">
                                    <h4>Carlos Herranz</h4>
                                    <h5>
                                        Managing Partner, ThunderHouse Mexico
                                    </h5>
                                </div>

                                <div className="team__details">
                                    <p>
                                        Carlos Herranz served as a Marketing
                                        Communications executive for global
                                        groups including Young & Rubicam, Foote,
                                        Cone & Belding and for over 25 years,
                                        McCann-Erickson. He was President of
                                        McCann WorldGroup Mexico, the country's
                                        number one marketing communications
                                        agency. Carlos, a Spaniard by birth,
                                        managed agencies in Madrid, and served
                                        as Area Manager in Latin America. He
                                        also founded EPIC, a McCann Sports &
                                        Event Marketing Company in London that
                                        served as a marketing agency for the '92
                                        Barcelona Olympics and represented
                                        Nestle in master sponsorship
                                        negotiations with Disney theme parks.
                                    </p>
                                </div>
                            </div>
                            {/* Single Team */}

                            {/* Single Team */}
                            <div className="team">
                                <div className="team__heading">
                                    <h4>Anthony G.</h4>
                                    <h5>
                                        (Tony) Miller - Managing Partner,
                                        ThunderHouse Canada
                                    </h5>
                                </div>

                                <div className="team__details">
                                    <p>
                                        Anthony G. (Tony) Miller, is best known
                                        in Canada as the long serving CEO &
                                        Managing Partner of Maclaren. When
                                        acquired by Interpublic in 1990,
                                        Maclaren was Canada's largest and most
                                        celebrated advertising agency. Tony
                                        subsequently held executive positions
                                        with Interpublic subsidiaries, including
                                        CEO of Lintas New York, and later Vice
                                        Chairman of the McCann Worldgroup. Tony
                                        returned to Canada and remained active
                                        in marketing communications management.
                                        He joined ThunderHouse as Canadian
                                        Partner in 2006. Presently, Tony is Non-
                                        executive chairman of Yangaroo, a leader
                                        in digital distribution of audio, video
                                        and music.
                                    </p>
                                </div>
                            </div>
                            {/* Single Team */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Who;
