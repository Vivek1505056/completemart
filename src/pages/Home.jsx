import { Link } from 'react-router-dom';
import { ArrowRight, Package, Camera, Key, Ticket, Beer, ShoppingCart, Truck, DollarSign, MapPin, Star } from 'lucide-react';
import { useScrollReveal, useScrollToTop } from '../hooks/useScrollReveal';

const services = [
  { icon: Package, name: 'Parcel Shipping', description: 'FedEx, UPS, Purolator & more' },
  { icon: Camera, name: 'Photo Services', description: 'Printing & passport photos' },
  { icon: Key, name: 'Key Cutting', description: 'Fast & accurate service' },
  { icon: Ticket, name: 'OLG Lottery', description: 'Your lucky stop' },
  { icon: Beer, name: 'Beer & Beverages', description: 'Cold drinks available' },
  { icon: ShoppingCart, name: 'Grocery & Snacks', description: 'Fresh & convenient' },
  { icon: Truck, name: 'U-Haul Rentals', description: 'Moving made easy' },
  { icon: DollarSign, name: 'Money Transfer', description: 'Secure transactions' }
];

const reviews = [
  { name: 'Sarah M.', rating: 5, text: 'Great service and always friendly staff. My go-to store for everything!' },
  { name: 'Michael R.', rating: 5, text: 'Super convenient location and they have everything I need. Love the shipping services.' },
  { name: 'Jennifer L.', rating: 5, text: 'Been coming here for years. The team is wonderful and the store is always well-stocked.' }
];

const locationsList = [
  { area: 'Old Sheppard', address: '5 Old Sheppard Ave UNIT 108' },
  { area: 'York Mills', address: '1200 York Mills Rd #100' },
  { area: 'Wilson Heights', address: '537 Wilson Heights Blvd' }
];

export default function Home() {
  const containerRef = useScrollReveal();
  useScrollToTop();

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1729683412778-07eb71ae9aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwc2t5bGluZSUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NzE1OTYxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Toronto cityscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white hero-animate">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-2xl leading-tight">
            Your Complete Convenience Store
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-xl text-gray-200">
            Serving Toronto communities with quality products and reliable services since 2010
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/locations"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Find a Location Near You
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Everything You Need, All in One Place</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From daily essentials to specialized services, Complete Mart has you covered
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {services.map((service, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-4 group-hover:bg-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <Link
              to="/services"
              className="inline-flex items-center text-primary hover:text-red-700 transition-colors font-medium"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Locations CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Locations</h2>
              <p className="text-xl text-gray-600 mb-8">
                With 3 locations across the Greater Toronto Area, there's always a Complete Mart nearby.
                Each store offers the same quality products and excellent service you can count on.
              </p>
              <div className="space-y-4 mb-8">
                {locationsList.map((loc) => (
                  <div key={loc.area} className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">{loc.area}</p>
                      <p className="text-gray-600">{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/locations"
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-red-700 transition-all duration-300 hover:shadow-lg"
              >
                View All Locations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden reveal-right shadow-xl">
              <img
                src="https://www.uhaul.com/Locations/GetPhoto.ashx?id=1182847&size=5"
                alt="Complete Mart storefront"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Customers Say</h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xl text-gray-600">4.8 out of 5 on Google</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-medium text-gray-900">&ndash; {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white reveal-scale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Have any questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us about any questions you may have
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-semibold"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
