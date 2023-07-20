"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Think = () => {
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
            <h1>How We Think</h1>

            <div className="single__content-subhead">
              <p>
                ThunderHouse focuses on Innovation because Innovation fuels
                growth…and significant innovations fuel significant, sustainable
                growth.
              </p>
            </div>

            <div className="glossy__heading glossy__bg_quote">
              <p>
                Innovation (ɪnəˈveɪʃən/) n. A better way to satisfy needs and
                wants
              </p>
            </div>

            <div className="think__items">
              {/* Single Item */}
              <div className="think__item">
                <div className="think__item-content single__content-subhead">
                  <h3>What is Innovation?</h3>
                  <p>
                    The very structure of established organizations, the
                    operations, systems and procedures, that keep companies on
                    track today become barriers to innovations that fuel the
                    growth of these businesses tomorrow. The "Innovator's
                    Dilemma," as Harvard professor Clayton Christensen pointed
                    out, prevents some of the most significant new ideas from
                    fruition... and keeps the "same old, same old" in place.
                    ThunderHouse addresses the many facets of this dilemma.
                  </p>
                </div>

                <div className="think__item-image">
                  <img src="/images/think1.jpg" alt="Think" />
                </div>
              </div>
              {/* Single Item */}

              <div className="qoutes-box glossy__bg_quote">
                <h2>
                  “Our problem is not that we aim too high and miss, But we aim
                  too low and hit.”
                </h2>

                <p>- Aristotle 384-322 BC</p>
              </div>

              {/* Single Item */}
              <div className="think__item">
                <div className="think__item-content single__content-subhead">
                  <h3>What is Significant Innovation?</h3>
                  <p>
                    Each Organization should define “Significance” in accordance
                    with its mission and objectives. For ThunderHouse,
                    “Significance” Is defined as improving the Quality of Life
                    of individuals and enough individuals to impact the Quality
                    of Life of society.
                  </p>
                </div>

                <div className="think__item-image">
                  <img src="/images/think2.jpg" alt="Think" />
                </div>
              </div>
              {/* Single Item */}

              {/* Single Item */}
              <div className="think__item">
                <div className="think__item-content single__content-subhead">
                  <h3>What is Sustainable Growth?</h3>
                  <p>
                    The term “Sustainable” is most frequently associated with
                    ESG initiatives: Social Environmental, Social and
                    Governance. ThunderHouse defines “sustainability” in a
                    broader context: the ability of an organization to sustain
                    itself over time financially and security-wise as as well as
                    in terms of ESG. As Innovations fuel sustainable growth,
                    Profitability generates the investment necessary for
                    Innovation. And today, without addressing Security,
                    organizations are increasingly at risk.
                  </p>
                </div>

                <div className="think__item-image">
                  <img src="/images/think3.jpg" alt="Think" />
                </div>
              </div>
              {/* Single Item */}
            </div>
          </div>
          {/* Single Content */}
        </div>
      </div>
    </section>
  );
};

export default Think;
