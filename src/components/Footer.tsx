import { Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Refugee Uplift" className="h-8 w-auto brightness-0 invert" />
              <span className="text-xl font-bold tracking-tight">Refugee Uplift</span>
            </div>
            <p className="text-white/65 text-sm leading-relaxed max-w-xs">
              Connecting refugee families in Georgia with the transportation and resources they need to build independent, self-sufficient lives.
            </p>
            <div className="flex items-center gap-2 text-warm text-sm">
              <Heart className="w-4 h-4 fill-warm" />
              <span>Student-led · Community-driven · 501(c)(3)</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">
              Contact
            </h4>
            <a
              href="mailto:refugee.uplift@gmail.com"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              refugee.uplift@gmail.com
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">
              Pages
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'Car Donations', to: '/car-donations' },
                { label: 'Our Story', to: '/our-story' },
                { label: 'Our Team', to: '/team' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Refugee Uplift. All rights reserved.</p>
          <p>A registered 501(c)(3) nonprofit organization.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
