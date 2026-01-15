// imports
import type { IconType } from "react-icons";
import type {
  NavbarButtonType,
  NavbarLink,
  NavbarPropsType,
} from "./navbar.types";
import { CiHome, CiFolderOn, CiReceipt, CiEdit, CiSun } from "react-icons/ci";
import type { RefObject } from "react";

const NavbarButton = ({ label, sectionRef, icon }: NavbarButtonType) => {
  const Icon: IconType = icon;

  // scroll handler
  const handleScroll = (ref: RefObject<HTMLDivElement> | null) => {
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="navbarButton flex items-center justify-center mx-3">
      <button
        onClick={() => handleScroll(sectionRef)}
        className="cursor-pointer relative group"
        aria-label={`${label} navbar button`}
      >
        <Icon color="white" size={20} />
      </button>
    </div>
  );
};

function Navbar({ sections }: NavbarPropsType) {
  // navbar links
  const navbarLinkList: NavbarLink[] = [
    {
      label: "Header",
      sectionId: "header",
      icon: CiHome,
    },
    {
      label: "Projects",
      sectionId: "projects",
      icon: CiFolderOn,
    },
    {
      label: "Experience",
      sectionId: "experience",
      icon: CiReceipt,
    },
    {
      label: "Tools",
      sectionId: "skills",
      icon: CiSun,
    },
    {
      label: "Thoughts",
      sectionId: "writings",
      icon: CiEdit,
    },
  ];

  return (
    <div className="navbar flex items-center justify-center bg-neutral-900 px-6 py-4 rounded-2xl">
      {navbarLinkList.map((link: NavbarLink) => (
        <NavbarButton
          label={link.label}
          sectionRef={sections[link.sectionId]}
          icon={link.icon}
        />
      ))}
    </div>
  );
}

export default Navbar;
