import React from 'react';
import { VscQuote } from 'react-icons/vsc';
import { review } from '../../../common/Data/CarouselItem';

const ClientReview = () => {
  return (
    <section className="bg-background-light">
      <div className="items-center grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto px-2 lg:px-0 py-content-spacing-xs">
        {review.map((item, index) => (
          <div key={index}>
            <div className="hover:bg-white border border-dark-border overflow-hidden lg:mr-5 md:mr-0 h-height-320 ease-in duration-100">
              <div className="feature-box-move-bottom-top">
                <h2 className="">
                  <VscQuote className="text-primary-strong w-width-37 h-height-30" />
                </h2>
                <div className="text mt-5 clamp-3">{"\"" + item.review + "\""}</div>
                <div className="detail !mb-0">{item.name}</div>
                <div>
                  <div className="uppercase detail font-semibold">Client of company</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ClientReview;