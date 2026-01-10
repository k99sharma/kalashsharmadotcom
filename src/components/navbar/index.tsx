// imports
import type { IconType } from "react-icons";
import type { NavbarButtonType } from "./navbar.types";
import { CiHome, CiFolderOn, CiReceipt, CiEdit, CiSun } from "react-icons/ci";

const NavbarButton = ({ label, sectionId, icon }: NavbarButtonType) => {
  const Icon: IconType = icon;

  return (
    <div className="navbarButton flex items-center justify-center mx-3">
      <button
        className="cursor-pointer relative group"
        aria-label={`${label} navbar button`}
      >
        <Icon color="white" size={20} />
      </button>
    </div>
  );
};

function Navbar() {
  // navbar links
  const navbarLinkList: NavbarButtonType[] = [
    {
      label: "Home",
      sectionId: "Home",
      icon: CiHome,
    },
    {
      label: "Projects",
      sectionId: "Projects",
      icon: CiFolderOn,
    },
    {
      label: "Experience",
      sectionId: "Experience",
      icon: CiReceipt,
    },
    {
      label: "Tools",
      sectionId: "Tools",
      icon: CiSun,
    },
    {
      label: "Thoughts",
      sectionId: "Thoughts",
      icon: CiEdit,
    },
  ];

  return (
    <div className="navbar flex items-center justify-center bg-neutral-800 px-6 py-4 rounded-2xl">
      {navbarLinkList.map((link) => (
        <NavbarButton
          label={link.label}
          sectionId={link.sectionId}
          icon={link.icon}
        />
      ))}
    </div>
  );
}

export default Navbar;
