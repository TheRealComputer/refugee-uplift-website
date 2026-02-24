import { useState, useEffect } from 'react';
import { Menu, X, Car, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'Our Story', href: '/our-story', type: 'link' },
    { name: 'Our Team', href: '/team', type: 'link' },
    { name: 'Car Donations', href: '/car-donations', type: 'link', highlight: true },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/98 backdrop-blur-md shadow-card border-b border-border'
        : 'bg-white border-b border-border'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Refugee Uplift" className="h-9 w-auto" />
            <span className="text-xl font-bold text-trust tracking-tight">
              Refugee Uplift
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/admin"
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive('/admin')
                  ? 'bg-trust/8 text-trust'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            {navLinks.map((item) =>
              item.highlight ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center gap-1.5 ml-2 px-4 py-2 bg-warm text-white text-sm font-semibold rounded-lg hover:bg-warm/90 transition-all duration-200 shadow-sm"
                >
                  <Car className="w-4 h-4" />
                  {item.name}
                </Link>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-trust/8 text-trust'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground/70 hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-3 border-t border-border animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1 pb-2">
              <Link
                to="/admin"
                className={`flex items-center gap-2 mx-1 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive('/admin')
                    ? 'bg-trust/8 text-trust'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
              {navLinks.map((item) =>
                item.highlight ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center gap-2 mx-1 px-4 py-3 bg-warm text-white text-sm font-semibold rounded-lg"
                  >
                    <Car className="w-4 h-4" />
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`mx-1 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-trust/8 text-trust'
                        : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
