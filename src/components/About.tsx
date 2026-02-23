import { ArrowRight, Car, Key, BookOpen, Users, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const carActions = [
  {
    icon: Car,
    title: 'Donate a Vehicle',
    description: "Have a car you no longer need? Your donation directly transforms a family's daily life, enabling commutes to work, trips to the doctor, and school runs.",
    color: 'text-warm',
    bg: 'bg-warm/8',
  },
  {
    icon: Key,
    title: 'Request a Vehicle',
    description: "Are you a refugee family in need of reliable transportation? Apply through our program and we'll work to connect you with a generous donor in the community.",
    color: 'text-hope',
    bg: 'bg-hope/8',
  },
];

const tutoringOptions = [
  {
    icon: Users,
    title: 'Request Tutoring',
    description: 'Are you a refugee student or family looking for academic support? We match students with volunteer tutors at no cost.',
    cta: 'Request a tutor',
    href: 'https://forms.gle/M4iWMtZQbsHXgC387',
  },
  {
    icon: UserPlus,
    title: 'Mentor Application',
    description: 'Interested in mentoring refugee students? Apply to become a mentor and help guide students toward academic success and long-term growth.',
    cta: 'Apply to mentor',
    href: 'https://forms.gle/iR3gVLEZjekcsfcv5',
  },
];

const About = () => {
  return (
    <>
      {/* ── Car Donations Section ── */}
      <section id="car-donations" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header - centered */}
            <div className="mb-14 text-center">
              <div className="inline-flex items-center gap-2 bg-warm/10 text-warm text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-warm/20">
                <Car className="w-3.5 h-3.5" />
                Primary Program
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                Community Car{' '}
                <span className="text-warm">Donation Program</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Transportation is the single greatest obstacle facing newly arrived refugee families. Without a vehicle, accessing employment, healthcare, and education becomes nearly impossible. This program bridges that gap, one car at a time.
              </p>
              <Link
                to="/car-donations"
                className="group inline-flex items-center gap-2 px-5 py-3 bg-trust text-white font-semibold rounded-xl hover:bg-trust/90 transition-all duration-200 shadow-sm hover:-translate-y-0.5 hover:shadow-soft"
              >
                Learn more & get involved
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* 2-action grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {carActions.map((action) => (
                <Link
                  key={action.title}
                  to="/car-donations"
                  className="group flex flex-col gap-4 p-6 bg-white rounded-2xl border border-border hover:border-warm/30 hover:shadow-card transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className={`w-11 h-11 rounded-xl ${action.bg} flex items-center justify-center`}>
                    <action.icon className={`w-5 h-5 ${action.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1.5 group-hover:text-trust transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {action.description}
                    </p>
                  </div>
                  <span className={`mt-auto text-xs font-semibold ${action.color} flex items-center gap-1`}>
                    Get started <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* ── Tutoring Section ── */}
      <section id="tutoring" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header — centered */}
            <div className="mb-14 text-center">
              <div className="inline-flex items-center gap-2 bg-hope/10 text-hope text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-hope/20">
                <BookOpen className="w-3.5 h-3.5" />
                Supporting Program
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                Tutoring &{' '}
                <span className="text-hope">Mentorship</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Since 2020, we have connected student volunteers with refugee families in Clarkston for one-on-one academic support, language help, and mentorship. Education remains central to long-term self-sufficiency.
              </p>
            </div>

            {/* Tutoring cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {tutoringOptions.map((option) => (
                <div
                  key={option.title}
                  className="flex flex-col gap-4 p-7 bg-surface rounded-2xl border border-border"
                >
                  <div className="w-11 h-11 rounded-xl bg-hope/10 flex items-center justify-center">
                    <option.icon className="w-5 h-5 text-hope" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-2">{option.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                  <a
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-hope hover:text-hope/80 transition-colors"
                  >
                    {option.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
