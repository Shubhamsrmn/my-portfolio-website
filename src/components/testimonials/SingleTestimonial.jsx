import React from "react";
import "./testimonial.scss";
const SingleTestimonial = (props) => {
  return (
    <div className="testimonial">
      <div className="client-avatar">
        <img src={props.data.img} alt="" />
      </div>
      <h5 className="client-name">{props.data.name}</h5>
      <small className="client-review">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
        modi cumque reiciendis quae sapiente, delectus voluptatum veniam labore
        ad nemo. Laudantium suscipit, culpa quis nisi aliquid obcaecati sed esse
        corrupti!
      </small>
    </div>
  );
};

export default SingleTestimonial;
