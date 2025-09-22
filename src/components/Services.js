import React from "react";

const Services = () => {
  const services = [
    {
      title: "Business Consulting",
      description:
        "Strategic business advice to help your company grow and succeed in competitive markets.",
      icon: "💼",
    },
    {
      title: "Financial Planning",
      description:
        "Comprehensive financial planning and investment strategies tailored to your needs.",
      icon: "📊",
    },
    {
      title: "Technology Solutions",
      description:
        "Modern technology implementations to streamline your business operations.",
      icon: "🚀",
    },
    {
      title: "Market Analysis",
      description:
        "In-depth market research and analysis to identify opportunities and risks.",
      icon: "📈",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to meet your business needs and
            drive growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
