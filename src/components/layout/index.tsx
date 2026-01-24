// imports
import Avatar from "../avatar";

const Layout = () => {
  return (
    <div className="layout min-h-screen flex justify-center">
      <div className="layout__content bg-amber-500 w-full md:w-3/5 lg:w-6/12 flex flex-col items-center">
        <div className="layout__content__header">
          <div className="layout__content__header__map"></div>
          <div className="layout__content__header__avatar">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
