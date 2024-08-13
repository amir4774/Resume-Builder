import Step from "./Step";

const images = ["/steps1.png", "/steps2.png", "/steps3.png"];
const alts = ["step 1", "step 2", "step 3"];
const titles = ["Pick a Template", "Customize Your Layout", "Hit 'Download!'"];
const texts = [
  "Fill in the blanks and see results in real-time.",
  "Give your document a professional and elegant look.",
  "Download your resume, apply, get more interviews.",
];

const Steps = () => {
  return (
    <section className="my-16">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        Build your <span className="text-primary">resume</span> in 3 steps
      </h2>

      <div className="container mx-auto mt-8 md:w-4/5">
        {titles.map((title, index) => (
          <Step
            key={title}
            index={index + 1}
            image={images[index]}
            alt={alts[index]}
            title={title}
            text={texts[index]}
          />
        ))}
      </div>
    </section>
  );
};

export default Steps;
