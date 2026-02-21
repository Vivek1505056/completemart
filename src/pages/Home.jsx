import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ReviewCard from '../components/ReviewCard';
import { services } from '../data/services';
import { reviews } from '../data/reviews';

export default function Home() {
  return (
    <div className="space-y-24">
      <section className="grid gap-10 rounded-3xl border border-maple-200 bg-maple-50/70 p-8 shadow-soft sm:p-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-maple-700">Toronto Convenience Store</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Everyday essentials, trusted services, and friendly service at Complete Mart.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Visit one of our four locations for groceries, parcel shipping, lottery, U-Haul, photos, and more.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/locations" className="rounded-full bg-maple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-maple-700">
              Find a Store
            </Link>
            <Link to="/promotions" className="rounded-full border border-maple-300 px-5 py-3 text-sm font-semibold text-maple-800 hover:bg-maple-100">
              View Weekly Deals
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-maple-300 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold text-maple-700">Why customers choose us</p>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>Four convenient locations across the GTA</li>
            <li>Top shipping partners in one stop</li>
            <li>Fast passport photos and printing</li>
            <li>Clean stores, helpful team, long hours</li>
          </ul>
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need, all in one place"
          description="From parcel drop-offs to daily groceries, we make busy days easier."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <article key={service.title} className="rounded-2xl border border-maple-200 bg-maple-50/80 p-6 shadow-soft">
              <h3 className="text-lg font-bold text-maple-800">{service.title}</h3>
              <p className="mt-2 text-slate-600">{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="Google Reviews"
          title="Loved by our local community"
          description="Real feedback from customers who rely on Complete Mart every week."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </section>
    </div>
  );
}
