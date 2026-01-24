// imports
import { Tabs } from "antd";
import type { PesTabType } from "./pesTab";
import Experience from "../tabs/experience/index";
import Projects from "../tabs/projects";
import Skills from "../tabs/skills";

const PesTabView = ({ tabs }: { tabs: PesTabType[] }) => {
  return (
    <div className="tabs">
      <Tabs defaultActiveKey="projects" centered items={tabs} />
    </div>
  );
};

const PesTab = () => {
  const tabInfo: PesTabType[] = [
    {
      label: "Projects",
      key: "projects",
      children: <Projects />,
    },
    {
      label: "Experience",
      key: "experience",
      children: <Experience />,
    },
    {
      label: "Skills",
      key: "skills",
      children: <Skills />,
    },
  ];

  return <PesTabView tabs={tabInfo} />;
};

export default PesTab;
