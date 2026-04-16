import { Heart, Users, Award, MapPin } from 'lucide-react';
import { useScrollReveal, useScrollToTop } from '../hooks/useScrollReveal';

const values = [
  {
    icon: Heart,
    title: 'Community First',
    description: "We care about the neighborhoods we serve and work to be a store you can count on."
  },
  {
    icon: Users,
    title: 'Customer Service',
    description: 'Friendly staff ready to help. We want every visit to be a good one.'
  },
  {
    icon: Award,
    title: 'Quality & Reliability',
    description: 'Quality products and reliable services you can depend on.'
  },
  {
    icon: MapPin,
    title: 'Local Presence',
    description: "With 3 locations across the GTA, we're always nearby when you need us, open 7 days a week."
  }
];

export default function About() {
  const containerRef = useScrollReveal();
  useScrollToTop();

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10 hero-animate">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="w-12 h-12 text-primary" />
            <span className="text-lg text-gray-300">Your Community Partner</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Complete Mart</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
            Your trusted community convenience store, proudly serving the Greater Toronto Area
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden reveal-left shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1759153820384-12c9ddf8bd8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZW5pZW5jZSUyMHN0b3JlJTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzcxNjQwMzYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Complete Mart store interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="reveal-right">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Complete Mart is a community-focused convenience store with three locations across the
                  Greater Toronto Area. We carry everything from daily groceries to parcel shipping,
                  photo services, and U-Haul rentals.
                </p>
                <p>
                  Our goal is simple: give our customers a quick, easy, and friendly shopping experience
                  every time they walk through the door.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What matters to us
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-3 text-gray-900 text-lg">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Commitment */}
      <section className="py-20 bg-primary text-white reveal-scale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Committed to Our Community</h2>
            <p className="text-xl opacity-90 mb-8">
              When you shop with us, you're supporting a local business right in your neighborhood.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
