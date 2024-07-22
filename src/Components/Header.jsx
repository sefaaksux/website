import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const headerText = document.querySelectorAll('.header-text');
    headerText.forEach(text => {
      text.classList.remove('opacity-0', '-translate-x-full');
      text.classList.add('opacity-100', 'translate-x-0');
    });
  }, []);

  return (
    <header className="h-96 md:h-96 lg:h-128 relative group">
      <img src="/Banner.png" alt="image" className="h-full w-full object-cover" />

      <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black text-left">
        <div className="container">
          <h3 className="header-text text-gega-melon tracking-wider transition duration-1000 ease-in-out opacity-0 -translate-x-full ">
            CELAL SAFA AKSU
          </h3>
          <h1 className="header-text text-2xl md:text-4xl lg:text-6xl text-gega-grey transition duration-1000 ease-in-out opacity-0 -translate-x-full ">
            <span className="group-hover:text-blue-500 transition duration-1000 ease-in-out transform -translate-x-full group-hover:translate-x-0">| </span>
            <span className="text-blue-700">F</span>
            <span className="text-blue-700">r</span>
            <span className="text-blue-700">o</span>
            <span className="text-blue-700">n</span>
            <span className="text-blue-600">t</span>
            <span className="text-blue-600">e</span>
            <span className="text-blue-500">n</span>
            <span className="text-blue-500">d</span> Geliştirici
          </h1>
          <div className="flex space-x-5 mt-5 lg:ml-20">
            <div className="flex space-x-4 opacity-0 group-hover:opacity-100 group-hover:mb-20 duration-1000 items-center cursor-pointer">
              <a href="." className="text-gega-grey hover:text-gega-red uppercase">Daha Fazla</a>
              <div className="flex bg-gega-red w-8 h-8 justify-center items-center rounded-full">
                <i className="fas fa-play"></i>
              </div>
            </div>
            <div className="flex space-x-4 opacity-0 group-hover:opacity-100 group-hover:mb-20  duration-1000 items-center cursor-pointer">
              <a href="." className="text-gega-grey hover:text-gega-red uppercase">Daha Fazla</a>
              <div className="flex bg-gega-red w-8 h-8 justify-center items-center rounded-full">
                <i className="fas fa-play"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
