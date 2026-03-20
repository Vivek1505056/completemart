import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useScrollReveal, useScrollToTop } from '../hooks/useScrollReveal';

// Fix default marker icon issue with bundlers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const locations = [
  {
    name: 'Complete Mart - Old Sheppard',
    address: '5 Old Sheppard Ave UNIT 108',
    city: 'North York, ON M2J 4K3',
    phone: '(416) 492-2525',
    hours: [
      { days: 'Monday - Friday', time: '9:30 AM - 9:00 PM' },
      { days: 'Saturday', time: '10:00 AM - 8:00 PM' },
      { days: 'Sunday', time: '10:00 AM - 7:00 PM' }
    ],
    mapUrl: 'https://maps.google.com/?q=5+Old+Sheppard+Ave+UNIT+108+North+York',
    coords: [43.7785, -79.3460]
  },
  {
    name: 'Complete Mart - York Mills',
    address: '1200 York Mills Rd #100',
    city: 'North York, ON M3A 1X8',
    phone: '(416) 792-1651',
    hours: [
      { days: 'Monday - Friday', time: '9:00 AM - 9:00 PM' },
      { days: 'Saturday', time: '10:00 AM - 9:00 PM' },
      { days: 'Sunday', time: '10:00 AM - 8:00 PM' }
    ],
    mapUrl: 'https://maps.google.com/?q=1200+York+Mills+Rd+100+North+York',
    coords: [43.7515, -79.3545]
  },
  {
    name: 'Complete Mart - Wilson Heights',
    address: '537 Wilson Heights Blvd',
    city: 'North York, ON M3H 2V7',
    phone: '(416) 636-3522',
    hours: [
      { days: 'Monday - Saturday', time: '9:00 AM - 8:30 PM' },
      { days: 'Sunday', time: '10:00 AM - 7:00 PM' }
    ],
    mapUrl: 'https://maps.google.com/?q=537+Wilson+Heights+Blvd+North+York',
    coords: [43.7390, -79.4480]
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
            Three convenient locations across the Greater Toronto Area
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
          <div className="rounded-2xl overflow-hidden h-[500px] shadow-lg">
            <MapContainer
              center={[43.7530, -79.3830]}
              zoom={12}
              scrollWheelZoom={false}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
              {locations.map((location, index) => (
                <Marker key={index} position={location.coords}>
                  <Popup>
                    <strong>{location.name}</strong><br />
                    {location.address}<br />
                    {location.city}<br />
                    {location.phone}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
