import Navbar from './Navbar';
import Footer from './Footer';

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-20">{children}</main>
      <Footer />
    </div>
  );
}
