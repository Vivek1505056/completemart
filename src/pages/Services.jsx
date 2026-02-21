import SectionHeading from '../components/SectionHeading';
import { services } from '../data/services';

export default function Services() {
  return (
    <div className="space-y-16">
      <SectionHeading
        eyebrow="Our Services"
        title="Convenience beyond the usual"
        description="Complete Mart combines essential products with high-value services to save you time."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-maple-200 bg-maple-50/80 p-6 shadow-soft">
            <h3 className="text-lg font-bold text-maple-800">{service.title}</h3>
            <p className="mt-2 text-slate-600">{service.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
