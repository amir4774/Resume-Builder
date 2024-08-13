import Image from "next/image";
import { StepTypes } from "./Interfaces";

const Step = ({ image, title, text, alt, index }: StepTypes) => {
  return (
    <div
      className={`flex flex-col mb-4 justify-center items-center space-x-10 space-y-4 md:flex-row ${
        index % 2 === 0 ? "md:justify-end" : "md:justify-start"
      }`}
    >
      <div>
        <Image src={image} alt={alt} width={250} height={250} />
      </div>

      <div className="flex space-x-4 text-primary">
        <h3 className="text-5xl font-bold">{index}.</h3>
        <div>
          <p className="text-2xl font-bold">{title}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Step;
