import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/sweeping.jpg"
            alt="Chimney sweep background"
            fill
            priority
            className="object-cover"
            quality={100}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            High Desert
            <span className="block text-white">Chimney Sweep</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We are a team of experienced chimney sweeps who are dedicated to providing the best possible service to our clients.
          </p>
          <Link 
            href="/services" 
            className="inline-flex items-center text-white text-lg font-medium border-b-2 border-white hover:border-primary-300 transition-colors group"
          >
            Explore Our Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Chimney Services</h2>
            <p className="text-xl text-gray-600">HDCS is a family owned and operated business that has been serving the High Desert since 1981.
              Our team prides itself on providing the highest quality service in a timely manner.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety Inspections & Prevention",
                description: "Comprehensive NFPA 211-compliant inspections to identify potential fire hazards, structural issues, and code violations before they become dangerous problems.",
                icon: "🔍"
              },
              {
                title: "Expert Technicians",
                description: "Our CSIA-certified professionals utilize industry-leading equipment and techniques to deliver superior results that meet the highest standards of safety and performance.",
                icon: "👨‍🔧"
              },
              {
                title: "Energy Efficiency Solutions",
                description: "Our services enhance your heating system's performance, improving draft, reducing fuel consumption, and creating a cleaner, more efficient burn with fewer emissions.",
                icon: "🔥"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSIA Certification Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CSIA Certified Professionals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The technicians of High Desert Chimney Sweep are certified by the Chimney Safety Institute of America.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-sm">
              <div className="relative w-48 h-48 mb-6">
                <Image 
                  src="/Chimney_sweep_certification.jpg" 
                  alt="CSIA Certification Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary-700 mb-3">Official CSIA Certification</h3>
              <p className="text-gray-600 text-center">
                Our team holds official certifications from the industry's leading authority in chimney safety.
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why CSIA Certification Matters</h3>
                <p className="text-gray-600 mb-4">
                  CSIA certification is the industry's most respected credential for chimney professionals. It ensures our technicians have mastered proper 
                  inspection techniques, understand complex building codes, and can identify potential hazards that untrained eyes might miss.
                </p>
                <p className="text-gray-600 mb-4">
                  This certification means your chimney service is performed by professionals who adhere to the highest standards of safety and ethics,
                  giving you peace of mind that your home and family are protected.
                </p>
                <div className="aspect-video rounded-lg overflow-hidden mt-6">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/mNsOVCmQO1s" 
                    title="Chimney Safety Institute of America" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to make an appointment?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have chosen High Desert Chimney Sweep for their fireplace and chimney needs.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
