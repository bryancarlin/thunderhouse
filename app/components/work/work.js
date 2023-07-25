"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
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
            <h1>How We Work</h1>

            <div className="single__content-subhead">
              <p>
                ThunderHouse begins its work at the frontend of the
                Communications Process: It then helps attract best-in-class
                talent with market-specific expertise to implement successful
                marketing programs.{" "}
              </p>

              <p>
                At each step in a well-defined, collaborative process,
                ThunderHouse seeks a <i>faster, more cost effective track</i>.{" "}
              </p>
            </div>

            <div className="think__items">
              {/* Single Item */}
              <div className="think__item">
                <div className="think__item-content single__content-subhead">
                  <h3>Begin Work At the Frontend of Communications</h3>
                  <p> ThunderHouse starts with Market Understanding whether that market is for your product, candidate or idea.   Understanding requires knowledge of 1) Product/Candidate/issues, 2) the Audience(s) and 3) the behavioral environment often called the Marketplace.  Understanding, then naturally leads to an articulation of a Vision of Success and Basic Next Steps.   Once that Vision is clear and agreed to, the other elements of Strategy Development are addressed to achieve that Vision of Success.   Strategy forms the necessary foundation and guidance for Tactical implementation.</p>
                  <p>ThunderHouse uses proven, visually engaging tools to facilitate collaboration, to sort through a multiplicity of possibilities and to expedite decision making.  For more detail on the frontend process and the Spectrum tool click here. </p>
                </div>

                <div className="think__item-image">
                  <img src="/images/spectrum.jpg" alt="Spectrum" />
                </div>
              </div>
              {/* Single Item */}

              <div className="features__cards" id="nomargin">
                    {/* Single Card */}
                    <div className="features__card single__content-subhead glossy__bg" id="tallcard">
                        <h3>"Best of Class" Resourcing</h3>

                        <p>
                        ThunderHouse will not be re-inventing resources that already
                        exist, but rather recognizing and securing "best-of-class"
                        talent, with market-specific experience, whether the talent
                        is affiliated with an existing entity and working
                        independently. The world doesn't need another branding
                        company, another advertising agency, another search
                        marketing company or another investor relations or lobbying
                        firm. ThunderHouse is experienced in identifying the best
                        talent, negotiating terms of engagement, and most
                        importantly facilitating collaboration.
                        </p>
                    </div>
                    {/* Single Card */}
                    {/* Single Card */}
                    <div className="features__card single__content-subhead glossy__bg" id="tallcard">
                        <h3>Compensation & Rewards for Success</h3>

                        <p>
                        ThunderHouse resources will be compensated at market rates
                    for their services to develop strategies and implement
                    Action Plans. However, ThunderHouse principals will be
                    rewarded primarily on the basis of success in achieving
                    agreed-upon objectives. The specific performance
                    compensation will be determined on an innovation-specific
                    basis. "Best-of-Class" outside resources will be compensated
                    fairly at market rates, without any ThunderHouse markup.
                        </p>
                    </div>

              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
