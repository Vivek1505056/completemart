export default function Footer() {
  return (
    <footer className="mt-24 border-t border-maple-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600 sm:px-6 lg:px-8">
        <p className="font-semibold text-maple-800">Complete Mart</p>
        <p className="mt-1">Your neighbourhood convenience store, shipping hub, and daily essentials stop.</p>
        <p className="mt-3 text-xs">© {new Date().getFullYear()} Complete Mart. All rights reserved.</p>
      </div>
    </footer>
  );
}
