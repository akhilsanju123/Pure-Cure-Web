import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Box } from 'lucide-react';

const FumigationOfContainers = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-slate-100 to-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Box className="h-16 w-16 text-foreground mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Container Fumigation</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Secure your cargo and prevent pest contamination with professional container fumigation using compliant, effective protocols.
              </p>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src="https://i.pinimg.com/1200x/91/ec/2c/91ec2c8fafddf53e69501b3901a68da7.jpg"
                alt="Container Fumigation Service"
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
                <h2 className="text-3xl font-bold text-foreground mb-6">Trusted Container Fumigation</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Containers can harbor pests that threaten supply chains and violate quarantine regulations. Our container fumigation service ensures complete eradication of hidden infestations,
                  protecting cargo integrity from origin to destination.
                </p>

                <h3 className="text-2xl font-bold text-foreground mb-4">Our Container Fumigation Process</h3>
                <ul className="text-lg text-muted-foreground space-y-3 mb-6">
                  <li>• Pre-fumigation inspection and risk assessment</li>
                  <li>• Sealing and preparation of container to contain fumigant</li>
                  <li>• Selection of appropriate fumigant for commodity and container type</li>
                  <li>• Controlled application with monitored exposure time</li>
                  <li>• Aeration and clearance to ensure safety before handling</li>
                  <li>• Certification and documentation for customs/quarantine compliance</li>
                </ul>

                <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our Container Fumigation?</h3>
                <ul className="text-lg text-muted-foreground space-y-3 mb-8">
                  <li>• Certified fumigation experts with logistics experience</li>
                  <li>• Compliance with international phytosanitary standards</li>
                  <li>• Tailored solutions depending on cargo sensitivity</li>
                  <li>• Minimal delay to shipping schedules</li>
                  <li>• Detailed reporting and traceability</li>
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
                <h2 className="text-3xl font-bold text-foreground mb-4">Request Container Fumigation Quote</h2>
                <p className="text-lg text-muted-foreground">
                  Get a professional evaluation and customized fumigation plan for your containerized cargo.
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
                  <Input placeholder="Container ID / Shipment" className="h-12" />
                </div>
                <div>
                  <Textarea
                    placeholder="Detail cargo type, origin/destination, and any existing pest concerns..."
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

export default FumigationOfContainers;
