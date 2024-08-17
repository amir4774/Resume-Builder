import { FaCircle } from "react-icons/fa6";
import { SnapshotLiTypes } from "./Interfaces";

const SnapshotLi = ({ title, text }: SnapshotLiTypes) => {
  return (
    <li className="flex items-start justify-center space-x-2 md:justify-start">
      <div>
        <FaCircle className="text-sm mt-2" />
      </div>

      <div>
        <h6 className="text-xl font-bold">{title}</h6>
        <p className="text-xl">{text}</p>
      </div>
    </li>
  );
};

export default SnapshotLi;
