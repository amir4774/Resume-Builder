import Image from "next/image";

const DotImage = ({ src, classes }: { src: string; classes: string }) => {
  return (
    <Image
      src={src}
      width={100}
      height={100}
      alt=""
      className={`absolute -z-50 ${classes}`}
    />
  );
};

export default DotImage;
