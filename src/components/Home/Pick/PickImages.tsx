import Image from "next/image";

const PickImages = () => {
  return (
    <div className="flex items-center justify-center space-x-5 pt-16 w-full">
      <Image src="/pick-tertiary-resume.png" alt="" width={150} height={150} />
      <Image src="/pick-primary-resume.png" alt="" width={250} height={250} />
      <Image src="/pick-secondary-resume.png" alt="" width={150} height={150} />
    </div>
  );
};

export default PickImages;
