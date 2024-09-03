import PickImages from "./PickImages";

const Pick = () => {
  return (
    <section className="my-20">
      <div className="w-[95%] mx-auto flex justify-around flex-col lg:flex-row lg:space-x-20 xl:w-[70%]">
        <div className="pick-text md:text-start w-full">
          <h4 className="title">
            You can always pick <br className="hidden xl:inline" /> any
            template you like
          </h4>

          <h6 className="text-primary text-xl font-semibold mt-4 mb-10">
            Our Services
          </h6>

          <p className="text-justify">
            Choose from one of our expertly prepared resume types below, by
            using pre-established parts that have been endorsed by recruiters
            internationally, you can begin creating your resume in under 5
            seconds, additionally, you can edit to fit your preferences and
            personality before clicking &quot;Download&quot;. Even if you have never
            created a resume before, it is that SIMPLE to use!
          </p>
        </div>

        <PickImages />
      </div>
    </section>
  );
};

export default Pick;
