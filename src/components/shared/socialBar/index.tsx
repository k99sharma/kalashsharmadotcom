// imports
import type { IconType } from "react-icons";
import type { SocialType } from "./socialBar.types";
import { CiLinkedin, CiReceipt } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { SiLeetcode } from "react-icons/si";
import { LiaHackerrank } from "react-icons/lia";

const SocialLink = ({ icon, url, size, whiteIcon }: SocialType) => {
  const Icon: IconType = icon;

  const handleClick = () => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <Icon
      onClick={() => handleClick()}
      className={`${
        size === "small" ? "h-5 w-5" : "h-6 w-6"
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
      url: "https://www.linkedin.com/in/kalashsharma99/",
    },
    {
      label: "github",
      icon: VscGithubAlt,
      url: "https://github.com/k99sharma",
    },
    {
      label: "blog",
      icon: CiReceipt,
      url: "https://kalashsharma.hashnode.dev/",
    },
    {
      label: "linkedin",
      icon: SiLeetcode,
      url: "https://leetcode.com/u/kalashsharma99/",
    },
    {
      label: "HackerRank",
      icon: LiaHackerrank,
      url: "https://www.hackerrank.com/profile/kalash_strt",
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
