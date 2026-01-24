export type DataType = {
  header: {
    description: {
      book: string;
      url: string;
    };
  };
  languageStack: LanguageType[];
};

export type LanguageType = {
  label: string;
  icon: string;
};
