// imports
import type { LanguageType } from "../../resources/data";
import data from "../../resources/data.json";

const LanguageTile = ({ label, icon }: LanguageType) => {
  return (
    <div className="languageTile mx-3 bg-neutral-50 px-4 py-2 rounded-2xl flex items-center shadow-1">
      <div className="languageTile__icon">
        <img
          className="h-4 w-4"
          src={icon}
          alt={`${label} icon`}
          aria-label={label}
        />
      </div>

      <div className="languageTile__label ml-3 text-xs text-neutral-500">
        {label}
      </div>
    </div>
  );
};

const LanguageStack = () => {
  const languages: LanguageType[] = data.languageStack;

  return (
    <div className="languageStack flex items-center justify-center">
      {languages.map((language: LanguageType) => (
        <LanguageTile key={language.label} {...language} />
      ))}
    </div>
  );
};

export default LanguageStack;
