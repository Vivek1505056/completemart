import SectionHeading from '../components/SectionHeading';

export default function Contact() {
  return (
    <div className="space-y-16">
      <SectionHeading
        eyebrow="Contact Us"
        title="We are here to help"
        description="Questions about services, shipping, U-Haul availability, or store hours? Contact our team."
      />

      <section className="grid gap-8 rounded-3xl border border-maple-200 bg-maple-50/70 p-8 shadow-soft sm:p-10 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-bold text-maple-800">Contact Details</h3>
          <p className="mt-3 text-slate-700">Phone: (416) 555-0100</p>
          <p className="text-slate-700">Email: hello@completemart.ca</p>
          <p className="mt-4 text-slate-700">Business Support Hours: Mon-Fri, 9:00 AM - 6:00 PM</p>
        </div>
        <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-maple-200 px-4 py-3 outline-none ring-maple-300 focus:ring"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-maple-200 px-4 py-3 outline-none ring-maple-300 focus:ring"
          />
          <textarea
            rows="4"
            placeholder="How can we help?"
            className="w-full rounded-xl border border-maple-200 px-4 py-3 outline-none ring-maple-300 focus:ring"
          />
          <button type="submit" className="rounded-full bg-maple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-maple-700">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
