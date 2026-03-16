import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="border-t border-pax-border py-12">
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 text-center space-y-2">
      <p className="text-pax-secondary text-sm">
        Pax Inovitae · Eastern Europe and the Middle East · <a href="mailto:pavloparaschakis@gmail.com" className="hover:text-pax-text transition-colors">pavloparaschakis@gmail.com</a>
      </p>
      <p className="text-pax-tertiary text-xs">
        Private AI Infrastructure for Enterprise · Eastern Europe and the Middle East
      </p>
      <p className="text-pax-tertiary text-xs">
        © 2026 Pax Inovitae
      </p>
    </div>
  </footer>
);
