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
                            <h3>Inspiration:</h3>
                            <h2 id="nomarginbot">
                        
                            "Thinking Big Makes the Impossible Possible”
                            </h2>

                            <p>- Pfizer CEO Albert Bourla</p>
                        </div>

                        <div className="single__content-subhead">
                            <h3>
                            What’s Possible in the Ukraine Conflict?<br />A UN-facilitated Peace Process to Negotiate a Just and Sustainable Peace.
                            </h3>
                             
                            
                            <p ><b><span class="blue">Code Blue</span> is the Hospital Signal for Emergency…Lives are at stake!</b></p>

                            <p class="spacebot">Thousands of lives are being lost each month in the Ukraine conflict…thousands of families are being heart broken…billions of dollars are going up in smoke with the destruction of assets and the disruption of lives, infrastructure and businesses. The battlefield is mired down, looking  like World War I and the war is escalating well beyond the frontlines. The speeches of our elected politicians and the media coverage are dominated by death, destruction and armaments. There is no endgame… virtually no discussion of a negotiated peace. This war was conceived by humans and can be ended by humans.
                            &nbsp;<b>Let’s get started today!</b></p>
                            
                        </div>
                        <div className="think__item">
                            <div className="think__item-content single__content-subhead">
                            

                            <p >Continued political and military support of the Ukrainian government by the U.S. & NATO not in question. The Russian aggression has been condemned twice by over 140 countries by United Nations declarations.   The International Criminal Court has issued an arrest warrant for Vladimir Putin for alleged war crimes.</p> 
                            
                            <p >Look at the Great Seal of the United States…as displayed on the podium whenever President Biden speaks.  The eagle has the arrows of war in its right hand and the olive branch of peace in its left.  And notice that our Eagle’s head is turned towards the olive branch of peace. This is our <span class="blue">Code Blue</span> plea:  
                             &nbsp;<b>Turn your focus towards peace.</b></p>

                                
                                
                                 
                            </div>

                            <div className="think__item-image" id="seal">
                                <img src="/images/seal.jpg" alt="US Seal" />
                            </div>
                             
                        </div>

                        <div className="single__content-subhead">
                            <h3 class="spacebot">Get Peace Negotiations off Track 2 & on to Track 1!  Every day counts!</h3>
                        </div>

                        <div className="think__item">
                            <div className="think__item-content single__content-subhead">
                                
                                <p>Traditional back channel talks, labeled “Track 2,” are going on, and even talks between “former” U.S. diplomats and Russian representatives. Let’s start down Track 1: Negotiations by the credentialed diplomats of major countries under the auspices of the United Nations. </p>

                                <p class="spacebot">Sure... the United Nations has low credibility because of its structure and governing rules; however, given its charter, expertise,and resources, the UN clearly is the right entity to facilitate a peace process leading to a just, sustainable Peace. In September 2022, the UN Department of Political & Peacebuilding Affairs (DPPA) published a 69-page Guidance on Mediation of Ceasefires and in July 2023, it issued A New Agenda for Peace.  <b>The stage is set for UN facilitation of the peace process for Ukraine.</b> </p> 
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
                                Use Digital, Viral and Influencer Marketing Techniques to Promote Peace.</p>

                                <p><b><span class="blue">Code Blue</span> Media:</b><br />
                                Make it Simple & Easy! Wear a <span class="blue">Code Blue</span> Dove Pin or Display our Dove logo anyway you choose to Show Your Support for Peace.</p>

                                <p><b><span class="blue">Code Blue</span> Team:</b><br />

                                Seed <span class="blue">Code Blue</span> Dove Pins with Highly Visible Influencers & Organizations; Spread the Wearing of Dove Pins and Display of Logo Images Virally to Public.</p>
                                        

                                <p class="spacebot"><span class="blue">Code Blue</span>  is a not-for-profit Initiative of ThunderHouse LLC. </p>
                            </div>

                            
                        </div>

                         <div className="qoutes-box glossy__bg" id="spacetop">
                            <h3 class="spacebot">The Path to Peace</h3>
                            <p>There can be no peace negotiations without the involvement of the Ukraine and Russia. And yet, there is no trust between the parties; they simply cannot sit down across a table for direct negotiations anytime soon. </p>
                            <p>Given this hurdle, here’s the <span class="blue">Code Blue</span> suggested path forward: </p> 
                            
                            <ol class="codeblue">
                                <li class="codeblue"><b>During UN Week,  Secretary General Antònio Guterres declared Peace in Ukraine as the #1 Global Priority and expressed a willingness for the UN to serve as a Facilitator.</b>  That’s a step closer to the UN initiating action.</li>
                                <li class="codeblue"><b>Formation of a Balanced UN Peace Acceleration Committee (PAX) to provide counsel on the peace process. </b>  PAX will have a balanced representation of nations that abstained from condemning Russia, e.g. China, India, & Brazil and Ukraine allies.  Both combatants will have the opportunity to provide their rationale for the conflict.  The Mission:  Map out a path to peace and an endgame to this war, possibly starting with an “apolitical” humanitarian action like resetting the Black Sea Initiative.  And possibly followed with a path to a second “apolitical” religious observance, a Temporary Ceasefire for Christmas (or Easter at the latest).</li>
                                <li class="codeblue"><b>By Year end, PAX Issues A Path Forward for a Definitive Cease Fire & A Just, Sustainable Peace</b> based on principles in the UN Charter,  their published Guidance on Mediation of Ceasefires and A New Agenda for Peace. </li>
                            </ol>
                            
                            <h3 id="centertext">A Daunting Challenge:  Yes.   Impossible:  No!</h3>

                            

                        </div>

                        <div className="single__content-subhead">
                            <h3>What Can You Do?   <a href="https://codeblueukr.org/" className="conlink" target="_blank">Click Here</a> to be a part of the <span class="blue">Code Blue</span> Team</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Codeblue;
