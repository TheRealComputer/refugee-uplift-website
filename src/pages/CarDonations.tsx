import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Car, Key, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

const FORM_LINK = 'https://forms.gle/6WnGV6fUCwzbc1pm8';

const steps = [
  {
    number: '01',
    title: 'Submit Your Form',
    description:
      'Whether you want to donate or request a vehicle, fill out our simple form with the relevant details. Vehicle documentation can be uploaded directly.',
  },
  {
    number: '02',
    title: 'Our Team Reviews',
    description:
      "We review every submission and verify the details. For donations, we assess vehicle condition. For requests, we assess family need and connect them with available donors.",
  },
  {
    number: '03',
    title: 'Lives Are Changed',
    description:
      'We facilitate the transfer, handle the paperwork, and follow up with both parties. A donated vehicle means a family can get to work, school, and the doctor.',
  },
];

const actions = [
  {
    icon: Car,
    title: 'Donate a Vehicle',
    description:
      'Have a vehicle you no longer need? Whether it is a car, truck, or van, your donation can become a lifeline for a refugee family. We handle the logistics and documentation.',
    bullets: [
      'Any make, model, or year considered',
      'We coordinate the title transfer',
      'Tax-deductible contribution',
      'Upload vehicle docs directly in the form',
    ],
    cta: 'Donate a car',
    color: 'warm',
    formLink: FORM_LINK,
  },
  {
    icon: Key,
    title: 'Request a Vehicle',
    description:
      'Are you a refugee family in need of reliable transportation? Tell us about your situation and we will work to match you with a donor. There is no cost to apply.',
    bullets: [
      'Open to recently resettled refugee families',
      'No cost to apply',
      'We match based on need and availability',
      'Support through the entire process',
    ],
    cta: 'Apply for a vehicle',
    color: 'hope',
    formLink: FORM_LINK,
  },
];

const colorMap: Record<string, { badge: string; icon: string; border: string; btn: string }> = {
  warm: {
    badge: 'bg-warm/10 text-warm border-warm/20',
    icon: 'bg-warm/10 text-warm',
    border: 'hover:border-warm/40',
    btn: 'bg-warm hover:bg-warm/90 text-white',
  },
  hope: {
    badge: 'bg-hope/10 text-hope border-hope/20',
    icon: 'bg-hope/10 text-hope',
    border: 'hover:border-hope/40',
    btn: 'bg-hope hover:bg-hope/90 text-white',
  },
  trust: {
    badge: 'bg-trust/10 text-trust border-trust/20',
    icon: 'bg-trust/10 text-trust',
    border: 'hover:border-trust/40',
    btn: 'bg-trust hover:bg-trust/90 text-white',
  },
  secondary: {
    badge: 'bg-secondary/10 text-secondary border-secondary/20',
    icon: 'bg-secondary/10 text-secondary',
    border: 'hover:border-secondary/40',
    btn: 'bg-secondary hover:bg-secondary/90 text-white',
  },
};

const CarDonations = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-16">
        {/* ── Page Header ── */}
        <section className="py-20 bg-gradient-to-br from-trust via-trust/90 to-[hsl(240,60%,30%)] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                <Car className="w-3.5 h-3.5" />
                Community Car Donation Program
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                A Car Can Change
                <br />
                Everything
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                For a newly arrived refugee family, a reliable vehicle is not a luxury. It is the key to employment, healthcare, education, and community. This program connects generous donors with families who need it most.
              </p>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-20 bg-surface border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
                  How It Works
                </h2>
                <p className="text-muted-foreground">Simple, transparent, and community-driven.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {steps.map((step) => (
                  <div key={step.number} className="relative bg-white rounded-2xl p-7 border border-border shadow-card">
                    <span className="text-5xl font-black text-trust/10 leading-none block mb-4">
                      {step.number}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 Action Cards ── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
                  How Would You Like to Help?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Whether you have a car to give or need a vehicle, we connect generous donors with families who need it most.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {actions.map((action) => {
                  const colors = colorMap[action.color];
                  return (
                    <div
                      key={action.title}
                      className={`flex flex-col p-7 bg-white rounded-2xl border-2 border-border ${colors.border} hover:shadow-card transition-all duration-200`}
                    >
                      {/* Icon + title */}
                      <div className="flex items-start gap-4 mb-5">
                        <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center shrink-0`}>
                          <action.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{action.title}</h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                        {action.description}
                      </p>

                      {/* Bullets */}
                      <ul className="space-y-2 mb-6 flex-1">
                        {action.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-hope shrink-0 mt-0.5" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      {action.formLink && (
                        <a
                          href={action.formLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 ${colors.btn} font-semibold text-sm rounded-xl transition-all duration-200 shadow-sm`}
                        >
                          {action.cta}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-16 bg-white border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight mb-4">
                Ready to make a difference?
              </h2>
              <p className="text-muted-foreground mb-8">
                Every action, big or small, helps a family gain access to a more independent life.
              </p>
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-warm text-white font-bold text-base rounded-xl hover:bg-warm/90 transition-all duration-200 shadow-md hover:shadow-hover hover:-translate-y-0.5"
              >
                Open the Form
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                Questions? Email us at{' '}
                <a href="mailto:refugee.uplift@gmail.com" className="text-trust hover:underline font-medium">
                  refugee.uplift@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CarDonations;
