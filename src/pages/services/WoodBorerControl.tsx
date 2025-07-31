import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {  Box } from 'lucide-react';

const WoodBorerControl = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-amber-100 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Box className="h-16 w-16 text-amber-700 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Wood Borer Control</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Protect your wooden assets from destructive borers with precise inspection and targeted treatment.
              </p>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src="https://i.pinimg.com/736x/7d/81/d9/7d81d9b29e696ee319081ed212235eac.jpg"
                alt="Wood Borer Control Service"
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
                <h2 className="text-3xl font-bold text-foreground mb-6">Complete Wood Borer Protection</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Wood borers can silently eat away at furniture, beams, and structural timber, weakening integrity over time. Our wood borer control service
                  combines deep inspection, species-specific treatment, and preventive sealing to preserve and extend the life of your wooden structures.
                </p>

                <h3 className="text-2xl font-bold text-foreground mb-4">Our Wood Borer Control Process</h3>
                <ul className="text-lg text-muted-foreground space-y-3 mb-6">
                  <li>• Thorough inspection of wood components using visual and tool-assisted diagnostics</li>
                  <li>• Identification of borer species and infestation severity</li>
                  <li>• Targeted application of residual insecticides into galleries and affected zones</li>
                  <li>• Fumigation or localized injection where necessary for deep-seated infestations</li>
                  <li>• Sealing and treating exposed wood to prevent re-infestation</li>
                  <li>• Follow-up checks and maintenance recommendations</li>
                </ul>

                <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our Wood Borer Services?</h3>
                <ul className="text-lg text-muted-foreground space-y-3 mb-8">
                  <li>• Experienced technicians specializing in timber pest management</li>
                  <li>• Species-specific, minimally invasive treatment plans</li>
                  <li>• Eco-conscious options that protect wood without harming occupants</li>
                  <li>• Preventive measures to stop future infestations</li>
                  <li>• Post-treatment monitoring and advice</li>
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
                <h2 className="text-3xl font-bold text-foreground mb-4">Get Your Wood Inspection Quote</h2>
                <p className="text-lg text-muted-foreground">
                  Reach out for a detailed wood borer assessment and customized control strategy
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
                  <Input placeholder="Property/Item Location" className="h-12" />
                </div>
                <div>
                  <Textarea
                    placeholder="Describe any visible wood damage, holes, or suspected infestation..."
                    className="min-h-32"
                  />
                </div>
                <Button className="w-full h-12 text-lg">
                  Request Inspection
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

export default WoodBorerControl;
