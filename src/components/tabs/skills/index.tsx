// imports
import data from "../../../resources/data.json";
import type { SkillType } from "../../../resources/data";
import { Empty, Tooltip } from "antd";

const SkillBlock = ({
  label,
  skillMap,
}: {
  label: string;
  skillMap: Map<string, string>;
}) => {
  const url: string | undefined = skillMap.get(label.toLowerCase());

  return (
    <Tooltip title={label}>
      <div className="skillBlock bg-neutral-50 flex items-center justify-center p-3 rounded-lg shadow-1">
        <img
          className="h-10 w-10"
          src={url}
          alt={label}
          aria-label={label}
          loading="lazy"
        />
      </div>
    </Tooltip>
  );
};

const Skills = () => {
  const skills: string[] = data.skills;
  const availableSkills: SkillType[] = data.availableSkills;

  const getSkillIconMap = () => {
    const skillIconMap: Map<string, string> = new Map();

    // adding skills
    availableSkills.forEach((skillData: SkillType) => {
      skillIconMap.set(skillData.label.toLowerCase(), skillData.url);
    });

    return skillIconMap;
  };

  return skills !== undefined && skills.length > 0 ? (
    <div className="skills p-4 bg-neutral-200 rounded-lg grid grid-cols-4 gap-4 lg:grid-cols-5">
      {skills.map((skill: string) => (
        <SkillBlock key={skill} label={skill} skillMap={getSkillIconMap()} />
      ))}
    </div>
  ) : (
    <Empty />
  );
};

export default Skills;
