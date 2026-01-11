// imports
import CustomHeader from "../../shared/customHeader";
import type { MilestoneType } from "./header.types";
import milestones from "./milestones.json";

function Milestone({ label, milestone }: MilestoneType) {
  return (
    <div className="milestone">
      <div className="milestone__number mb-3 font-bold text-3xl lg:text-4xl text-neutral-50">
        {`+${milestone}`}
      </div>

      <div className="milestone__label text-xs md:text-sm font-semibold text-neutral-500">
        {label.toUpperCase()}
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header p-3">
      <div className="header__header mb-8 flex justify-center md:justify-start">
        <CustomHeader heading="Software" subheading="Engineer" />
      </div>

      <div className="header__subheader w-full lg:w-8/12 text-sm md:text-lg mb-4 md:mb-6 lg:mb-8 text-neutral-500 text-center md:text-left">
        Passionate about building intuitive and engaging user experiences, and
        growing my skills by turning ideas into well-crafted products.
      </div>

      <div className="header__milestones flex justify-center md:justify-start gap-4">
        {milestones.milestones.map((m) => (
          <div className="w-1/6 md:w-1/5 lg:w-1/6 p-2">
            <Milestone label={m.label} milestone={m.milestone} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
