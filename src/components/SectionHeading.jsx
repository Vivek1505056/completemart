export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-maple-700">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base text-slate-600 sm:text-lg">{description}</p>}
    </div>
  );
}
