import { Tag, Calendar, Gift, TrendingDown } from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal, useScrollToTop } from '../hooks/useScrollReveal';

const weeklyDeals = [
  {
    title: 'Beer & Beverages',
    discount: 'Buy 2 Get 1 Free',
    description: 'Select craft beers and premium beverages',
    validUntil: 'March 21, 2026',
    image: 'https://images.unsplash.com/photo-1765100213678-5cb8dfb91e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc2hvcHBpbmclMjBmcmVzaCUyMHByb2R1Y2V8ZW58MXx8fHwxNzcxNjQwMzYyfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Shipping Services',
    discount: '20% Off',
    description: 'All domestic parcel shipping through FedEx',
    validUntil: 'March 21, 2026',
    image: 'https://images.unsplash.com/photo-1766040923580-16ad32fae8b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdlJTIwZGVsaXZlcnklMjBzaGlwcGluZyUyMGJveGVzfGVufDF8fHx8MTc3MTY0MDM2Mnww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Photo Services',
    discount: '50% Off',
    description: 'Passport photos and ID photos',
    validUntil: 'March 21, 2026',
    image: 'https://images.unsplash.com/photo-1651561020919-56f377b0781e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMGN1c3RvbWVyJTIwc2VydmljZSUyMHN0b3JlfGVufDF8fHx8MTc3MTY0MDM2M3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Snacks & Chips',
    discount: '$2.99',
    description: 'Family-size bags - all brands',
    validUntil: 'March 21, 2026',
    image: 'https://images.unsplash.com/photo-1765100213678-5cb8dfb91e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc2hvcHBpbmclMjBmcmVzaCUyMHByb2R1Y2V8ZW58MXx8fHwxNzcxNjQwMzYyfDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

const monthlySpecials = [
  { title: 'Key Cutting Special', description: 'Get 3 keys cut for the price of 2', icon: Tag },
  { title: 'Money Transfer Discount', description: 'Save $5 on international transfers over $200', icon: TrendingDown },
  { title: 'Snack Saturday', description: '15% off all snacks and chips every Saturday', icon: Gift }
];

export default function Promotions() {
  const containerRef = useScrollReveal();
  const [email, setEmail] = useState('');
  useScrollToTop();

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center bg-gradient-to-br from-primary via-red-600 to-orange-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-300 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10 hero-animate">
          <div className="flex items-center space-x-3 mb-6">
            <Tag className="w-12 h-12" />
            <span className="text-lg opacity-90">Weekly Deals & Special Offers</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Promotions & Savings</h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl leading-relaxed">
            Save more on your favorite products and services with our exclusive weekly deals and monthly specials
          </p>
        </div>
      </section>

      {/* Current Week Banner */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 text-gray-900">
            <Calendar className="w-6 h-6 text-primary" />
            <p className="text-lg">
              <span className="font-medium">Current deals valid:</span> March 14 - March 21, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Weekly Deals Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">This Week's Featured Deals</h2>
            <p className="text-xl text-gray-600">
              Don't miss out on these amazing savings at all Complete Mart locations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {weeklyDeals.map((deal, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-white px-4 py-2 rounded-full font-medium text-sm">
                    {deal.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{deal.title}</h3>
                  <p className="text-gray-600 mb-4">{deal.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    Valid until {deal.validUntil}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Specials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Monthly Specials</h2>
            <p className="text-xl text-gray-600">Ongoing offers available throughout the month</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {monthlySpecials.map((special, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-4">
                  <special.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{special.title}</h3>
                <p className="text-gray-600">{special.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="py-20 bg-white reveal-scale">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary to-red-700 rounded-3xl p-12 text-white">
            <Gift className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Complete Mart Rewards</h2>
            <p className="text-xl mb-8 opacity-90">
              Coming Soon! Join our loyalty program to earn points on every purchase and unlock exclusive
              member-only deals. Sign up for our newsletter to be the first to know when we launch.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex gap-3" onSubmit={(e) => { e.preventDefault(); setEmail(''); }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap font-semibold"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* How to Save More */}
      <section className="py-20 bg-gray-50 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">More Ways to Save</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Check Back Weekly</h3>
                <p className="text-gray-600">New deals every week on different products and services</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Follow Us on Social Media</h3>
                <p className="text-gray-600">Get flash deals and exclusive online promotions</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Ask In-Store</h3>
                <p className="text-gray-600">Our staff can tell you about unadvertised specials</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
