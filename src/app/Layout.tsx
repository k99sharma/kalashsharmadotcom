// imports
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Header from "../components/sections/header";

function Layout() {
  return (
    <div className="layout h-dvh">
      <div className="layout__navbar flex items-center justify-center py-5 my-3">
        <Navbar />
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row w-full md:w-9/12">
          <div className="layout__illustration md:w-5/12">Illustration</div>

          <div className="layout__content md:w-7/12">
            <div className="layout__content__header mb-5">
              <Header />
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
