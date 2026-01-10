// imports
import { CiGlobe, CiMaximize1 } from "react-icons/ci";
import type { WebLinkPropsType } from "./webLink.types";
import { isPresent } from "../../../utils/util";
import type { IconType } from "react-icons";
import { VscGithubAlt } from "react-icons/vsc";

const LinkButton = ({
  url,
  icon,
}: {
  url: string | undefined;
  icon: IconType;
}) => {
  const Icon: IconType = icon;

  const handleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="linkButton cursor-pointer mr-3">
      {url !== undefined && url !== null ? (
        <div onClick={() => handleClick(url)}>
          <Icon size={20} />
        </div>
      ) : null}
    </div>
  );
};

function WebLink({
  header,
  subheader,
  url,
  img,
  description,
  period,
}: WebLinkPropsType) {
  const isImgPresent: boolean = isPresent(img);
  const isDescriptionPresent: boolean = isPresent(description);
  const isPeriodPresent: boolean = isPresent(period);

  return (
    <div className="webLink hover:bg-neutral-200 rounded-xl mb-8 flex">
      {isImgPresent ? (
        <div className="webLink__img w-1/6">
          <img className="h-full" width={200} src={img} alt={header} />
        </div>
      ) : null}

      <div
        className={`webLink__content p-4 ${isImgPresent ? "w-5/6" : "w-full"}`}
      >
        <div className="webLink__header__header text-2xl font-bold mb-2">
          {header}
        </div>

        <div className="webLink__subheader text-lg">{subheader}</div>

        {isDescriptionPresent ? (
          <div className="webLink__description text-lg text-neutral-600 mb-2">
            {description}
          </div>
        ) : null}

        {isPeriodPresent ? (
          <div className="webLink__period text-sm text-neutral-600 mt-5">
            {period}
          </div>
        ) : null}

        <div className="webLink__links mt-8">
          <LinkButton url={url?.github} icon={VscGithubAlt} />

          <LinkButton url={url?.web} icon={CiGlobe} />
        </div>
      </div>
    </div>
  );
}

export default WebLink;
