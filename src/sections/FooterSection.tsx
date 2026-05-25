import Image from "next/image";
import { socialImgs } from "../constants";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="/">Visit my Blog</a>
        </div>

        <div className="socials">
          {socialImgs.map((img) => (
            <a
              href={img.url}
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
              key={img.url}
            >
              <Image
                src={img.imgPath}
                alt={img.name}
                width={20}
                height={20}
                className="brightness-0 invert"
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()} Ahmed | Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
