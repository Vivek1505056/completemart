import { Heart, Users, Award, MapPin } from 'lucide-react';
import { useScrollReveal, useScrollToTop } from '../hooks/useScrollReveal';

const values = [
  {
    icon: Heart,
    title: 'Community First',
    description: "We're committed to serving our local communities with care and dedication. Your neighborhood is our neighborhood."
  },
  {
    icon: Users,
    title: 'Customer Service',
    description: 'Every customer is treated like family. Our team goes above and beyond to ensure you have a great experience.'
  },
  {
    icon: Award,
    title: 'Quality & Reliability',
    description: 'We carefully select our products and services to meet the highest standards our customers deserve.'
  },
  {
    icon: MapPin,
    title: 'Local Presence',
    description: "With 4 locations across the GTA, we're always nearby when you need us, open 7 days a week."
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
            More than just a convenience store &ndash; we're your trusted community partner, serving the GTA since 2010
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
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Complete Mart opened its first location in downtown Toronto in 2010 with a simple
                  mission: to provide our community with quality products, essential services, and exceptional
                  customer care.
                </p>
                <p>
                  What started as a single convenience store has grown into four thriving locations across the
                  Greater Toronto Area. Our expansion has been driven by one thing &ndash; the trust and loyalty of
                  customers like you.
                </p>
                <p>
                  Today, we're proud to serve thousands of customers every week, offering everything from
                  daily groceries to specialized services like parcel shipping, photo printing, and U-Haul
                  rentals.
                </p>
                <p>
                  Every member of our team is committed to making your visit quick, easy, and pleasant.
                  We're more than a store &ndash; we're your neighbors, and we're here to help.
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
              Our values guide everything we do, from how we serve customers to how we support our communities
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
              We believe in giving back to the communities that have supported us. Complete Mart is proud to
              sponsor local sports teams, participate in community events, and support local charities
              throughout the year.
            </p>
            <p className="text-lg opacity-90">
              When you shop with us, you're supporting a locally-focused business that reinvests in the
              neighborhoods we serve. Thank you for being part of our story.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
