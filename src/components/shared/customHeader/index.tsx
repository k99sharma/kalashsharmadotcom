import type { CustomHeaderPropsType } from "./header.types";

function CustomHeader({ heading, subheading }: CustomHeaderPropsType) {
  return (
    <div className="header">
      <div className="header__heading text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-50">
        {heading.toUpperCase()}
      </div>

      <div className="header__subheading text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-700">
        {subheading.toUpperCase()}
      </div>
    </div>
  );
}

export default CustomHeader;
