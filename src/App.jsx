import { Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Locations from './pages/Locations';
import Promotions from './pages/Promotions';
import Contact from './pages/Contact';

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </SiteLayout>
  );
}
