import { Link } from 'react-router-dom';
import { Package, Camera, Key, Ticket, Beer, ShoppingCart, Truck, DollarSign, Banknote, CheckCircle } from 'lucide-react';
import { useScrollReveal, useScrollToTop } from '../hooks/useScrollReveal';

const featuredServices = [
  {
    icon: Package,
    title: 'Parcel Shipping Services',
    description: 'Send and receive packages with ease through our partnership with major carriers.',
    logos: [
      { name: 'FedEx', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/FedEx_Corporation_-_2016_Logo.svg/200px-FedEx_Corporation_-_2016_Logo.svg.png' },
      { name: 'UPS', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_Parcel_Service_logo_2014.svg/200px-United_Parcel_Service_logo_2014.svg.png' },
      { name: 'Purolator', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Purolator_Inc._logo.svg/200px-Purolator_Inc._logo.svg.png' },
      { name: 'DHL', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/DHL_Logo.svg/200px-DHL_Logo.svg.png' },
      { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png' }
    ],
    features: [
      'FedEx authorized shipping',
      'UPS drop-off and pick-up',
      'Purolator service point',
      'DHL service point',
      'Amazon Hub Counter',
      'Shein & Temu returns',
      'Packaging supplies available',
      'PUDO parcel lockers',
      'Package tracking assistance'
    ],
    image: 'https://images.unsplash.com/photo-1766040923580-16ad32fae8b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdlJTIwZGVsaXZlcnklMjBzaGlwcGluZyUyMGJveGVzfGVufDF8fHx8MTc3MTY0MDM2Mnww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Camera,
    title: 'Photo Services',
    description: 'Passport photos and ID photo services for all your needs.',
    features: [
      'Passport photos (government approved)',
      'ID photos for licenses',
      'Same-day service available',
      'Professional quality guaranteed'
    ],
    image: 'https://images.unsplash.com/photo-1639034741369-1e0c771adaeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzcG9ydCUyMHBob3RvJTIwcHJpbnRpbmclMjBzZXJ2aWNlfGVufDF8fHx8MTc3MTY0MTg1NXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Truck,
    title: 'U-Haul Rentals',
    description: 'Convenient truck and equipment rentals for your moving needs. Available at all locations.',
    features: [
      'Cargo vans and pickup trucks',
      'Moving trucks in various sizes',
      'Moving equipment and supplies',
      'Easy phone booking and flexible rental periods'
    ],
    image: 'https://images.unsplash.com/photo-1758219944627-4d9b32ed7019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVLUhhdWwlMjBtb3ZpbmclMjB0cnVjayUyMHJlbnRhbHxlbnwxfHx8fDE3NzE2NDE4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

const additionalServices = [
  { icon: Key, title: 'Key Cutting Services', description: 'Fast and accurate key duplication for house, car, office, and padlock keys while you wait.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
  { icon: Ticket, title: 'OLG Lottery', description: 'Authorized retailer for Lotto Max, 6/49, Daily Grand, scratch tickets, and PROLINE sports betting.', image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
  { icon: Beer, title: 'Beer & Beverages', description: 'Wide selection of domestic, imported, and craft beers, wine, plus energy drinks and soft drinks always cold.', image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
  { icon: ShoppingCart, title: 'Grocery & Snacks', description: 'Dairy, bread, canned goods, snacks, and household essentials for everyday needs.', image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
  { icon: DollarSign, title: 'Money Transfer Services', description: 'Fast and secure international and domestic money transfers, bill payments, and money orders.', image: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', logos: [
    { name: 'Western Union', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Western_Union_Logo_2019.svg/200px-Western_Union_Logo_2019.svg.png' },
    { name: 'MoneyGram', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/MoneyGram_logo.svg/200px-MoneyGram_logo.svg.png' },
    { name: 'Ria', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ria_Money_Transfer_logo.svg/200px-Ria_Money_Transfer_logo.svg.png' }
  ]},
  { icon: Banknote, title: 'ATM Services', description: 'ATM access for cash withdrawals and balance inquiries with major networks accepted.', image: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' }
];

export default function Services() {
  const containerRef = useScrollReveal();
  useScrollToTop();

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10 hero-animate">
          <div className="flex items-center space-x-3 mb-6">
            <Package className="w-12 h-12 text-primary" />
            <span className="text-lg text-gray-300">9+ Essential Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
            From parcel shipping to photo services, key cutting to U-Haul rentals &ndash; everything you need, all under one roof
          </p>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {service.logos && (
                    <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-gray-100">
                      {service.logos.map((logo, idx) => (
                        <img key={idx} src={logo.url} alt={logo.name} className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                      ))}
                    </div>
                  )}
                </div>
                <div className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Additional Services</h2>
            <p className="text-xl text-gray-600">More ways we serve our community</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-red-50 rounded-xl mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                {service.logos && (
                  <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                    {service.logos.map((logo, idx) => (
                      <img key={idx} src={logo.url} alt={logo.name} className="h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    ))}
                  </div>
                )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white reveal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Questions About Our Services?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our friendly team is always happy to help. Visit any of our three locations or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/locations"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-red-700 transition-all duration-300 hover:shadow-lg"
            >
              Find a Location
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
