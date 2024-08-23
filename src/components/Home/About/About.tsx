import Image from "next/image";
import DotImage from "./DotImage";

const About = () => {
  return (
    <section className="my-16">
      <h3 className="title text-center">About FutureResume</h3>

      <div className="w-[95%] xl:w-[75%] mx-auto mt-10">
        <div className="flex flex-col justify-center lg:items-center md:space-x-10 md:flex-row md:items-start">
          <div className="w-full flex justify-center items-center">
            <div className="relative -z-10">
              <Image
                src="/about.png"
                priority
                width={450}
                height={450}
                alt=""
              />
              <DotImage
                src="/aboutDots1.png"
                classes="-top-5 left-0 md:-left-8"
              />
              <DotImage
                src="/aboutDots2.png"
                classes="-bottom-5 right-0 md:-right-8"
              />
            </div>
          </div>

          <div className="mt-8 w-full md:mt-0">
            <p className="text-justify">
              Future Resume is a product of FutureLabs — a global innovation &
              digital skill learning center. Future Resume was born of the need
              to create a new way for job-seekers to connect with recruiters.
              Hence, our best hands got to work with one thing in mind: to help
              you find a great job faster. We went even further to ensure that
              our Template designs meet Industry Standards and accepted by
              leading HR departments. With us, you can spin out an impressive
              resume that makes a memorable first impression!
            </p>
            <div className="text-center md:text-start">
              <button className="btn btn-primary px-14 mt-10 md:px-10">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
