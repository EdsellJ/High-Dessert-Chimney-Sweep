export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional chimney and ventilation services to keep your home safe, efficient, and well-maintained.
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
                title: "Chimney Cleaning",
                description: "Professional chimney sweeping to remove creosote buildup, debris, and blockages for safer operation.",
                icon: "🧹",
                features: ["Creosote Removal", "Soot Cleanup", "Blockage Clearing", "Prevent Chimney Fires"]
              },
              {
                title: "Fireplace, Wood Stove, and Pelet StoveService",
                description: "Comprehensive maintenance and service for all types of fireplaces, wood stoves, and inserts.",
                icon: "🔥",
                features: ["Efficiency Optimization", "Component Replacement", "Seal Improvement", "Performance Testing"]
              },
              {
                title: "Inspection & Repair",
                description: "Thorough inspections and skilled repairs to maintain the integrity and safety of your chimney system.",
                icon: "🔍",
                features: ["Level 1-2 Inspections", "Crack Repair", "Crown Sealing", "Flashing Repair"]
              },
              {
                title: "Dryer Vent Cleaning",
                description: "Remove lint buildup from your dryer vents to improve efficiency, reduce drying time, and prevent fire hazards. Prices starting at $179",
                icon: "👕",
                features: ["Reduced Fire Risk", "Improved Efficiency", "Lower Energy Bills", "Extended Appliance Life"]
              },
              {
                title: "Chimney Caps & Dampers",
                description: "Installation and repair of chimney caps and dampers to keep out animals, debris, and water.",
                icon: "🏠",
                features: ["Animal Guard", "Spark Prevention", "Rain Protection", "Downdraft Prevention"]
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
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Chimney Service?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Keep your home safe and your heating systems operating efficiently with our professional chimney and vent services.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule an Appointment
          </button>
        </div>
      </section>
    </div>
  );
} 