export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to help your business grow and succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Transformation",
                description: "Modernize your business with cutting-edge technology solutions and digital strategies.",
                icon: "🔄",
                features: ["Cloud Migration", "Process Automation", "Digital Strategy"]
              },
              {
                title: "Web Development",
                description: "Create stunning, responsive websites and web applications that engage your audience.",
                icon: "🌐",
                features: ["Custom Websites", "E-commerce Solutions", "Web Applications"]
              },
              {
                title: "Mobile Solutions",
                description: "Develop powerful mobile applications that keep your business accessible anywhere.",
                icon: "📱",
                features: ["iOS Apps", "Android Apps", "Cross-platform Solutions"]
              },
              {
                title: "Cloud Services",
                description: "Leverage the power of cloud computing to scale your business efficiently.",
                icon: "☁️",
                features: ["Cloud Hosting", "Data Storage", "Serverless Solutions"]
              },
              {
                title: "Cybersecurity",
                description: "Protect your business with advanced security solutions and threat prevention.",
                icon: "🔒",
                features: ["Security Audits", "Threat Detection", "Data Protection"]
              },
              {
                title: "Consulting",
                description: "Get expert guidance to make informed decisions about your technology investments.",
                icon: "💼",
                features: ["IT Strategy", "Technology Assessment", "Digital Roadmap"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help transform your business with our services.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
} 