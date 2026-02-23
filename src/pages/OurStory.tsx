import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const milestones = [
  {
    year: '2020',
    title: 'Where It Began',
    description:
      'A small group of high school students in Clarkston, GA saw a need and acted on it. They began distributing laptops and school supplies to a handful of refugee families in their neighborhood. No organization, no budget, just a desire to help.',
  },
  {
    year: '2021',
    title: 'Building a Foundation',
    description:
      'What started as informal help evolved into a structured volunteer network. The team hosted its first community meet-and-greet, launched fundraising events for the Afghan Education Support Initiative, and onboarded its first cohort of student tutors and refugee students.',
  },
  {
    year: '2022',
    title: 'Growing Our Reach',
    description:
      'Refugee Uplift expanded its tutoring operations, reached new families from Afghanistan and other countries, and held its first annual volunteer event. Strategic planning began to formalize the organization and build sustainable programs.',
  },
  {
    year: '2023',
    title: 'Formalizing & Scaling',
    description:
      'The organization automated its onboarding process, inducting over 50 refugee students in a single Clarkston event. Quarterly recognition events were introduced to honor standout volunteers, and the leadership team grew to include dedicated student directors.',
  },
  {
    year: '2025',
    title: 'A New Chapter',
    description:
      'Recognizing that transportation had become the single largest barrier for newly arrived refugee families, especially following cuts to federal resettlement support, Refugee Uplift launched the Community Car Donation Program in partnership with six local masjids across Georgia.',
  },
];

const OurStory = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-16">
        {/* ── Header ── */}
        <section className="py-20 bg-surface border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-trust/8 text-trust text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6 border border-trust/15">
                <Heart className="w-3.5 h-3.5" />
                Our Story
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-6 leading-tight">
                Five Years of Showing Up
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Refugee Uplift was not built overnight. It grew out of a simple conviction held by a group of students in Clarkston, Georgia: that showing up for your community, consistently, humbly, and practically, is how change happens.
              </p>
            </div>
          </div>
        </section>

        {/* ── Mission Statement ── */}
        <section className="py-16 bg-white border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-trust rounded-2xl p-10 text-white text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">Our Mission</h2>
                <p className="text-white/85 text-lg leading-relaxed">
                  To support refugee families in Georgia by removing the practical barriers that stand between them and a stable, self-sufficient life, beginning with transportation, rooted in education, and sustained by community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
                  Our Journey
                </h2>
                <p className="text-muted-foreground">
                  From a handful of laptops to a statewide transportation program.
                </p>
              </div>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-trust via-hope to-warm" />

                <div className="space-y-10">
                  {milestones.map((item, i) => (
                    <div key={item.year} className="relative flex gap-8 pl-12">
                      {/* Dot */}
                      <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-white border-2 border-trust flex items-center justify-center shrink-0 z-10">
                        <span className="text-[9px] font-black text-trust leading-none">{item.year}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-2">
                        <div className="inline-block text-xs font-bold text-trust bg-trust/8 px-2.5 py-1 rounded-full border border-trust/15 mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {item.description}
                        </p>
                        {i === milestones.length - 1 && (
                          <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-warm">
                            <span className="w-2 h-2 bg-warm rounded-full animate-pulse" />
                            Where we are today
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-surface border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-extrabold text-foreground tracking-tight mb-3">
                Be part of the next chapter
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you want to donate a car, volunteer as a tutor, or join our leadership team, there is a place for you here.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/car-donations"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-warm text-white font-semibold rounded-xl hover:bg-warm/90 transition-all duration-200 shadow-sm hover:-translate-y-0.5"
                >
                  Car Donation Program
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/team"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-foreground font-semibold rounded-xl border-2 border-border hover:border-trust/40 hover:bg-muted transition-all duration-200"
                >
                  Meet the Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default OurStory;
