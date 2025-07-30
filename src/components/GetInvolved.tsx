import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { UserPlus, Heart, Megaphone, Mail, ExternalLink } from 'lucide-react';

const GetInvolved = () => {
  return (
    <section id="get-involved" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Movement
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              There are many ways to get involved and make a difference in the lives of refugee students. 
              Whether you want to lead, volunteer, donate, or stay informed, we welcome your support.
            </p>
          </div>

          {/* Leadership Opportunities */}
          <div className="mb-16">
            <Card className="shadow-card border-2 border-black bg-gradient-hero text-white overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <UserPlus className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl">Apply for Leadership</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6 text-white/90">
                  Join our student leadership team and help grow Refugee Uplift's impact. 
                  We're looking for passionate undergraduate students to fill key leadership roles.
                </p>
                <div className="space-y-4 mb-6 text-white/90">
                  <div>
                    <h4 className="font-semibold mb-1">Director of Outreach:</h4>
                    <p className="text-sm">Build relationships with organizations, coordinate partnerships, and lead community engagement efforts.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Director of Marketing:</h4>
                    <p className="text-sm">Manage social media, design campaigns, and develop strategies to raise awareness for our mission.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Co-Director of Education:</h4>
                    <p className="text-sm">Oversee tutoring programs, curriculum development, and educational initiatives for refugee students.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Director of Finance & Fundraising:</h4>
                    <p className="text-sm">Handle budgeting, fundraising events, grant writing, and financial planning for the organization.</p>
                  </div>
                </div>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfN2vR4br6G9wB_4Gr_kOmqVZWS6UOLp-ZEl3617DQQlyTzXQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    Apply for Leadership
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Volunteer and Donate */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Volunteer */}
            <Card className="shadow-card border-2 border-black hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-hope/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-hope" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">Volunteer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="mb-6 text-muted-foreground">
                      Make a direct impact by volunteering as a tutor or mentor. 
                      We're looking for high school students who want to make a difference.
                    </p>
                    <ul className="space-y-2 mb-6 text-muted-foreground">
                      <li>• One-on-one tutoring sessions</li>
                      <li>• Group study support</li>
                      <li>• Event assistance</li>
                      <li>• Administrative support</li>
                    </ul>
                  </div>
                  <div className="ml-6">
                    <a 
                      href="https://forms.gle/nLQVVhgKoLsvsvzm9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline">
                        Volunteer Today
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Donation */}
            <Card className="shadow-card border-2 border-black bg-hope/5 hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-hope/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-hope" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">Support Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  Your donation directly supports tutoring programs, educational materials, 
                  and expanding our reach to more refugee families.
                </p>
                <div className="text-center">
                  <p className="text-lg font-semibold text-foreground">
                    Zelle: refugee.uplift@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;