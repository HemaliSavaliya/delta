import React, { useState } from 'react';
import FancyBoxItem from './FancyBoxItem';
import { fancyBoxItems } from '../../common/Data/CarouselItem';

const defaultImage = require("../../Assets/img/home-interior-design-services.jpg");

const FancyBoxContainer = () => {
  const [hoveredImage, setHoveredImage] = useState(defaultImage);

  const handleHover = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(defaultImage);
  };

  return (
    <section className={`cover1-background`} style={{ backgroundImage: `url(${hoveredImage})` }}>
      <div className="px-0">
        <div className="fancy-text-box-05 gx-0 px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {fancyBoxItems.map((item, index) => (
            <div className="justify-center" style={{ opacity: 1 }} key={index}>
              <FancyBoxItem
                image={item.image}
                title={item.title}
                description={item.description}
                handleHover={handleHover}
                handleMouseLeave={handleMouseLeave}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FancyBoxContainer;