import Image from "next/image";
import { logoIconsList } from "../constants";

type Props = {
  imgPath: string;
  width: number;
};

const LogoIcon = ({ imgPath, width }: Props) => {
  return (
    <div className="flex-none flex-center marquee-item">
      {/* Next.js Image requires width and height. Adjust these to match your actual logo sizes */}
      <Image src={imgPath} alt="Logo" width={width} height={64} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {/* First loop */}
          {logoIconsList.map((icon) => (
            <LogoIcon key={`${icon.imgPath}-original`} imgPath={icon.imgPath} width={icon.width} />
          ))}

          {/* Second loop - unique keys to prevent React warnings */}
          {logoIconsList.map((icon) => (
            <LogoIcon
              key={`${icon.imgPath}-duplicate`}
              imgPath={icon.imgPath}
              width={icon.width}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
