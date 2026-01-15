import type { IconType } from "react-icons";

export type NavbarButtonType = {
  label: string;
  sectionRef: React.RefObject<HTMLDivElement>;
  icon: IconType;
};

export type NavbarLink = {
  label: string;
  sectionId: SectionId;
  icon: IconType;
};

export type NavbarPropsType = {
  sections: Record<SectionId, React.RefObject<HTMLDivElement>>;
};

export type SectionId =
  | "header"
  | "projects"
  | "skills"
  | "writings"
  | "experience";

export type SectionsMap = Record<SectionId, React.RefObject<HTMLDivElement>>;
