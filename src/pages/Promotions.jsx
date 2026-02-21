import SectionHeading from '../components/SectionHeading';

const deals = [
  { title: '2 for $5 Snacks', detail: 'Mix and match select chips, cookies, and energy bars.' },
  { title: 'Free Parcel Tape', detail: 'Get complimentary parcel tape with eligible shipping orders.' },
  { title: 'Coffee Combo', detail: 'Medium coffee + baked snack for $4.49 all week.' },
  { title: 'Weekend Grocery Saver', detail: '10% off pantry essentials every Saturday and Sunday.' }
];

export default function Promotions() {
  return (
    <div className="space-y-16">
      <SectionHeading
        eyebrow="Promotions"
        title="Weekly deals worth stopping for"
        description="New in-store promotions are refreshed weekly. Ask staff for location-specific specials."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {deals.map((deal) => (
          <article key={deal.title} className="rounded-2xl border border-maple-200 bg-maple-50/80 p-6 shadow-soft">
            <h3 className="text-xl font-bold text-maple-800">{deal.title}</h3>
            <p className="mt-2 text-slate-700">{deal.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
