// imports
import { Tabs } from "antd";
import type { PesTabType } from "./pesTab";
import Experience from "../tabs/experience/index";
import Projects from "../tabs/projects";
import Skills from "../tabs/skills";
import AIMvps from "../tabs/aimvps";

const PesTabView = ({ tabs }: { tabs: PesTabType[] }) => {
  return (
    <div className="tabs">
      <Tabs defaultActiveKey="skills" centered items={tabs} />
    </div>
  );
};

const PesTab = () => {
  const tabInfo: PesTabType[] = [
    {
      label: "Skills",
      key: "skills",
      children: <Skills />,
    },
    {
      label: "Products",
      key: "products",
      children: <Projects />,
    },
    {
      label: "AI Builds",
      key: "aibuilds",
      children: <AIMvps />,
    },
    {
      label: "Experience",
      key: "experience",
      children: <Experience />,
    },
  ];

  return <PesTabView tabs={tabInfo} />;
};

export default PesTab;
