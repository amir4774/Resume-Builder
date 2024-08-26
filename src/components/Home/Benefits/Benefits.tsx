import Benefit from "./Benefit";
import { BenefitItemType } from "./Interfaces";

const benefitItems: BenefitItemType[] = [
  {
    title: "Easy to use",
    text: "The process of writing a resume is substantially sped up and simplified by using our resume builder.",
    image: "/benefit1.png",
  },
  {
    title: "Secure",
    text: "Secure We respect your privacy & give you control over your content and your data with us.",
    image: "/benefit2.png",
  },
  {
    title: "Cool Templates",
    text: "Our template designs help your resume standout in a pool of others.",
    image: "/benefit3.png",
  },
  {
    title: "Intelligent Design",
    text: "With us, you won't have to bother about the minute details of resume development, such as font choice, layout, etc.",
    image: "/benefit4.png",
  },
  {
    title: "HR-Approved & ATS-Friendly",
    text: "The core design of our resume templates are HR-Approved & accepted by leading organizations.",
    image: "/benefit5.png",
  },
  {
    title: "No Hidden Charges",
    text: "We’ve got a free version and our premium pricing is clear. We notify you about any new changes in good time.",
    image: "/benefit6.png",
  },
];

const Benefits = () => {
  return (
    <section className="my-32">
      <div className="text-center my-10">
        <h2 className="title">Benefits Of Using Our Product</h2>
        <p className="text-primary text-xl font-semibold mt-6">
          Why Choose Us?
        </p>
      </div>

      <div className="container mx-auto md:w-[80%]">
        <div className="grid grid-cols-1 gap-20 gap-x-28 xl:grid-cols-3 md:grid-cols-2">
          {benefitItems.map((item, index) => (
            <Benefit key={item.title} benefitItem={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
