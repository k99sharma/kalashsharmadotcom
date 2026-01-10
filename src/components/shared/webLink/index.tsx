// imports
import { CiMaximize1 } from "react-icons/ci";
import type { WebLinkPropsType } from "./webLink.types";
import { isPresent } from "../../../utils/util";

function WebLink({ header, subheader, url, img }: WebLinkPropsType) {
  const isImgPresent = isPresent(img);

  const handleClick = (url: string) => {
    if (url !== undefined && url !== "" && url !== null)
      window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={() => handleClick(url.web)}
      className="webLink hover:bg-neutral-200 rounded-xl mb-8 cursor-pointer flex"
    >
      {isImgPresent ? (
        <div className="webLink__img w-1/6">
          <img className="h-full" width={200} src={img} alt={header} />
        </div>
      ) : null}

      <div
        className={`webLink__content p-4 ${isImgPresent ? "w-5/6" : "w-full"}`}
      >
        <div className="webLink__header flex justify-between">
          <div className="webLink__header__heading text-2xl mb-2 font-bold">
            {header}
          </div>

          <div className="webLink__header__arrow">
            <CiMaximize1 />
          </div>
        </div>

        <div className="webLink__subheader text-lg">{subheader}</div>
      </div>
    </div>
  );
}

export default WebLink;
