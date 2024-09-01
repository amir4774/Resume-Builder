import TestimonialsBgImage from "./TestimonialsBgImage";
import TestimonialsCard from "./TestimonialsCard";

const testimonialsBgImages = [
  {
    background: "bg-testimonials_bg_1",
    darkBackground: "dark:bg-testimonials_bg_dark_1",
  },
  {
    background: "bg-testimonials_bg_2",
    darkBackground: "dark:bg-testimonials_bg_dark_2",
  },
  {
    background: "bg-testimonials_bg_3",
    darkBackground: "dark:bg-testimonials_bg_dark_3",
  },
];

const Testimonials = () => {
  return (
    <section>
      <div className="relative -z-50">
        {testimonialsBgImages.map((bg) => (
          <TestimonialsBgImage
            key={bg.background}
            background={bg.background}
            darkBackground={bg.darkBackground}
          />
        ))}

        <div className="w-[85%] mx-auto pt-20 lg:pt-[14rem]">
          <div className="flex flex-col items-center justify-center space-x-0 space-y-10 md:justify-start md:flex-row md:space-x-10 xl:space-x-40">
            <div>
              <h2 className="title text-center sm:text-start">
                Testimonials From <br className="hidden lg:inline" /> Our
                Previous Users
              </h2>
              <p className="text-lg text-primary text-center mt-3 md:text-start">
                What People Say About Us
              </p>
            </div>

            <TestimonialsCard
              name="Peter Ime"
              profile="/user-bg.png"
              position="Web Developer"
              text="We move with make a Creative Strategy for help your goal, we help to improve your income by a services."
            />
          </div>

          <div className="mt-10 pb-10 flex flex-col items-center justify-between space-y-10 md:space-x-10 md:flex-row md:items-stretch md:space-y-0 md:mt-36">
            <TestimonialsCard
              name="Abraham udoinyang"
              profile="/user-bg.png"
              position="UI/UX Designer"
              text="This is the best resume builder that I have come across so far, getting across, it is user friendly and also HR approved, I got my first job using this template."
            />
            <TestimonialsCard
              name="Nsisong Akpakpan"
              profile="/user-bg.png"
              position="Web Developer"
              text="The experience is just smooth and adaptable, I was called up for an interview I applied with using future resume and my resume was naturally commended. Thanks Future Resume."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
