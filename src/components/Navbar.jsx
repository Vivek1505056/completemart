import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Our Services' },
  { path: '/locations', label: 'Store Locations' },
  { path: '/contact', label: 'Contact Us' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'border-b border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/restaurant/cover/ba842e0b-9d5e-49ad-a20d-60722af507ed.png"
              alt="Complete Mart Logo"
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <div className="text-2xl font-bold text-gray-900">Complete Mart</div>
              <div className="text-xs text-gray-600">Your Community Store</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                    isActive
                      ? 'text-primary bg-red-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="border-t border-gray-200 pt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg mb-1 transition-colors text-sm font-medium ${
                    isActive
                      ? 'text-primary bg-red-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
