import { TestimonialsBgImagePropsTypes } from "./Interfaces";

const TestimonialsBgImage = ({
  background,
  darkBackground,
}: TestimonialsBgImagePropsTypes) => {
  return (
    <div
      className={`${background} bg-center bg-cover bg-no-repeat size-full absolute -z-50 ${darkBackground}`}
    ></div>
  );
};

export default TestimonialsBgImage;
