import Navbar from "@/components/Navbar/Navbar";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

const Home = () => {
  return (
    <div className={quicksand.className}>
      <Navbar />
    </div>
  );
};

export default Home;
