import SnapshotTitle from "./SnapshotTitle";
import SnapshotLi from "./SnapshotLi";
import SnapshotStats from "./SnapshotStats";
import { SnapshotLiTypes } from "./Interfaces";

const ulContent: SnapshotLiTypes[] = [
  { title: "Multi-theme & type face", text: "for personalization." },
  { title: "Placeholder resume content", text: "to guide your filling." },
  { title: "Multiple layouts & templates", text: "to choose from." },
];

const Snapshot = () => {
  return (
    <section className="mb-16">
      <div className="bg-snapshot bg-center bg-cover bg-no-repeat dark:bg-snapshot_dark">
        <div className="container flex flex-col items-center md:flex-row md:space-x-10 lg:space-x-0 lg:justify-around">
          <SnapshotTitle />

          <div>
            <p className="text-center my-8 md:text-start lg:mt-0">
              All the flexibility & intuition you need to build a resume{" "}
              <br className="md:hidden lg:inline" />
              that stands out
            </p>

            <ul className="snapshot-text text-primary space-y-4 mb-10">
              {ulContent.map((content) => (
                <SnapshotLi
                  key={content.title}
                  title={content.title}
                  text={content.text}
                />
              ))}
            </ul>

            <div className="snapshot-text">
              <button className="btn btn-primary px-10 mb-8">
                Create Resume
              </button>
            </div>

            <h6 className="text-xl mb-8">Our stats:</h6>

            <div className="flex justify-around items-center divide-x divide-black md:justify-start dark:divide-white">
              <div className="pr-6">
                <SnapshotStats title="200+" text="users" />
              </div>

              <div className="pl-6">
                <SnapshotStats
                  title="3 mins"
                  text="Average resume building time"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Snapshot;
