import React from 'react';
import Carousel from 'react-multi-carousel';
import { testimonialItems } from "../common/Data/CarouselItem";
import { responsiveTwoSlide } from '../common/Data/ResponsiveCarousel';
import { carouselSettings } from '../Project.config';

const Customer = () => {
  return (
    <section className="bg-background-light overflow-hidden">
      <div className="overflow-hidden">
        <div className="overlap-section overflow-hidden relative -left-spacing-left-10 px-0 text-start font-semibold text-white-text xl:text-larger-text lg:text-larger-text-lg leading-l-154 -tracking-[2px] whitespace-nowrap hide z-10" style={{ marginTop: "-55.6px" }}>
          endorsement
        </div>
      </div>

      <div className="py-content-spacing-xs lg:py-content-spacing-lg md:py-content-spacing-md sm:py-content-spacing-xs container mx-auto px-4">
        <div className="flex lg:justify-center md:justify-start text-center lg:mb-16 md:mb-12 xs:mb-20">
          <div className="md:text-left">
            <span className="text-primary-strong font-medium uppercase flex lg:justify-center md:justify-start" style={{ textAlign: 'start' }}>
              Our Customer
            </span>
          </div>
        </div>

        <div className="items-center grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-2 lg:col-span-1 pt-50 customerLeftColumn">
            <span className="mb-spacing-b-20 block uppercase font-medium text-grey-text">Loved by our customers</span>
            <h1 className="heading-6">What our clients are saying about our services</h1>
          </div>

          <div className="col-span-2 customerRightColumn">
            <div className="slider">
              <Carousel
                className="mySwiper"
                responsive={responsiveTwoSlide}
                {...carouselSettings}
              >
                {testimonialItems.map((item, index) => (
                  <div className="hover:bg-white border border-[#0000001a] overflow-hidden mr-0 lg:mr-5 h-auto ease-in duration-100" key={index}>
                    <div className="feature-box-move-bottom-top">
                      <img src={item.image} alt="customer" loading="lazy" />
                      <div className="feature-box-content">
                        <p className="detail">{item.detail}</p>
                        <div className="customerName">{item.customerName}</div>
                        <span className="customerDes">{item.customerDes}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;