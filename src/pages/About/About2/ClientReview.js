import React from 'react';
import { review } from '../../../common/Data/CarouselItem';
import { responsiveOneSlide } from '../../../common/Data/ResponsiveCarousel';
import Carousel from 'react-multi-carousel';
import { VscQuote } from 'react-icons/vsc';
import { carouselSettings } from '../../../Project.config';

const ClientReview = () => {
  return (
    <section className="bg-background-light">
      <div className="items-center grid grid-cols-1 gap-4 container mx-auto px-2 lg:px-0 py-content-spacing-xs">
        <div className="flex justify-center items-center pb-10">
          <VscQuote className="text-primary-strong w-width-37 h-height-30" />
        </div>
        <div className="">
          <div className="slider">
            <Carousel
              className="mySwiper"
              responsive={responsiveOneSlide}
              {...carouselSettings}
            >
              {review.map((item, index) => (
                <div key={index}>
                  <h2 className="text-center font-semibold text-small-text-size md:text-normal-text lg:text-heading-text clamp-3">{"\"" + item.review + "\""}</h2>
                  <div className="flex flex-col justify-center items-center">
                    <p className="pt-5 capitalize font-bold">{item.name}</p>
                    <p className="uppercase detail">Client of company</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientReview;