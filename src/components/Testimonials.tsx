import testimonialsData from "../data/testimonials.json";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <div>
      <h2 className="c6cl6 cuad0 cfibj clt06">Our customers love us</h2>
      {/* Testimonials container */}
      <div className="c2i7x">
        {testimonialsData.testimonials.map((testimonial) => (
          <TestimonialItem
            key={testimonial.id}
            image={testimonial.image}
            quote={testimonial.quote}
            name={testimonial.name}
            title={testimonial.title}
            company={testimonial.company}
            companyUrl={testimonial.companyUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
