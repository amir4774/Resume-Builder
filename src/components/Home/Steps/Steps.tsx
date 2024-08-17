import Step from "./Step";

const steps = [
  {
    image: "/steps1.png",
    alt: "step 1",
    title: "Pick a Template",
    text: "Fill in the blanks and see results in real-time.",
  },
  {
    image: "/steps2.png",
    alt: "step 2",
    title: "Customize Your Layout",
    text: "Give your document a professional and elegant look.",
  },
  {
    image: "/steps3.png",
    alt: "step 3",
    title: "Hit 'Download!'",
    text: "Download your resume, apply, get more interviews.",
  },
];

const Steps = () => {
  return (
    <section className="my-16">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        Build your <span className="text-primary">resume</span> in 3 steps
      </h2>

      <div className="container mx-auto mt-8 md:w-4/5">
        {steps.map((step, index) => (
          <Step
            key={step.title}
            index={index + 1}
            image={step.image}
            alt={step.alt}
            title={step.title}
            text={step.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Steps;
