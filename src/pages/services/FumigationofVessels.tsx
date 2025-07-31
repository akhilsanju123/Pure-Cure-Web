import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Ship } from 'lucide-react';

const FumigationOfVessels = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-sky-100">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Ship className="h-16 w-16 text-blue-700 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Fumigation of Vessels</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Maintain biosecurity and protect cargo with expert vessel fumigation using industry-standard protocols.
              </p>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src="https://i.pinimg.com/1200x/81/c2/d0/81c2d03a14625f4e9c698fa45d5c572e.jpg"
                alt="Vessel Fumigation Service"
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
                <h2 className="text-3xl font-bold text-foreground mb-6">Secure Vessel & Cargo Protection</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Fumigating vessels is critical for preventing the spread of pests, protecting cargo integrity, and complying with international quarantine standards.
                  Our vessel fumigation service ensures thorough eradication of quarantine pests with minimal operational disruption.
                </p>

                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vessel Fumigation Process</h3>
                <ul className="text-lg text-muted-foreground space-y-3 mb-6">
                  <li>• Pre-fumigation assessment and clearance planning</li>
                  <li>• Sealing of cargo holds and affected compartments</li>
                  <li>• Selection of appropriate fumigant based on vessel type and cargo</li>
                  <li>• Controlled release and exposure monitoring to ensure efficacy</li>
                  <li>• Aeration and gas clearance before safe re-entry</li>
                  <li>• Certification and documentation for regulatory compliance</li>
                </ul>

                <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our Vessel Fumigation?</h3>
                <ul className="text-lg text-muted-foreground space-y-3 mb-8">
                  <li>• Certified maritime fumigation specialists</li>
                  <li>• Adherence to ISPM 15 / international quarantine standards</li>
                  <li>• Customized protocols per vessel and cargo type</li>
                  <li>• Fast turnaround to minimize berth time</li>
                  <li>• Detailed reporting and export documentation</li>
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
                <h2 className="text-3xl font-bold text-foreground mb-4">Request Vessel Fumigation Quote</h2>
                <p className="text-lg text-muted-foreground">
                  Contact us for a comprehensive vessel assessment and tailored fumigation plan.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input placeholder="Your Name" className="h-12" />
                  </div>
                  <div>
                    <Input placeholder="Contact Number" type="tel" className="h-12" />
                  </div>
                </div>
                <div>
                  <Input placeholder="Email Address" type="email" className="h-12" />
                </div>
                <div>
                  <Input placeholder="Vessel Name / ID" className="h-12" />
                </div>
                <div>
                  <Textarea
                    placeholder="Provide details about cargo, port location, and any previous pest issues..."
                    className="min-h-32"
                  />
                </div>
                <Button className="w-full h-12 text-lg">Get Fumigation Quote</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FumigationOfVessels;
