import Image from "next/image";
import { BenefitType } from "./Interfaces";

const Benefit = ({ benefitItem, index }: BenefitType) => {
  return (
    <div
      className={`flex items-center space-x-6 space-y-4 ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      } md:flex-row`}
    >
      <div>
        <Image src={benefitItem.image} width={400} height={400} alt="" />
      </div>
      <div className="text-center">
        <h3 className="font-bold text-3xl mb-3">{benefitItem.title}</h3>
        <p>{benefitItem.text}</p>
      </div>
    </div>
  );
};

export default Benefit;
