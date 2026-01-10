// imports

import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

function Layout() {
  return (
    <div className="layout h-dvh">
      <div className="layout__navbar flex items-center justify-center py-5">
        <Navbar />
      </div>

      <div className="md:flex md:w-full">
        <div className="layout__illustration md:w-4/12">Illustration</div>

        <div className="layout__content md:w-8/12">Content</div>
      </div>

      <div className="layout__footer flex items-center justify-center py-5">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
