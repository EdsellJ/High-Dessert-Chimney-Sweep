import dynamic from 'next/dynamic';

// Import the map component dynamically to avoid SSR issues with Leaflet
const ServiceAreaMap = dynamic(
  () => import('../components/ServiceAreaMap'),
  {  }
);

export default function ServiceArea() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Service Area</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High Desert Chimney Sweep proudly serves communities throughout the High Desert region of Southern California.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Areas We Serve</h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive chimney and vent services to homeowners and businesses throughout the High Desert region, 
                including but not limited to:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="text-primary-600 mr-2">✓</span>
                    Apple Valley
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-primary-600 mr-2">✓</span>
                    Victorville
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-primary-600 mr-2">✓</span>
                    Hesperia
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-primary-600 mr-2">✓</span>
                    Adelanto
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-primary-600 mr-2">✓</span>
                    Barstow
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="text-primary-600 mr-2">✓</span>
                    Lucerne Valley
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-primary-600 mr-2">✓</span>
                    Phelan
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-primary-600 mr-2">✓</span>
                    Pinon Hills
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-primary-600 mr-2">✓</span>
                    Oak Hills
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-primary-600 mr-2">✓</span>
                    Spring Valley Lake
                  </li>
                </ul>
              </div>
              <p className="text-gray-600 mt-6">
                Not sure if we service your area? Contact us today and we&apos;ll be happy to discuss your specific location and needs.
              </p>
            </div>
            <div>
              <ServiceAreaMap />
            </div>
          </div>
        </div>
      </section>

      {/* Travel Fee Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Area Details</h2>
            <p className="text-gray-600 mb-4">
              Our primary service area covers the core High Desert communities with no additional travel fees. 
              For locations outside our primary service area, a small travel fee may apply depending on distance.
            </p>
            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Additional Information</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-600">
                  <span className="text-primary-600 mr-2 mt-1">•</span>
                  Standard service appointments are available Monday through Friday, 8:00 AM to 5:00 PM.
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-primary-600 mr-2 mt-1">•</span>
                  Saturday appointments are available with limited availability, please call for details.
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-primary-600 mr-2 mt-1">•</span>
                  Emergency services are available for urgent situations – additional fees may apply.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 