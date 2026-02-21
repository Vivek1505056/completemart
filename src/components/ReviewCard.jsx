export default function ReviewCard({ name, rating, quote }) {
  return (
    <article className="rounded-2xl border border-maple-200 bg-maple-50/80 p-6 shadow-soft">
      <div className="text-maple-600">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</div>
      <p className="mt-3 text-slate-700">"{quote}"</p>
      <p className="mt-4 text-sm font-semibold text-maple-800">- {name}</p>
    </article>
  );
}
