import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ExternalLink, Users } from 'lucide-react';
import ibrahimImg from '@/assets/ibrahim.jpg';
import rayaanImg from '@/assets/rayaan.jpg';

const executives = [
  {
    name: 'Ibrahim Mohammad',
    credential: 'BS/MD Student · Medical College of Georgia',
    image: ibrahimImg,
  },
  {
    name: 'Rayaan Rahman',
    credential: 'Neuroscience · Georgia Tech',
    image: rayaanImg,
  },
];

const openRoles = [
  {
    title: 'Director of Outreach',
    description: 'Build partnerships with masjids, resettlement agencies, and community organizations. Lead engagement efforts to grow the car donation program.',
  },
  {
    title: 'Director of Marketing',
    description: 'Own social media, design campaigns, and craft the messaging that grows our donor and volunteer base.',
  },
  {
    title: 'Co-Director of Education',
    description: 'Oversee the tutoring and mentorship program, including volunteer coordination, student matching, and educational initiatives.',
  },
  {
    title: 'Director of Finance & Fundraising',
    description: 'Manage budgeting, fundraising events, grant writing, and the financial health of the organization.',
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-16">
        {/* ── Header ── */}
        <section className="py-20 bg-surface border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-trust/8 text-trust text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6 border border-trust/15">
                <Users className="w-3.5 h-3.5" />
                The Team
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-4 leading-tight">
                Executive Team
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Refugee Uplift is student-led and community-driven. Our founders bring the commitment, and our growing leadership team brings the capacity.
              </p>
            </div>
          </div>
        </section>

        {/* ── Executive members ── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10">
                {executives.map((member) => (
                  <div key={member.name} className="flex flex-col items-center text-center">
                    <div className="w-52 h-52 rounded-2xl overflow-hidden border-2 border-border shadow-card mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground tracking-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{member.credential}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Open Roles ── */}
        <section className="py-20 bg-surface border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
                  Join the Leadership Team
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  We are actively recruiting passionate undergraduate students for the following leadership roles. No prior nonprofit experience required. We care about drive and commitment to the mission.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {openRoles.map((role) => (
                  <div
                    key={role.title}
                    className="bg-white rounded-2xl p-6 border border-border shadow-card"
                  >
                    <h3 className="text-base font-bold text-foreground mb-2">{role.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfN2vR4br6G9wB_4Gr_kOmqVZWS6UOLp-ZEl3617DQQlyTzXQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-trust text-white font-bold rounded-xl hover:bg-trust/90 transition-all duration-200 shadow-sm hover:-translate-y-0.5 hover:shadow-soft"
                >
                  Apply for Leadership
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
