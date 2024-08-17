import { SnapshotStatsTypes } from "./Interfaces";

const SnapshotStats = ({ title, text }: SnapshotStatsTypes) => {
  return (
    <>
      <h5 className="text-4xl font-bold mb-[-7px]">{title}</h5>
      <p>{text}</p>
    </>
  );
};

export default SnapshotStats;
