import Image from "next/image";

const Landing = () => {
  return (
    <section>
      <div className="container mb-8 flex flex-col justify-around items-center md:flex-row">
        <div>
          <h1 className="text-4xl font-bold md:text-5xl">
            Create a <span className="text-primary">resume</span> that <br />
            secures your <span className="text-primary">dream job</span>
          </h1>

          <p className="my-10">
            Build a resume thats piques the interest of recruiters and <br />
            gets you hired. It’s fast and easy to use.
          </p>

          <div className="text-center mb-10 md:mb-0">
            <button className="btn btn-primary text-xl px-20">
              Try for free
            </button>
          </div>
        </div>

        <div>
          <Image
            src="/LandingImage.png"
            priority
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
