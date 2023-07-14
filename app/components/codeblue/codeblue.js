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
                        <h1>Thinking Big:  </h1>

                        <div className="single__content-subhead">
                            <h3>
                            What’s Possible in the Ukraine Conflict?<br />A September 21st Cease Fire to Mark Start of Peace Negotiations
                            </h3>
                             
                            
                            <p class="spacebot"><b><span class="blue">Code Blue</span> is the Hospital Signal for Emergency…Lives are at stake!</b></p>

                            
                            
                        </div>
                        <div className="think__item">
                            <div className="think__item-content single__content-subhead">
                            <p >Every day there are hundreds of deaths in the Ukraine and countless destruction in a war that no one can win.  The battlefield looks more and more like World War I with 21st century armaments guided by 21st century technology.  The conversation of our elected politicians and the media is dominated by death, destruction and armaments. There is no path to peace.  This war was conceived by human and, like all wars, can be ended by humans.  The path to a just, sustainable peace will be long and complex.  Let’s get started today!</p>

                                
                                <p >The continued military support of the Ukrainian government by the U.S. & NATO is totally justified and not in question.   The Russian aggression has been condemned twice by over 140 countries by United Nations declarations.  Securing peace does not contradict our extensive military support.  We just need some more balance in our approach.</p>

                                <p>Look at the Great Seal of the United States…so often displayed on the podium whenever President Biden speaks.  The eagle has the arrows of war in its right hand and the olive branch of peace in its left.  And notice that our Eagle’s head is turned towards the olive branch of peace. This our <span class="blue">Code Blue</span> plea:  <b>Turn your focus towards peace.</b></p>
                            </div>

                            <div className="think__item-image">
                                <img src="/images/seal.jpg" alt="US Seal" />
                            </div>
                             
                        </div>

                        <div className="single__content-subhead">
                            <h3 class="spacebot"><b>Get Peace Negotiations off Track 2 & on to Track 1!  Every day counts!</b></h3>
                        </div>

                        <div className="think__item">
                            <div className="think__item-content single__content-subhead">
                                
                                <p>On Track 2, traditional back channel peace talks are going on and quietly being reported by the media:  a June conference of peace organizations in Vienna, a meeting in Copenhagen in which Zelenskyy sought the support of “neutral” nations, and even talks between “former” U.S. diplomats and Russian representatives.    Let’s start down Track 1, the mainstream:  formal negotiations by credentialed diplomats of major countries under the auspices of the United Nations.   </p>

                                <p class="spacebot">Sure... the United Nations has low credibility because of its structure and governing rules; however, it is what we have in place and functioning today.   Based on its charter and declared mission,  the UN clearly is the right entity to call for a Cease Fire and to establish a process for a just, sustainable Peace.  In September 2022, the UN Department of Political & Peacebuilding Affairs (DPPA) published a 69-page Guidance on Mediation of Ceasefires.   It’s down in black and white on how to proceed to a Cease Fire… and <b>September 21st is officially UN International Peace Day…the stage is all set for at least a preliminary Cease Fire!</b></p> 
                            </div>
                            <div className="think__item-image">
                                <img src="/images/dppa.jpg" alt="DPPA" />
                            </div>
                             
                        </div>

                         <div className="qoutes-box glossy__bg">
                            <h3 class="spacebot"><b>The Path & Timeline to September 21st Cease Fire & Start of Peace Negotiations</b></h3>

                            <p>The Biggest Challenge:  There can be no peace negotiations without the involvement of the Ukraine and Russia, and yet, there is no trust between the parties.  They cannot sit down across a table and negotiate anytime soon.  Given this hurdle, here’s the <span class="blue">Code Blue</span> suggested path forward: </p> 
                            <ol class="codeblue">
                            <li class="codeblue"><b>The UN Secretary General expresses a willingness to serve as the Chief Mediator</b>, thereby mitigating the obvious personal and national self-interest of previous failed third-party efforts to start peace negotiations. There is precedent for this action without the need for a UN debate or vote. During the Covid-19 pandemic, the Secretary General unilaterally called for a global cease fire on September 21st – The UN International Peace Day. </li>
                            <li class="codeblue"><b>Formation of a Balanced UN Peace Advisory Committee: </b> The Chief Mediator calls for the formation of a UN Peace Advisory Committee to provide counsel in the peace process. Both the Ukraine and Russia are asked to nominate as their surrogates an equal number of nations within 30 days to serve on a Peace Advisory Committee with balanced representation from Ukrainian allies and those nations that abstained from condemning Russia, e.g.  China, India, & Brazil.  The Mission: Draft the Guidelines for Peace in the Ukraine facilitated by the United Nations DPPA and submit the negotiated terms for approval by the Ukraine & Russia.</li>
                            <li class="codeblue"><b>The UN Chief Mediator announces the formation and mission of Peace Advisory Committee and calls for a Preliminary Cease Fire on September 21</b> to mark this step forward to Peace. </li>  
                            <li class="codeblue"><b>By Yearend, The Peace Advisory Committee Issues First Draft Guidelines</b> for a Definitive Cease Fire & a Just, Sustainable Peace based on the principles of the UN Charter and published Guidance on Mediation of Ceasefires.</li>
                            </ol>
                            <p ><b>Challenging:  Yes.   Impossible:  No!</b></p>

                            

                        </div>

                        <div className="think__item" id="spacetop">
                            <div className="think__item-content single__content-subhead">
                            <p><b><span class="blue">Code Blue</span> Mission:</b><br />
                            Stimulate Discussion and Action for a Peaceful Resolution of the Ukraine Conflict.</p>

                            <p><b><span class="blue">Code Blue</span> Strategy: </b> <br /> 
                            Use Digital, Viral and Influencer Marketing Techniques to Promote Peace</p>

                            <p><b><span class="blue">Code Blue</span> Media:</b><br />
                            Make it Simple & Easy!  Wear a Code Blue Dove Pin to Show Your Support for Peace.</p>

                            <p><b><span class="blue">Code Blue</span> Team:</b><br />
                            Seed Code Blue Dove Pins with Highly Visible Influencers & Organizations; 
                            Spread the Wearing of Dove Pins Virally to Public</p>
                                    

                            <p><b>What Can You Do?   Click Here to be a part of the <span class="blue">Code Blue Team</span>.</b></p>
                            </div>

                            <div className="think__item-image">
                            <img src="/images/cbpin.jpg" alt="Code Blue" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Codeblue;
