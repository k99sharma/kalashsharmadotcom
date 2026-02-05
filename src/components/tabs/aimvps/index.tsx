import { Empty, Flex, Tag } from "antd";
import type { ProjectType } from "../../../resources/data";
import data from "../../../resources/data.json";
import LinkButton from "../../shared/LinkButton";
import { VscGithubAlt } from "react-icons/vsc";
import { PiEyesLight } from "react-icons/pi";

const Card = ({ project }: { project: ProjectType }) => {
  return (
    <div className="card shadow-1 bg-neutral-50 p-4 rounded-lg">
      <div className="card__img mb-5">
        <img
          className="h-40 w-full rounded-lg"
          src={project.img}
          alt={`${project.title} image`}
          aria-label={`${project.title} image`}
        />
      </div>

      <div className="card__title text-lg font-semibold">{project.title}</div>

      <div className="card__subtitle text-sm">{project.subtitle}</div>

      <div className="card__tech my-3">
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

      <div className="card__description text-neutral-700 mb-5">
        {project.description}
      </div>

      <div className="card__url flex">
        <div className="card__url__github">
          <LinkButton
            label={"GitHub"}
            url={project.url.github}
            icon={VscGithubAlt}
            isGitHub={true}
          />
        </div>

        <div className="card__url__preview ml-3">
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

const AIMvps = () => {
  const projects: ProjectType[] = data.aimvps;

  return projects !== undefined && projects.length > 0 ? (
    <div className="aimvps p-4 bg-neutral-200 rounded-lg grid grid-cols-1 gap-2">
      {projects.map((project) => (
        <Card key={project.title} project={project} />
      ))}
    </div>
  ) : (
    <Empty />
  );
};

export default AIMvps;
