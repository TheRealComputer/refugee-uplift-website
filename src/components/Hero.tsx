import { ArrowRight, Car, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-surface to-transparent opacity-60" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-trust/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-warm/8 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-16 lg:py-24">
          {/* Left - content */}
          <div className="space-y-8 max-w-xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-trust/8 text-trust text-sm font-semibold px-4 py-2 rounded-full border border-trust/15">
              <span className="w-2 h-2 bg-trust rounded-full animate-pulse" />
              Serving Refugee Families in Georgia
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight">
                <span className="text-transparent bg-gradient-to-r from-trust via-trust/80 to-hope bg-clip-text">
                  Building Better Outcomes
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Our mission is to connect refugee families with resources they need. Learn more about what we specialize in below.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/car-donations"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-warm text-white font-semibold rounded-xl hover:bg-warm/90 transition-all duration-200 shadow-md hover:shadow-hover hover:-translate-y-0.5"
              >
                <Car className="w-5 h-5" />
                Car Donation Program
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <button
                onClick={() => document.getElementById('tutoring')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white text-foreground font-semibold rounded-xl border-2 border-border hover:border-trust/40 hover:bg-muted transition-all duration-200"
              >
                <BookOpen className="w-5 h-5 text-hope" />
                Tutoring Program
              </button>
            </div>

            {/* Social proof strip */}
            <div className="flex items-center justify-center gap-6 pt-2 border-t border-border">
              <div className="text-center">
                <p className="text-2xl font-bold text-trust">2020</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Founded</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-trust">Clarkston</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Georgia</p>
              </div>
            </div>
          </div>

          {/* Right - image */}
          <div className="relative lg:order-last order-first">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                src={heroImage}
                alt="Refugee Uplift community members"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
