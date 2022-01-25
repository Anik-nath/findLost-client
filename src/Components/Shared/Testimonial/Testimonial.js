import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Testimonial.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Testimonial = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("./fakeReview.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper py-5"
      >
        {review.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="card border-0 bg-transparent text-light">
              <div className="card-body mx-auto">
                {/* <div className="d-flex justify-content-center py-3">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src={quate}
                    alt=""
                  />
                </div> */}
                <div className="d-flex justify-content-center py-3">
                  <img style={{ width: "70px", height: "70px" }}
                    src={review.image}
                    alt=""
                    className="rounded-circle"
                  />
                </div>
                <p>{review.details}"</p>
                <h6>-{review.name}</h6>
                <p>{review.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonial;
