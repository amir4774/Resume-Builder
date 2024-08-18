import Image from "next/image";

const SnapshotTitle = () => {
  return (
    <div className="snapshot-text">
      <h2 className="text-2xl font-bold md:text-3xl py-10">
        Snapshot of our simple-to-use editor
      </h2>
      <div>
        <Image
          src="/snapshot-resume.png"
          alt="snapshot"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default SnapshotTitle;
