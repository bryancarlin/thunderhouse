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
                        <h1>Code Blue </h1>

                        <div className="qoutes-box glossy__bg_quote">
                            <h3>Insight:</h3>
                            <h2 id="nomarginbot">
                        
                            "Thinking Big Makes the Impossible Possible”
                            </h2>

                            <p>- Pfizer CEO Albert Bourla</p>
                        </div>

                        <div className="single__content-subhead">
                            <h3>
                            What’s Possible in the Ukraine Conflict?<br />A September 21st Cease Fire to Mark Start of Peace Negotiations
                            </h3>
                             
                            
                            <p ><b><span class="blue">Code Blue</span> is the Hospital Signal for Emergency…Lives are at stake!</b></p>

                            <p class="spacebot"> Tens of thousands of lives are being lost each month in the Ukraine conflict…tens of thousands of families are being heart broken…tens of billions of dollars are going up in smoke with the destruction of assets and the disruption of lives, infrastructure and businesses.   The battlefield is mired down, looking more and more like World War I with 21st century armaments guided by 21st century technology.  The speeches of our elected politicians and the media coverage are dominated by death, destruction and armaments. There is no path to peace… virtually no discussion of a negotiated peace.  This war was conceived by humans and can be ended by humans. 
                            &nbsp;<b>Let’s get started today!</b></p>
                            
                        </div>
                        <div className="think__item">
                            <div className="think__item-content single__content-subhead">
                            

                            <p >The continued political and military support of the Ukrainian government by the U.S. & NATO is totally justified and not in question.   The Russian aggression has been condemned twice by over 140 countries by United Nations declarations. </p> 
                            
                            <p >Look at the Great Seal of the United States…as displayed on the podium whenever President Biden speaks.  The eagle has the arrows of war in its right hand and the olive branch of peace in its left.  And notice that our Eagle’s head is turned towards the olive branch of peace. This is our <span class="blue">Code Blue</span> plea:  
                             &nbsp;<b>Turn your focus towards peace.</b></p>

                                
                                
                                 
                            </div>

                            <div className="think__item-image" id="seal">
                                <img src="/images/seal.jpg" alt="US Seal" />
                            </div>
                             
                        </div>

                        <div className="single__content-subhead">
                            <h3 class="spacebot">Get Peace Negotiations off Track 2 & on to Track1!  Every day counts!</h3>
                        </div>

                        <div className="think__item">
                            <div className="think__item-content single__content-subhead">
                                
                                <p>Traditional back channel talks, labeled “Track 2,” are going on: a June conference of peace organizations in Vienna, a meeting in Copenhagen in which Zelensky sought the support of “neutral” nations, and even talks between “former” U.S. diplomats and Russian representatives.    Let’s start down Track 1:  Negotiations by the credentialed diplomats of major countries under the auspices of the United Nations.   </p>

                                <p class="spacebot">Sure... the United Nations has low credibility because of its structure and governing rules; however, it is in place and functioning today.   Given its charter and mission,  the UN clearly is the right entity to call for a Cease Fire and to establish a negotiating process for a just, sustainable Peace.  In September 2022, the UN Department of Political & Peacebuilding Affairs (DPPA) published a 69-page Guidance on Mediation of Ceasefires.   It’s down in black and white on how to proceed to a Cease Fire…and September 21st is officially UN International Peace Day.  <b>The stage is set for at least a preliminary Cease Fire!</b></p> 
                            </div>
                            <div className="think__item-image">
                                <img src="/images/un.jpg" alt="United Nations" />
                            </div>
                             
                        </div>


                        <div className="think__item" id="spacetop">
                            <div className="think__item-image">
                             <img src="/images/cbpin.jpg" alt="Code Blue" />
                            </div>
                            <div className="think__item-content single__content-subhead" id="nomargin">
                                <p><b><span class="blue">Code Blue</span> Mission:</b><br />
                                Stimulate Discussion and Action for a Peaceful Resolution of the Ukraine Conflict.</p>

                                <p><b><span class="blue">Code Blue</span> Strategy: </b> <br /> 
                                Use Digital, Viral and Influencer Marketing Techniques to Promote Peace</p>

                                <p><b><span class="blue">Code Blue</span> Media:</b><br />
                                Make it Simple & Easy!  Wear a <span class="blue">Code Blue</span> Dove Pin to Show Your Support for Peace.</p>

                                <p><b><span class="blue">Code Blue</span> Team:</b><br />
                                Seed Code Blue Dove Pins with Highly Visible Influencers & Organizations; 
                                Spread the Wearing of Dove Pins Virally to Public</p>
                                        

                                <p class="spacebot"><span class="blue">Code Blue</span>  is a not-for-profit Initiative of ThunderHouse LLC. </p>
                            </div>

                            
                        </div>

                         <div className="qoutes-box glossy__bg" id="spacetop">
                            <h3 class="spacebot">Path & Timeline to September 21st Cease Fire & Start of Peace Negotiations</h3>

                            <p>There can be no peace negotiations without the involvement of the Ukraine and Russia.  And yet, there is no trust between the parties; they simply cannot sit down across a table for direct negotiations anytime soon.  Given this hurdle, here’s the <span class="blue">Code Blue</span> suggested path forward:   </p> 
                            
                            <ol class="codeblue">
                                <li class="codeblue"><b>The UN Secretary General expresses a willingness to serve as the Chief Mediator.</b> The Secretary General can take this action mitigating third-party self interest without a UN debate or vote.  He did so for the Covid-19 pandemic.  On September 21st, 2020 (UN International Peace Day), he called for a global cease fire for all ongoing conflicts.  </li>
                                <li class="codeblue"><b>Formation of a Balanced UN Peace Advisory Committee:</b>  The Chief Mediator calls for the formation of a UN Peace Advisory Committee in the next 30 days to provide counsel for the peace negotiations.   Russia and the Ukraine are asked to nominate an equal number of nations as their surrogates for the Peace Advisory Committee, a balanced representation of Ukrainian allies and nations that abstained from condemning Russia, e.g.  China, India, & Brazil.  The Mission: Draft the Guidelines for Peace for approval by the Ukraine & Russia.</li>
                                <li class="codeblue"><b>The UN Chief Mediator announces the formation of the Peace Advisory Committee and calls for a Preliminary Cease Fire on September 21</b> to mark this step forward to Peace. </li>  
                                <li class="codeblue"><b>By Year end, The Peace Advisory Committee Issues First Draft Guidelines</b> for a Definitive Cease Fire & a Just, Sustainable Peace based on the principles of the UN Charter and published Guidance on Mediation of Ceasefires.</li>
                            </ol>
                            
                            <h3 id="centertext">Challenging:  Yes.   Impossible:  No!</h3>

                            

                        </div>

                        <div className="single__content-subhead">
                            <h3>What Can You Do?   <a href="" className="conlink">Click Here</a> to be a part of the <span class="blue">Code Blue</span> Team</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Codeblue;
