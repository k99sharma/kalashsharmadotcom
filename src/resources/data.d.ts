export type DataType = {
  header: {
    description: {
      book: string;
      url: string;
    };
  };
  languageStack: LanguageType[];
  projects: ProjectType[];
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
