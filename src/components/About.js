import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Alhafez Company
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded with a vision to transform businesses through strategic
            innovation and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Alhafez Company was established with the mission to provide
              exceptional business consulting and strategic planning services.
              With over two decades of combined experience, our team has helped
              hundreds of companies achieve their goals and exceed their
              expectations.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe in building lasting partnerships with our clients,
              understanding their unique challenges, and delivering tailored
              solutions that drive measurable results.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <img
              src="/water-pumps-s.jpg"
              alt="Team collaboration"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
