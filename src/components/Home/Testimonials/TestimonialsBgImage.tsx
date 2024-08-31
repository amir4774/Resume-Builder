import { TestimonialsBgImagePropsTypes } from "./Interfaces";

const TestimonialsBgImage = ({
  background,
  darkBackground,
}: TestimonialsBgImagePropsTypes) => {
  return (
    <div
      className={`bg-${background} bg-center bg-cover bg-no-repeat size-full absolute -z-50 xl:bg-contain dark:bg-${darkBackground}`}
    ></div>
  );
};

export default TestimonialsBgImage;
