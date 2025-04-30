import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About High Desert Chimney Sweep</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving the High Desert community with pride and professionalism for over four decades.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Heritage</h2>
              <p className="text-gray-600 mb-4">
                Since 1981, High Desert Chimney Sweep has been the trusted name in chimney and fireplace services throughout the High Desert region. What began as a small, family-owned operation has grown into the area&apos;s most respected chimney service company, while maintaining our commitment to personalized customer care.
              </p>
              <p className="text-gray-600 mb-4">
                For over 40 years, our team has protected homes and families by ensuring the safety, efficiency, and proper function of chimneys, fireplaces, and venting systems. We&apos;ve evolved with the industry, continually updating our techniques and equipment to provide the highest standard of service.
              </p>
              <p className="text-gray-600">
                Through decades of changing seasons, we&apos;ve maintained our founding values: exceptional workmanship, honest service, and a dedication to customer safety that exceeds industry standards.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
              {/* Image placeholder - replace src with your actual image */}
              <div className="relative h-full w-full">
                <Image 
                  src="/sweeping.jpg" 
                  alt="High Desert Chimney Sweep technician at work" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To protect homes and families throughout the High Desert by providing the highest quality chimney and venting services with unmatched integrity, expertise, and professionalism.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First",
                description: "Every service we provide is guided by our commitment to home safety and fire prevention. We adhere to the strictest national safety standards.",
                icon: "🔒"
              },
              {
                title: "Professional Excellence",
                description: "Our CSIA-certified technicians bring decades of expertise and continuous education to every job, ensuring exceptional results and peace of mind.",
                icon: "🏆"
              },
              {
                title: "Community Trust",
                description: "For over 40 years, High Desert families have trusted us to protect their homes. We honor that trust with honest service and fair pricing.",
                icon: "🏡"
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="relative rounded-lg overflow-hidden h-80 lg:h-full lg:col-span-1">
                {/* Team image placeholder */}
                <div className="relative h-full w-full">
                  <Image
                    src="/logo.png"
                    alt="High Desert Chimney Sweep Team"
                    fill
                    className="object-contain bg-gray-50 p-4"
                  />
                </div>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expert Technicians You Can Trust</h3>
                <p className="text-gray-600 mb-4">
                  Our team consists of highly trained, CSIA-certified technicians with decades of combined experience. Many of our staff members have been with us for over 15 years, developing deep expertise in all aspects of chimney maintenance, repair, and inspection.
                </p>
                <p className="text-gray-600 mb-4">
                  We take pride in our thorough knowledge of building codes, safety standards, and the unique challenges of desert climate homes. Our technicians undergo continuous education to stay current with the latest techniques and safety protocols in the industry.
                </p>
                <p className="text-gray-600">
                  When you welcome a High Desert Chimney Sweep technician into your home, you&apos;re getting more than just a service provider – you&apos;re getting a trusted professional who cares about your home&apos;s safety and your family&apos;s well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 