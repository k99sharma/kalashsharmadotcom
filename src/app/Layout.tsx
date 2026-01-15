// imports
import { useRef } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Cta from "../components/sections/cta";
import Experience from "../components/sections/experience";
import Header from "../components/sections/header";
import Illustration from "../components/sections/illustration";
import Projects from "../components/sections/projects";
import Writings from "../components/sections/writings";
import type { SectionsMap } from "../components/navbar/navbar.types";

function Layout() {
  // refs for each section in page
  const sections: SectionsMap = {
    header: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    writings: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
  };

  return (
    <div className="layout min-h-screen poppins-regular bg-linear-to-r from-neutral-950 to-zinc-950">
      <div className="layout__navbar flex items-center justify-center py-5 mb-8">
        <Navbar sections={sections} />
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row w-full md:w-10/12">
          <div className="layout__illustration md:w-5/12">
            <Illustration />
          </div>

          <div className="layout__content md:w-7/12 overflow-y-auto">
            <section
              ref={sections.header}
              className="layout__content__header mb-5"
            >
              <Header />
            </section>

            <section
              ref={sections.projects}
              className="layout__content__projects mb-5"
            >
              <Projects />
            </section>

            <section
              ref={sections.experience}
              className="layout__content__experience mb-5"
            >
              <Experience />
            </section>

            <section
              ref={sections.writings}
              className="layout__content__writings mb-5"
            >
              <Writings />
            </section>

            <div className="layout__content__cta mb-5">
              <Cta />
            </div>
          </div>
        </div>
      </div>

      <div className="layout__footer flex items-center justify-center py-5">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
