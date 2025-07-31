import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Shield, Zap } from 'lucide-react';

const SnakeRepellent = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-green-100 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Shield className="h-16 w-16 text-green-700 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Snake Repellent Services</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Keep your home and surroundings safe from snakes with our effective and humane repellent solutions
              </p>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src="https://i.pinimg.com/736x/04/19/d3/0419d3d399492744b93cff196db625ca.jpg"
                alt="Snake Repellent Service"
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">Effective Snake Prevention & Repellent</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Snakes can appear unexpectedly and pose risks to your family and pets. Our snake repellent service combines habitat modification,
                  expert assessment, and safe repellent applications to minimize snake presence around your property.
                </p>

                <h3 className="text-2xl font-bold text-foreground mb-4">Our Snake Repellent Process</h3>
                <ul className="text-lg text-muted-foreground space-y-3 mb-6">
                  <li>
                    <Zap className="inline-block h-5 w-5 text-green-600 mr-2" aria-hidden="true" />
                    Detailed site inspection to identify snake-friendly hideouts and entry points
                  </li>
                  <li>
                    <Zap className="inline-block h-5 w-5 text-green-600 mr-2" aria-hidden="true" />
                    Habitat modification (clearing debris, sealing gaps, controlling rodents) to reduce attractants
                  </li>
                  <li>
                    <Zap className="inline-block h-5 w-5 text-green-600 mr-2" aria-hidden="true" />
                    Application of eco-safe snake repellent formulations in strategic zones
                  </li>
                  <li>
                    <Zap className="inline-block h-5 w-5 text-green-600 mr-2" aria-hidden="true" />
                    Installation of physical barriers where applicable (e.g., gap sealing, fencing)
                  </li>
                  <li>
                    <Zap className="inline-block h-5 w-5 text-green-600 mr-2" aria-hidden="true" />
                    Education for homeowners on do’s and don’ts to avoid attracting snakes
                  </li>
                  <li>
                    <Zap className="inline-block h-5 w-5 text-green-600 mr-2" aria-hidden="true" />
                    Scheduled follow-ups and reapplications for sustained protection
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our Snake Repellent?</h3>
                <ul className="text-lg text-muted-foreground space-y-3 mb-8">
                  <li>• Trained technicians with experience in reptile-safe management</li>
                  <li>• Non-lethal and environmentally friendly repellent solutions</li>
                  <li>• Proactive habitat control to prevent future occurrences</li>
                  <li>• Customized protection plan based on property assessment</li>
                  <li>• Post-service guidance and follow-up visits</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Request a Free Snake Safety Assessment</h2>
                <p className="text-lg text-muted-foreground">
                  Get in touch for a professional inspection and personalized snake repellent plan
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input placeholder="Your Name" className="h-12" />
                  </div>
                  <div>
                    <Input placeholder="Phone Number" type="tel" className="h-12" />
                  </div>
                </div>
                <div>
                  <Input placeholder="Email Address" type="email" className="h-12" />
                </div>
                <div>
                  <Input placeholder="Property Address" className="h-12" />
                </div>
                <div>
                  <Textarea
                    placeholder="Describe any snake sightings or habitat concerns..."
                    className="min-h-32"
                  />
                </div>
                <Button className="w-full h-12 text-lg">
                  Get Free Assessment
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SnakeRepellent;
