// imports
import type { WebLinkPropsType } from "./webLink.types";
import { isPresent } from "../../../utils/util";
const LinkButton = ({
  url,
  label,
}: {
  url: string | undefined;
  label: string;
}) => {
  const handleClick = (url: string) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return url !== undefined && url !== null ? (
    <div
      className="linkButton cursor-pointer mr-3 text-amber-500 underline text-sm"
      onClick={() => handleClick(url)}
    >
      {label}{" "}
    </div>
  ) : null;
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
    <div className="webLink rounded-xl mb-8 flex">
      {isImgPresent ? (
        <div className="webLink__img w-1/6">
          <img
            className="h-full rounded-lg"
            width={200}
            src={img}
            alt={header}
          />
        </div>
      ) : null}

      <div
        className={`webLink__content p-4 ${isImgPresent ? "w-5/6" : "w-full"}`}
      >
        <div className="webLink__header__header text-2xl font-bold mb-2 text-neutral-50">
          {header}
        </div>

        <div className="webLink__subheader text-lg text-neutral-400">
          {subheader}
        </div>

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
          <LinkButton url={url?.github} label="GitHub" />

          <LinkButton url={url?.web} label="Web" />
        </div>
      </div>
    </div>
  );
}

export default WebLink;
