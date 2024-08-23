import About from "@/components/Home/About/About";
import Landing from "@/components/Home/Landing";
import Pick from "@/components/Home/Pick/Pick";
import Snapshot from "@/components/Home/Snapshot/Snapshot";
import Steps from "@/components/Home/Steps/Steps";

const Home = () => {
  return (
    <div>
      <Landing />
      <Steps />
      <Snapshot />
      <Pick />
      <About />
    </div>
  );
};

export default Home;
