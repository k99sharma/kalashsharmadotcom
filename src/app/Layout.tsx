// imports
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Experience from "../components/sections/experience";
import Header from "../components/sections/header";
import Projects from "../components/sections/projects";
import Writings from "../components/sections/writings";

function Layout() {
  return (
    <div className="layout h-screen poppins-regular">
      <div className="layout__navbar flex items-center justify-center py-5 my-3">
        <Navbar />
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row w-full md:w-9/12">
          <div className="layout__illustration md:w-5/12">Illustration</div>

          <div className="layout__content md:w-7/12 overflow-y-auto">
            <div className="layout__content__header mb-5">
              <Header />
            </div>

            <div className="layout__content__projects mb-5">
              <Projects />
            </div>

            <div className="layout__content__experience mb-5">
              <Experience />
            </div>

            <div className="layout__content__writings mb-5">
              <Writings />
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
