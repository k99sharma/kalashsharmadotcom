// imports
import CustomHeader from "../../shared/customHeader";
import skillList from "./skills.json";
import type { Skill } from "./skills.types";

const SkillIcon = ({ label, imgUrl }: { label: string; imgUrl: string }) => {
  return (
    <div className="skillIcon m-3">
      <img className="h-20 w-20 rounded-md" src={imgUrl} alt={label} />
    </div>
  );
};

function Skills() {
  return (
    <div className="skills p-3">
      <div className="skills__header mb-8 flex justify-center md:justify-start">
        <CustomHeader heading="Tools" subheading="I Use" />
      </div>

      <div className="skills grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skillList.skills.map((skill: Skill) => (
          <SkillIcon label={skill.label} imgUrl={skill.imgUrl} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
