// imports
import { Empty } from "antd";
import type { ExperienceType } from "../../../resources/data";
import data from "../../../resources/data.json";

const ExperienceCard = ({ exp }: { exp: ExperienceType }) => {
  return (
    <div className="experienceCard shadow-1 bg-neutral-50 p-4 rounded-lg">
      <div className="experienceCard__header flex items-center mb-5">
        <div className="experienceCard__header__logo rounded-md p-1 shadow-1">
          <img
            className="h-8 w-8"
            src={exp.logo}
            alt={exp.company}
            aria-label={exp.company}
          />
        </div>

        <div className="experienceCard__header__text ml-4">
          <div className="experienceCard__header__text__title font-semibold text-md">
            {exp.designation}
          </div>

          <div className="experienceCard__header__text__title text-xs text-neutral-500">{`${exp.company} (${exp.timeline})`}</div>
        </div>
      </div>

      <div className="experienceCard__description text-sm text-neutral-600">
        {exp.description.map((d, idx) => (
          <p key={idx}>• {d}</p>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences: ExperienceType[] = data.experience;

  return experiences !== undefined && experiences.length > 0 ? (
    <div className="experience p-4 bg-neutral-200 rounded-lg grid grid-cols-1 gap-4">
      {experiences.map((exp: ExperienceType) => (
        <ExperienceCard exp={exp} />
      ))}
    </div>
  ) : (
    <Empty />
  );
};

export default Experience;
