// imports
import data from "../../resources/data.json";

import type { IconType } from "react-icons";
import { CiLinkedin, CiMail } from "react-icons/ci";
import type { SocialType } from "./socials";
import { VscCodeOss, VscGithubAlt } from "react-icons/vsc";
import { Tooltip } from "antd";

const SocialTile = ({ label, url, icon }: SocialType) => {
  const IconC: IconType = icon;

  return (
    <div className="mx-3">
      <Tooltip title={label}>
        {label === "Email" ? (
          <a href={url} aria-label={label}>
            <IconC className="h-5 w-5" />
          </a>
        ) : (
          <a href={url} target="_blank" aria-label={label}>
            <IconC className="h-5 w-5" />
          </a>
        )}
      </Tooltip>
    </div>
  );
};

const Socials = () => {
  const socialLinks = data.social;

  const socials: SocialType[] = [
    {
      label: "LinkedIn",
      url: socialLinks.linkedin,
      icon: CiLinkedin,
    },
    {
      label: "GitHub",
      url: socialLinks.github,
      icon: VscGithubAlt,
    },
    {
      label: "Email",
      url: socialLinks.mail,
      icon: CiMail,
    },
    {
      label: "Blog",
      url: socialLinks.blog,
      icon: VscCodeOss,
    },
  ];

  return (
    <div className="socials flex items-center justify-center">
      {socials.map((social) => (
        <SocialTile key={social.label} {...social} />
      ))}
    </div>
  );
};

export default Socials;
