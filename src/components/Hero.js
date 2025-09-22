import React from "react";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="pt-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-yellow-400">Alhafez Company</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Your trusted partner in business excellence, delivering innovative
            solutions and strategic guidance to drive your success forward.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => scrollToSection("services")}
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
