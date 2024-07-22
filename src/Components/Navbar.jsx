import React, { useEffect } from "react";

const Navbar = (props) => {
  useEffect(() => {
    const headerText = document.querySelectorAll('.animated-text');
    headerText.forEach(text => {
      text.classList.remove('opacity-0', '-translate-x-full');
      text.classList.add('opacity-100', 'translate-x-0');
    });

    const handleScroll = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 50) {
        header.classList.add("bg-gray-800");
        header.classList.remove("bg-transparent");
      } else {
        header.classList.add("bg-transparent");
        header.classList.remove("bg-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className="bg-transparent transition-colors duration-500 ease-in-out py-4 uppercase fixed top-0 z-50 w-full pl-5 pr-10 md:pl-20 md:pr-20">
      <div className="container flex items-center justify-between">
        <a href="./" className="animated-text pl-4 md:pl-6 text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-gega-grey transition duration-1000 ease-in-out opacity-0 -translate-x-full">
          SEFA
        </a>

        <div className="block md:hidden">
          <div className="space-y-1 cursor-pointer">
            <div className="animated-text bg-gega-grey w-8 h-1 rounded-full transition duration-1000 ease-in-out opacity-0 -translate-x-full"></div>
            <div className="animated-text bg-gega-grey w-8 h-1 rounded-full transition duration-1000 ease-in-out opacity-0 -translate-x-full"></div>
            <div className="animated-text bg-gega-grey w-8 h-1 rounded-full transition duration-1000 ease-in-out opacity-0 -translate-x-full"></div>
          </div>
        </div>

        <nav className="hidden md:flex">
          <div className="container-items text-gray-100 justify-between space-x-12 pr-8">
            <a href="." className="animated-text hover:text-gega-red transition duration-1000 ease-in-out opacity-0 -translate-x-full">anasayfa</a>
            <a href="." className="animated-text hover:text-gega-red transition duration-1000 ease-in-out opacity-0 -translate-x-full">hakkımda</a>
            <a href="." className="animated-text hover:text-gega-red transition duration-1000 ease-in-out opacity-0 -translate-x-full">projelerim</a>
            <a href="." className="animated-text hover:text-gega-red transition duration-1000 ease-in-out opacity-0 -translate-x-full">iletişim</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
