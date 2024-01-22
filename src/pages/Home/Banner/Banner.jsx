import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Banner = () => {
  const images = [
    "https://i.ibb.co/BN4zN51/r-architecture-2g-Dwl-Iim3-Uw-unsplash.jpg",
    "https://i.ibb.co/vx0R3f8/todd-kent-178j8t-Jr-Nlc-unsplash-1.jpg",
    "https://i.ibb.co/C60Fnx6/vu-anh-Ti-VPTYCG-3-E-unsplash.jpg",
  ];

  return (
    <section >
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {images.map((imageUrl, index) => (
          <SwiperSlide  key={index}>
            <img  className="lg:h-[650px]   w-full overflow-hidden" src={imageUrl} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
