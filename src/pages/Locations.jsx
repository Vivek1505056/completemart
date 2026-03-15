import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { useScrollReveal, useScrollToTop } from '../hooks/useScrollReveal';

const locations = [
  {
    name: 'Complete Mart Downtown',
    address: '123 Queen Street West',
    city: 'Toronto, ON M5H 2M9',
    phone: '(416) 555-0101',
    hours: [
      { days: 'Monday - Friday', time: '7:00 AM - 11:00 PM' },
      { days: 'Saturday', time: '8:00 AM - 11:00 PM' },
      { days: 'Sunday', time: '9:00 AM - 10:00 PM' }
    ],
    mapUrl: 'https://maps.google.com/?q=123+Queen+Street+West+Toronto'
  },
  {
    name: 'Complete Mart North York',
    address: '456 Yonge Street',
    city: 'North York, ON M2N 5S9',
    phone: '(416) 555-0102',
    hours: [
      { days: 'Monday - Friday', time: '7:00 AM - 11:00 PM' },
      { days: 'Saturday', time: '8:00 AM - 11:00 PM' },
      { days: 'Sunday', time: '9:00 AM - 10:00 PM' }
    ],
    mapUrl: 'https://maps.google.com/?q=456+Yonge+Street+North+York'
  },
  {
    name: 'Complete Mart Scarborough',
    address: '789 Kennedy Road',
    city: 'Scarborough, ON M1P 2L4',
    phone: '(416) 555-0103',
    hours: [
      { days: 'Monday - Friday', time: '7:00 AM - 11:00 PM' },
      { days: 'Saturday', time: '8:00 AM - 11:00 PM' },
      { days: 'Sunday', time: '9:00 AM - 10:00 PM' }
    ],
    mapUrl: 'https://maps.google.com/?q=789+Kennedy+Road+Scarborough'
  },
  {
    name: 'Complete Mart Mississauga',
    address: '321 Hurontario Street',
    city: 'Mississauga, ON L5B 1N2',
    phone: '(905) 555-0104',
    hours: [
      { days: 'Monday - Friday', time: '7:00 AM - 11:00 PM' },
      { days: 'Saturday', time: '8:00 AM - 11:00 PM' },
      { days: 'Sunday', time: '9:00 AM - 10:00 PM' }
    ],
    mapUrl: 'https://maps.google.com/?q=321+Hurontario+Street+Mississauga'
  }
];

export default function Locations() {
  const containerRef = useScrollReveal();
  useScrollToTop();

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-1/4 w-80 h-80 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-16 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10 hero-animate">
          <div className="flex items-center space-x-3 mb-6">
            <MapPin className="w-12 h-12 text-primary" />
            <span className="text-lg text-gray-300">Find Your Nearest Store</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Store Locations</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
            Four convenient locations across the Greater Toronto Area &ndash; Downtown Toronto, North York, Scarborough, and Mississauga
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            {locations.map((location, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">{location.name}</h2>

                <div className="mb-6">
                  <div className="flex items-start space-x-3 mb-2">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-900">{location.address}</p>
                      <p className="text-gray-600">{location.city}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="text-gray-900 hover:text-primary transition-colors">
                      {location.phone}
                    </a>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div className="space-y-1">
                      {location.hours.map((hour, idx) => (
                        <div key={idx} className="flex justify-between gap-4">
                          <span className="text-gray-900">{hour.days}</span>
                          <span className="text-gray-600">{hour.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-red-700 transition-all duration-300 hover:shadow-lg"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Find Us on the Map</h2>
            <p className="text-xl text-gray-600">
              Conveniently located throughout the Greater Toronto Area
            </p>
          </div>
          <div className="bg-gray-200 rounded-2xl h-[500px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive map would be embedded here</p>
              <p className="text-gray-500 text-sm mt-2">Google Maps integration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
