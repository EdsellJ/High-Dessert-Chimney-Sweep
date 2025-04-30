export default function Links() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Important Links</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick access to resources, documentation, and helpful information.
            </p>
          </div>
        </div>
      </section>

      {/* Links Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Resources",
                description: "Access our library of helpful resources and guides.",
                icon: "📚",
                links: [
                  { text: "Documentation", href: "#" },
                  { text: "API Reference", href: "#" },
                  { text: "User Guides", href: "#" },
                  { text: "Tutorials", href: "#" }
                ]
              },
              {
                title: "Support",
                description: "Get help and support for our products and services.",
                icon: "💬",
                links: [
                  { text: "Help Center", href: "#" },
                  { text: "FAQ", href: "#" },
                  { text: "Community Forum", href: "#" },
                  { text: "Contact Support", href: "#" }
                ]
              },
              {
                title: "Legal",
                description: "Important legal information and policies.",
                icon: "⚖️",
                links: [
                  { text: "Privacy Policy", href: "#" },
                  { text: "Terms of Service", href: "#" },
                  { text: "Cookie Policy", href: "#" },
                  { text: "GDPR Compliance", href: "#" }
                ]
              },
              {
                title: "Company",
                description: "Learn more about our company and team.",
                icon: "🏢",
                links: [
                  { text: "About Us", href: "/about" },
                  { text: "Careers", href: "#" },
                  { text: "Press", href: "#" },
                  { text: "Blog", href: "#" }
                ]
              },
              {
                title: "Partners",
                description: "Information for our partners and affiliates.",
                icon: "🤝",
                links: [
                  { text: "Partner Program", href: "#" },
                  { text: "Affiliate Program", href: "#" },
                  { text: "Partner Portal", href: "#" },
                  { text: "Become a Partner", href: "#" }
                ]
              },
              {
                title: "Social",
                description: "Connect with us on social media.",
                icon: "🌐",
                links: [
                  { text: "Twitter", href: "#" },
                  { text: "LinkedIn", href: "#" },
                  { text: "Facebook", href: "#" },
                  { text: "Instagram", href: "#" }
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                      >
                        <span className="mr-2">→</span>
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates and news.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
} 