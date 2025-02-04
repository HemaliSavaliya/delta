import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import AboutImage from "../Assets/img/home-interior-design-about-img01.jpg";

const Trends = () => {
  return (
    <section className="py-content-spacing-xs lg:py-content-spacing-lg md:py-content-spacing-md sm:py-content-spacing-xs">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h1 className="heading-3">The Way To Move. The Way To Care</h1>
            <div className="lg:mt-20 w-width-70 mx:lg-0 md:mt-0 xs:w-1/2 xxs:w-width-70">
              <div className="text-primary-strong hover:text-background-dark underline underline-offset-4 font-medium cursor-pointer">
                hello@domain.com
              </div>
              <button className="aboutBtn">About Company</button>
            </div>
          </div>

          <div className="pt-30">
            <div className="uppercase font-semibold text-background-dark lg:mb-spacing-m-25 sm:mb-spacing-mb-15">
              Let's Make Your Best Trip Ever
            </div>
            <p className="detail">
              Sed ut perspiciatis unde omnis natus error sit voluptam accusantium natus error omnis iste natus error sit volupta accusantium sed perspiciatis unde omnis iste natus.
            </p>
            <p className="detail">
              Perspiciatis unde omnis natus error natus voluptatem accusantium natus omnis iste natus error sit voluptatem accusantium.
            </p>
          </div>

          <div className="pt-30">
            <div className="outside-box-bottom relative lg:mb-[-10vw] sm:mb-0">
              <img
                src={AboutImage}
                alt="about"
                className="relative z-[1]"
                width={"100%"}
                height={542}
                loading="lazy"
              />
              <div className="absolute bottom-0 right-0">
                <span className="inline-block">
                  <div className="achievement">
                    <button className="btn-sonar" aria-label="Play Company Achievements">
                      <AiOutlineStar />
                    </button>
                    <span className="video-icon-text">Commendation</span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;