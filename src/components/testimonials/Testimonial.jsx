import React from "react";
import SingleTestimonial from "./SingleTestimonial";
import "./testimonial.scss";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonial = () => {
  const reviews = [
    { id: 1, name: "jonh smith", img: avatar1 },
    { id: 2, name: "jonh smithfdfg", img: avatar2 },
    { id: 3, name: "jonh smithfd", img: avatar3 },
    { id: 4, name: "jonh smi", img: avatar4 },
  ];
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="container testimonials-container"
      >
        {reviews.map((review) => {
          return (
            <SwiperSlide key={review.id}>
              <SingleTestimonial data={review} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
