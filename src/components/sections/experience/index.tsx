import CustomHeader from "../../shared/customHeader";
import WebLink from "../../shared/webLink";
import experience from "./experience.json";

function Experience() {
  return (
    <div className="experience p-3">
      <div className="experience__header mb-8 flex justify-center md:justify-start">
        <CustomHeader heading="2.5 YEARS OF" subheading="EXPERIENCE" />
      </div>

      <div className="experience__grid">
        {experience.data.map((exp) => (
          <WebLink
            header={exp.header}
            subheader={exp.subheader}
            description={exp.description}
            period={exp.period}
            img={exp.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
