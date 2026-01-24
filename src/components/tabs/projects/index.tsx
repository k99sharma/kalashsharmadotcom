// imports
import type { ProjectType } from "../../../resources/data";
import data from "../../../resources/data.json";
import LinkButton from "../../shared/LinkButton";
import { VscGithubAlt } from "react-icons/vsc";
import { PiEyesLight } from "react-icons/pi";
import { Flex, Tag } from "antd";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div className="projectCard shadow-1 bg-neutral-50 p-4 rounded-lg">
      <div className="projectCard__img mb-5">
        <img
          className="h-40 w-full rounded-lg"
          src={project.img}
          alt={`${project.title} image`}
          aria-label={`${project.title} image`}
        />
      </div>

      <div className="projectCard__title text-lg font-semibold">
        {project.title}
      </div>

      <div className="projectCard__subtitle text-sm">{project.subtitle}</div>

      <div className="projectCard__tech my-3">
        <Flex gap="small" align="center" wrap>
          {project.tech.map((tech) => (
            <div className="tag">
              <Tag variant="filled" color={"blue"} key={tech}>
                {tech}
              </Tag>
            </div>
          ))}
        </Flex>
      </div>

      <div className="projectCard__description text-neutral-600 mb-5">
        {project.description}
      </div>

      <div className="projectCard__url flex">
        <div className="projectCard__url__github">
          <LinkButton
            label={"GitHub"}
            url={project.url.github}
            icon={VscGithubAlt}
            isGitHub={true}
          />
        </div>

        <div className="projectCard__url__preview ml-3">
          <LinkButton
            label={"Preview"}
            url={project.url.preview}
            icon={PiEyesLight}
            isGitHub={false}
          />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: ProjectType[] = data.projects;

  return (
    <div className="projects py-2 px-4 bg-neutral-200 rounded-lg grid grid-cols-2 gap-5">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default Projects;
