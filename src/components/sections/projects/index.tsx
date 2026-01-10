// imports
import CustomHeader from "../../shared/customHeader";
import WebLink from "../../shared/webLink";
import projects from "./projects.json";

function Projects() {
  return (
    <div className="projects p-3">
      <div className="projects__header mb-8 flex justify-center md:justify-start">
        <CustomHeader heading="Recent" subheading="Projects" />
      </div>

      <div className="projects__grid">
        {projects.data.map((project) => (
          <WebLink
            header={project.header}
            subheader={project.subheader}
            url={project.url}
            img={project.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
