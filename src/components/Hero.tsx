import { Button } from '@/components/ui/button';
import { Heart, Users, BookOpen, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Empowering Refugee Students Through
                <span className="text-transparent bg-gradient-hero bg-clip-text"> Education & Hope</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                A student-led nonprofit providing one-on-one tutoring, mentorship, and educational support to refugee families. Together, we're building bridges to brighter futures.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfN2vR4br6G9wB_4Gr_kOmqVZWS6UOLp-ZEl3617DQQlyTzXQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg" className="group">
                  Apply to Lead
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  aboutSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:order-last order-first">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src={heroImage}
                alt="Students learning together in a supportive environment"
                className="relative rounded-2xl shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;