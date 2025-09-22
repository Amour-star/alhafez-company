import React from "react";

const Portfolio = () => {
  const portfolioProjects = [
    {
      title: "Global Retail Chain",
      category: "Business Transformation",
      description:
        "Helped a major retail chain optimize operations across 200+ locations.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
    },
    {
      title: "Tech Startup Growth",
      category: "Strategic Planning",
      description: "Guided a tech startup from seed to Series A funding round.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    },
    {
      title: "Manufacturing Excellence",
      category: "Process Optimization",
      description: "Improved efficiency by 40% in manufacturing operations.",
      image:
        "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=500&h=300&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Success stories from our satisfied clients across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
