// imports
import { Button } from "antd";
import type { IconType } from "react-icons";

const LinkButton = ({
  label,
  url,
  icon,
  isGitHub,
}: {
  label: string;
  url: string;
  icon: IconType;
  isGitHub: boolean;
}) => {
  const Icon: IconType = icon;

  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return isGitHub ? (
    <Button
      size="small"
      variant={"solid"}
      color={"default"}
      onClick={handleClick}
      icon={<Icon />}
      aria-label={label}
    >
      {label}
    </Button>
  ) : (
    <Button
      size="small"
      onClick={handleClick}
      icon={<Icon />}
      aria-label={label}
    >
      {label}
    </Button>
  );
};

export default LinkButton;
