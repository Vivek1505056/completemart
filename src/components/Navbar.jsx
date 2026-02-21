import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/locations', label: 'Store Locations' },
  { to: '/promotions', label: 'Promotions' },
  { to: '/contact', label: 'Contact Us' }
];

function linkStyle({ isActive }) {
  return `rounded-full px-3 py-2 text-sm font-medium transition ${
    isActive ? 'bg-maple-600 text-white' : 'text-maple-800 hover:bg-maple-100'
  }`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-maple-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="text-xl font-extrabold text-maple-700">
          Complete Mart
        </NavLink>

        <button
          type="button"
          className="rounded-md border border-maple-300 px-3 py-2 text-sm font-semibold text-maple-800 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkStyle}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {open && (
        <nav className="border-t border-maple-200 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkStyle} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
