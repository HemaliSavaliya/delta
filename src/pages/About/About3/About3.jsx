import React from 'react';
import ClientReview from './ClientReview';
import WhyChooseUs from './WhyChooseUs';
import NavbarInner from '../../../components/Navbar/InnerNavbar/NavbarInner';
import Footer from '../../../components/Footer';
import AboutImg1 from "../../../Assets/img/material-about1.jpg";
import AboutImg2 from "../../../Assets/img/material-about2.jpg";
import Packages from './Package';

const About3 = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <NavbarInner />
      <section className="container mx-auto px-4 py-content-spacing-lg">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2">
            <div className="mt-5 self-center">
              <h2 className="heading-4 xl:w-full">
                It’s Time for a New journey
              </h2>
              <p className="detail">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>

              <p className="detail">
                “ Lorem Ipsum is simply dummy text of the printing and typesetting industry ”
              </p>
              <div>
                <button className="discover">discover</button>
              </div>
            </div>

            <div className="pl-0 lg:pl-20">
              <div className="grid grid-cols-2 gap-2">
                <img src={AboutImg1} alt="about2" loading="lazy" />
                <img src={AboutImg2} alt="about2" loading="lazy" />
              </div>
            </div>
          </div>

          <WhyChooseUs />

          <Packages />
        </div>
      </section>

      <ClientReview />
      <Footer />
    </>
  )
}

export default About3;