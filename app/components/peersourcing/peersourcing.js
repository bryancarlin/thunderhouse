"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Codeblue = () => {
    useEffect(() => {
        const innerContents = document.querySelectorAll(".other__fade-in");

        gsap.to(".other__hero-area", { opacity: 1, duration: 3 });

        innerContents.forEach((content) => {
            const innerElements = content.querySelectorAll(
                "h1, h2, h3, h4, h5, p, li,  .single__content-image, .think__item-image"
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
                        <h1>PeerSourcing:  </h1>

                        <div className="qoutes-box glossy__bg_quote">
                            <h2>
                            “Strategy without tactics is the slowest route to victory”
                            </h2>

                            <p>- Sun Tzu</p>
                        </div>

                        <div className="single__content-subhead">
                        
                            <h3>AI-Assisted Platform Develops More Effective Communications Strategies<br /><i>Faster and More Cost Efficiently</i></h3>
                             
                            
                           
                                <p >PeerSourcing empowers target audiences to be co-creators at the heart of the communications process. It enhances, not replaces human strategists.</p>

                                
                                <p >Marketers and creatives obtain the input for optimal Positioning and effective communications “right from the horse’s mouth.” The true voice of target audience is captured in an online session through objective and projective interview techniques.   Respondent input is analyzed with Artificial Intelligence algorithms and AI generates the insights for Product Positioning Communications Strategies.  PeerSourcing was conceived and developed by highly experienced, successful marketing communications executives. </p>

                                <h3>PeerSourcing Market Focus: High-Science, High-Tech Product Innovations </h3>

                                <p>With high-science, high-tech innovations often requiring upfront R&D investments of over a $1 Billion
                                    and acquisitions costing $10s of Billions, the risks and rewards are great.  Success depends on striking a responsive, action-generating chord when communicating to highly knowledgeable professional audiences, investors and potential partners.  Traditional marketing and communication research, developed mostly for consumer products, have failed to keep pace with the sophistication of high science/high-tech and highly knowledgeable audiences.  AI-powered PeerSourcing generates more precise positioning, communications strategies and brand persona based on the direct input of the target audience that innovative marketers seek to influence. </p>
                            

                                <h3>PeerSourcing Is Market Ready for Pharma and Life Sciences </h3> 

                                <p>PeerSourcing has been developed for the Pharma sector of the Life Sciences industry specifically for Pharma marketers to influence the behavior of Healthcare Professionals (HCPs) where the need is most obvious.  The R&D and beta testing over a five-year period has been self-funded and resulted in a repeat sale of two pilot tests to a major Pharma client.  PeerSourcing has first mover advantage, and currently has no direct competition.   ThunderHouse, a communications consultancy that is dedicated to bringing significant innovations to fruition, has business development responsibilities in partnership with a team 
                                of former Pharma MarCom Agency executives.</p>

                                <p>Competitively, this gives PeerSourcing a Faster, More Effective and Less Expensive competitive edge over traditional research methodologies.   The current platform for Pharma can be extended to other categories of Life Sciences, e.g. Diagnostics, Medical Devices, Oral Care, etc. with the target audience being HCPs.  The next extension of PeerSourcing would be the Patient target audience both HCPs to Patients/Caregivers and Pharma directly to Patients/Caregivers.   The average cost of a PeerSourcing study for one target audience segment of 200 MD respondents is $200K with the deliverable of the AI generated Communications Toolbox within 6 weeks of study approval. </p>  

                                <p>The PeerSourcing AI-powered platform for developing positionings and brand communications strategies is extendable to other industries, starting with B2B high tech, e.g. Computer Science, FinTech, CyberTech, Enterprise Software, etc. and to B2B Services.  This first tier of expansion requires industry-specific adaptations in the brand archetypes based on Jungian personality types.  Further extension to consumer products will require both adaptations in archetypes and more major modifications in the nature of the marketer input as stimuli at the outset of the study. </p>

                                <h3>The Way Forward…</h3>

                                <p><b>Curation to Hybrid SaaS:</b> The current software is a MVP that requires curation by Pharma MarCom or management consulting professionals to insure that the content and formatting of the marketer input is appropriate for the study methodology.  Curation is also required to develop a customized creative brief from the elements of the PeerSourcing Communications Toolbox.  With user training, the current curated version can become a hybrid SaaS offering that is hosted, maintained and updated by PeerSourcing.</p>

                                <p><b>Third-party to First-party Respondents:</b>  PeerSourcing currently uses a third-party resource to recruit study respondents. Next, a transition to marketer first-party data as the source of respondents.</p> 

                                <p>For more information on PeerSourcing and ThunderHouse, please contact Art Tauder by email art@thunderhouse.org or by phone at 203 451-2699.  </p>



                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Peersourcing;
