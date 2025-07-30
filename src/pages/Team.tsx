import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ibrahimImg from '@/assets/ibrahim.jpg';
import rayaanImg from '@/assets/rayaan.jpg';

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* Executive Team */}
        <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Executive Team
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Team Members */}
            <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              {/* Ibrahim Mohammad */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-soft">
                    <img 
                      src={ibrahimImg} 
                      alt="Ibrahim Mohammad" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Ibrahim Mohammad
                </h3>
                <p className="text-muted-foreground">
                  Student at Augusta University
                </p>
              </div>

              {/* Rayyaan Rahman */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-soft">
                    <img 
                      src={rayaanImg} 
                      alt="Rayaan Rahman" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Rayaan Rahman
                </h3>
                <p className="text-muted-foreground">
                  Student at Georgia Tech
                </p>
              </div>
            </div>

            {/* Leadership Applications Section */}
            <div className="mt-16 text-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-card border-2 border-black p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Join Our Leadership Team
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  We're actively looking for passionate undergraduate students to join our leadership team and help grow Refugee Uplift's impact. If you're interested in making a difference, please apply!
                </p>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfN2vR4br6G9wB_4Gr_kOmqVZWS6UOLp-ZEl3617DQQlyTzXQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium">
                    Apply for Leadership
                  </button>
                </a>
              </div>
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