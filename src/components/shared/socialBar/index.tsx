// imports
import type { IconType } from "react-icons";
import type { SocialType } from "./socialBar.types";
import { CiLinkedin, CiReceipt } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";

const SocialLink = ({ icon, url, size, whiteIcon }: SocialType) => {
  const Icon: IconType = icon;

  const handleClick = () => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <Icon
      onClick={() => handleClick()}
      className={`${
        size === "small" ? "h-5 w-5" : "h-7 w-7"
      } mx-3 cursor-pointer ${
        whiteIcon ? "text-neutral-50" : "text-neutral-900"
      }`}
    />
  );
};

function SocialBar({ size, whiteIcon }: { size: string; whiteIcon?: boolean }) {
  const socials: SocialType[] = [
    {
      label: "linkedin",
      icon: CiLinkedin,
      url: "",
    },
    {
      label: "github",
      icon: VscGithubAlt,
      url: "",
    },
    {
      label: "blog",
      icon: CiReceipt,
      url: "",
    },
  ];

  return (
    <div className="socialBar flex items-center justify-center">
      {socials.map((social) => (
        <SocialLink
          label={social.label}
          icon={social.icon}
          url={social.url}
          size={size === "large" ? "large" : "small"}
          whiteIcon={whiteIcon}
        />
      ))}
    </div>
  );
}

export default SocialBar;
