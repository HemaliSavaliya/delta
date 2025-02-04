import React from 'react';
import Carousel from 'react-multi-carousel';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Dots from '../common/Dots';
import { responsiveOneSlide } from '../common/Data/ResponsiveCarousel';
import { slides } from '../common/Data/CarouselItem';
import { carouselSlider } from '../Project.config';

const SlideCard = ({ slide }) => (
  <div className="sliderCard">
    <div className="mb-spacing-m-25 md:inline-block">
      <span className="text-primary-strong inline-block font-medium align-middle">{`0${slide.id}`}</span>
      <span className="w-border-w h-[1px] inline-block align-middle bg-light-grey-border ml-spacing-left-22 mr-spacing-right-15" />
      <span className="inline-block text-primary-strong uppercase font-medium align-middle">{slide.category}</span>
    </div>
    <div className="w-width-100 mb-spacing-m">
      <div className="flex">
        <h2 className="heading-1">{slide.title}</h2>
        <span className="self-center md:ml-spacing-left-30 sm:ml-0">
          <div className="leading-icon-lh rounded-full bg-background-dark w-icon-w h-icon-h flex justify-center items-center text-normal-text-1 text-white">
            <AiOutlineArrowRight />
          </div>
        </span>
      </div>
    </div>
  </div>
);

const SlideItem = ({ slide }) => (
  <article className={`sliderImage-${slide.id}`}>
    <div className="flex flex-col justify-end ml-auto xl:w-slider-w lg:w-slider-w-lg h-full sm:w-full">
      <SlideCard slide={slide} />
    </div>
  </article>
);

const Slider = () => {
  return (
    <section>
      <Carousel
        className="mySwiper"
        responsive={responsiveOneSlide}
        customDot={<Dots />}
        {...carouselSlider}
      >
        {slides.map((slide) => (
          <SlideItem key={slide.id} slide={slide} />
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;