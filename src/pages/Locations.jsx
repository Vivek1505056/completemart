import SectionHeading from '../components/SectionHeading';
import { locations } from '../data/locations';

export default function Locations() {
  return (
    <div className="space-y-16">
      <SectionHeading
        eyebrow="Store Locations"
        title="Find a Complete Mart near you"
        description="Three Toronto stores and one location outside Toronto, each with extended hours."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {locations.map((store) => (
          <article key={store.name} className="rounded-2xl border border-maple-200 bg-maple-50/80 p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wide text-maple-700">{store.cityLabel}</p>
            <h3 className="mt-1 text-xl font-bold text-maple-800">{store.name}</h3>
            <p className="mt-3 text-slate-700">{store.address}</p>
            <p className="mt-1 text-slate-700">Phone: {store.phone}</p>
            <p className="mt-1 text-slate-700">Hours: {store.hours}</p>
            <a
              href={store.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-full bg-maple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-maple-700"
            >
              Open Map
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
