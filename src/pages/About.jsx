import SectionHeading from '../components/SectionHeading';

export default function About() {
  return (
    <div className="space-y-16">
      <SectionHeading
        eyebrow="About Complete Mart"
        title="Neighbourhood-first convenience with trusted everyday services"
        description="Complete Mart serves families, commuters, and local businesses with fast, friendly service."
      />

      <section className="grid gap-8 rounded-3xl border border-maple-200 bg-maple-50/70 p-8 shadow-soft sm:p-10 md:grid-cols-2">
        <article>
          <h3 className="text-xl font-bold text-maple-800">Our Story</h3>
          <p className="mt-3 text-slate-700">
            We started with one goal: make daily life easier with reliable essentials and practical services under one roof.
            Today, our stores are known for convenience, cleanliness, and helpful staff.
          </p>
        </article>
        <article>
          <h3 className="text-xl font-bold text-maple-800">Our Promise</h3>
          <p className="mt-3 text-slate-700">
            Whether you need shipping support, groceries, lottery, or a quick passport photo, we focus on speed, quality,
            and a friendly customer experience every visit.
          </p>
        </article>
      </section>

      <section className="rounded-3xl border border-maple-200 bg-maple-50 p-8 sm:p-10">
        <h3 className="text-xl font-bold text-maple-800">Loyalty & Membership Program</h3>
        <p className="mt-3 text-slate-700">
          We are preparing a loyalty program for repeat customers with points, member-exclusive offers, and seasonal perks.
          This will be integrated in a future phase.
        </p>
      </section>
    </div>
  );
}
