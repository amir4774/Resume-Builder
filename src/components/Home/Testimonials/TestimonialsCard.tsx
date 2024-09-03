import Image from "next/image";
import { TestimonialsCardPropsType } from "./Interfaces";

const TestimonialsCard = ({
  name,
  position,
  text,
  profile,
}: TestimonialsCardPropsType) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-[500px] min-h-[230px] dark:bg-dark_bg">
      <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 md:justify-start">
        <div className="rounded-full size-24 relative">
          <Image src={profile} alt="Profile" fill sizes="(100vw, 100vh)" />
        </div>

        <div className="font-bold">
          <h6 className="text-2xl">{name}</h6>
          <p className="text-primary">{position}</p>
        </div>
      </div>
      <p className="p-5 text-center">
        <span className="font-bold text-3xl">“</span>
        {text}
        <span className="font-bold text-3xl">”</span>
      </p>
    </div>
  );
};

export default TestimonialsCard;
