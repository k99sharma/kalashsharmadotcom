export type DataType = {
  header: {
    description: {
      book: string;
      url: string;
    };
  };
  languageStack: LanguageType[];
  projects: ProjectType[];
  skills: string[];
  availableSkills: SkillType[];
};

export type LanguageType = {
  label: string;
  icon: string;
};

export type ProjectType = {
  title: string;
  subtitle: string;
  img: string;
  url: {
    github: string;
    preview: string;
  };
  tech: string[];
  description: string;
};

export type ExperienceType = {
  logo: string;
  designation: string;
  timeline: string;
  company: string;
  description: string[];
};

export type SkillType = {
  label: string;
  url: string;
};
