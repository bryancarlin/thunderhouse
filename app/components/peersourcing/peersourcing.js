"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Peersourcing = () => {
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

                        

                        <div className="single__content-subhead">
                        
                            <h3>AI-Assisted Platform Develops More Effective Communications Strategies<br /><i>Faster and More Cost Efficiently</i></h3>
                             
                         </div>  
                       
                                <div className="qoutes-box glossy__bg_quote" id="shortbox">
                                    <h2>
                                    “Strategy without tactics is the slowest route to victory”
                                    </h2>

                                    <p>- Sun Tzu</p>
                                </div> 
                           
                         <div className="single__content-subhead">   
                                <p ><b>PeerSourcing empowers target audiences to be co-creators at the heart of the communications process. It enhances, not replaces human strategists.</b></p>

                                
                                <p >Marketers and creatives obtain the input for optimal Positioning and effective communications “right from the horse’s mouth.” The true voice of target audience is captured in an online session through objective and projective interview techniques.   Respondent input is analyzed with Artificial Intelligence algorithms and AI generates the insights for Product Positioning Communications Strategies.  PeerSourcing was conceived and developed by highly experienced, successful marketing communications executives. </p>

                                <h3>PeerSourcing Market Focus: High-Science, High-Tech Product Innovations </h3>

                                <p class="spacebot">With high-science, high-tech innovations often requiring R&D investments of over a $1 Billion
                                    and acquisitions costing $10s of Billions, the risks and rewards are great.  Success depends on striking a responsive, action-generating chord when communicating to highly knowledgeable professional audiences, investors and potential partners. When compared to  PeerSourcing, many traditional marketing and communication research methodologies are near  obsolete for high science/high-tech products targeted highly knowledgeable audiences.  
                                    </p>
                            

                                <h3 class="spacebot">Here’s How PeerSourcing Works:</h3>
                            </div>
                            <div className="think__item-image" id="noheight">
                                <img src="/images/pshow.jpg" alt="How it works" />
                            </div>
                            <div className="single__content-subhead">   
                                <p>The deliverable is the PeerSourcing Communications Toolbox consisting of a Product Positioning statement and the elements for a Communications Strategy:  claim prioritization, a composite narrative, a unique product persona, image & word clouds and verbatims.</p>
                                
                                <h3>The PeerSourcing Platform Utilized Throughout the Product Life Cycle</h3>
                                
                                <p class="spacebot">Use cases begin at Pre-launch during R&D for positioning, viability assessment and strategic planning through to Harvesting to optimize returns at patent expiry.</p>
                            </div>
                            <div className="think__item-image" id="noheight">
                                <img src="/images/pscycle.jpg" alt="Use Cases" />   
                            </div>
                            <div className="single__content-subhead">   
                                <h3>PeerSourcing Is Market Ready for Pharma and Life Sciences </h3> 

                                <p>PeerSourcing has been developed for Pharma sector and Life Sciences industry, specifically to influence the behavior of Healthcare Professionals (HCPs) where the need is most obvious.  The R&D and beta testing over a five-year period resulted in a repeat sale of two pilot tests for a major Pharma client.  
PeerSourcing delivers a first mover competitive edge, and currently has no direct competition.</p>

                                <p>The current platform for Pharma can be extended to other categories of Life Sciences, e.g. Diagnostics, Medical Devices, Oral Care, etc. with the target audience being HCPs.  The next extension would be the Patient target audience both HCPs to Patients/Caregivers and Pharma directly to Patients/Caregivers. 
PeerSourcing delivers an AI generated Communications Toolbox within 6 weeks of study approval. </p>  

                                
                                <h3>The Way Forward…</h3>

                                <p><b>PeerSourcing is extendable to other industries</b> starting with B2B high tech, e.g. Computer Science, FinTech, CyberTech, Enterprise Software, etc. and to Political Campaigns for candidates and issues. </p>

                                <p><b>From Curation to Hybrid SaaS:</b>   With user training, the current curated version can become a hybrid SaaS offering that is hosted, maintained and updated by PeerSourcing.</p>

                                <p><b>Third-party to First-party Respondents:</b> PeerSourcing can transition from currently third-party respondent recruiting to marketer first-party data as the source of respondents. </p>

                                <p>For more information on PeerSourcing and ThunderHouse, please contact Art Tauder by email art@thunderhouse.org or by phone at 203 451-2699.  </p>



                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Peersourcing;
