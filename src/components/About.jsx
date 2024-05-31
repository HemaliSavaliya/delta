import React from 'react';
import AboutImage2 from "../Assets/img/home-interior-design-about-img02.jpg";

const About = () => {
  return (
    <section className="cover-background py-content-spacing-xs lg:py-content-spacing-lg md:py-content-spacing-md sm:py-content-spacing-xs">
      <div className="container mx-auto px-4">
        <div className="items-center justify-center grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center">
            <img src={AboutImage2} alt="about2" loading="lazy" width={400} height={300} />
          </div>

          <div className="pt-35 lg:ml-28">
            <div className="small">
              <span className="smallBorder" />
              <div className="flex-grow-1">
                <span className="text-primary-strong uppercase">about traveling</span>
              </div>
            </div>
            <h2 className="heading-4 xl:w-full">
              we highly followed the new Place for traveling
            </h2>
            <p className="detail">
              Lorem ipsum dolor amet consectetur adipiscing do eiusmod tempor incididunt ut labore et dolore ut enim ad minim veniam nostrud exercitation laboris nisi ut aliquip ex ea commodo.
            </p>
            <button className="discover">discover</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;