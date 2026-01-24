// imports
import Avatar from "../avatar";
import HeaderDescription from "../headerDescription";
import Map from "../map";

const Layout = () => {
  return (
    <div className="layout min-h-screen flex justify-center select-none">
      <div className="layout__content w-full md:w-3/5 lg:w-6/12 flex flex-col items-center">
        <div className="layout__content__header w-5/6">
          <div className="layout__content__header__map w-full relative z-0">
            <Map />
          </div>

          <div className="layout__content__header__avatar relative z-10 -mt-22 md:-mt-28 mb-4">
            <Avatar />
          </div>

          <div className="layout__content__header__description flex items-center justify-center">
            <HeaderDescription />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
