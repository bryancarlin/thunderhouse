"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Legacy = () => {
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
            <h1>The Thunderhouse Legacy</h1>

            <div className="think__items">
              <div className="think__item">
                <div className="think__item-content single__content-subhead">
                  <h3>Tracing Back To Benjamin Franklin</h3>
                  <p>
                    ThunderHouse traces its brand heritage to the greatest of
                    all American innovators, Benjamin Franklin. His focus was
                    the practical application of science to solving everyday
                    problems and making peoples' lives better. Franklin created
                    the postal system, the lending library, the first fire
                    department, the Franklin stove, bifocals and most relevant
                    to ThunderHouse, he discovered the connection between
                    lightning and electricity.
                  </p>
                </div>

                <div className="think__item-image">
                  <img src="/images/franklin.jpg" alt="Benjamin Franklin" />
                </div>
              </div>
              {/* Single Item */}

              {/* Single Item */}
              <div className="think__item">
                <div className="think__item-content single__content-subhead">
                  <h3>Invented the Lightning Rod… But No One Was Buying</h3>
                  <p>
                    In the mid-1700s, Franklin applied what he learned from his
                    kite-flying experiments to the invention of the lightning
                    rod, to prevent the destruction of buildings and lives. But
                    as with many innovations, before and after, Franklin could
                    not sell the concept: lightning was considered a divine act
                    and interfering with it was sacrilege.
                  </p>
                </div>

                <div className="think__item-image">
                  <img src="/images/lightning.jpg" alt="Lightning" />
                </div>
              </div>

              <div className="think__item">
                <div className="think__item-content single__content-subhead">
                  <h3>The First Marketing "Demo"</h3>
                  <p>
                    Franklin was undeterred. He built a ThunderHouse, a
                    brilliant "demo" to communicate the benefit of his lightning
                    rod and break the barriers to its acceptance. The
                    "ThunderHouse" - a three-dimensional wooden model house,
                    equipped with a lightning rod, hinged walls and a detachable
                    roof. Inside, Franklin placed a small charge of gunpowder.
                  </p>
                  <p>
                    When an electric charge was applied to the lightning rod,
                    electricity would pass safely through the rod and grounding
                    wire to the earth with no effect. However, when a wooden
                    block was positioned to break the grounding circuit, a spark
                    across the block would ignite the gunpowder with convincing
                    and entertaining effects - the roof and walls literally blew
                    off!
                  </p>
                </div>

                <div className="think__item-image">
                  <img src="/images/thundersplit.jpg" alt="Thunderhouse demo" />
                </div>
              </div>

              <div className="qoutes-box glossy__bg">
                <h2>The ThunderHouse Mission</h2>

                <p>
                  The barriers to bringing innovations to fruition are even
                  greater and more complex today than they were in Franklin's
                  day. And today's ThunderHouse leads innovators through these
                  barriers to success. ThunderHouse itself is an innovation in
                  its transformation in service offering from Marketing
                  Communications (MarCom) to Organizational Communications
                  (OrgCom).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
