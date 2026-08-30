// imports
import { lazy, Suspense } from "react";
import Avatar from "../avatar";
import Cta from "../cta";
import Footer from "../footer";
import HeaderDescription from "../headerDescription";
import LanguageStack from "../languageStack";
import PesTab from "../pesTab";
import Socials from "../socials";
import { Skeleton } from "antd";

// map component lazy import
const Map = lazy(() => import("../map"));

const Layout = () => {
  return (
    <div className="layout min-h-screen flex justify-center p-2 md:p-5">
      <div className="layout__content w-full md:w-3/5 lg:w-6/12 flex flex-col items-center my-20">
        <header className="layout__content__header w-5/6">
          <div className="layout__content__header__map w-full relative z-0">
            <Suspense fallback={<Skeleton />}>
              <Map />
            </Suspense>
          </div>

          <div className="layout__content__header__avatar relative z-10 -mt-22 md:-mt-28 mb-4">
            <Avatar />
          </div>

          <div className="layout__content__header__social my-6">
            <Socials />
          </div>

          <div className="layout__content__header__description flex items-center justify-center">
            <HeaderDescription />
          </div>
        </header>

        <main className="w-full flex flex-col items-center">
          <div className="layout__content__languageStack my-12">
            <LanguageStack />
          </div>

          <div className="layout__content__pesTab w-full md:w-4/6 mb-5">
            <PesTab />
          </div>

          <div className="layout__content__cta mt-10 w-full md:w-5/6 shadow-1 bg-neutral-50 p-4 rounded-xl">
            <Cta />
          </div>
        </main>

        <footer className="layout__content__footer mt-20">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
