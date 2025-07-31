import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Zap } from 'lucide-react';

const RodentManagement = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Rodent Management</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Effective rodent control solutions to keep your property safe and hygienic
              </p>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1506905925-eb800648ba68?w=800&h=400&fit=crop&auto=format"
                alt="Rodent Management Service"
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
                <h2 className="text-3xl font-bold text-foreground mb-6">Professional Rodent Control</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Rodents pose serious health risks and can cause significant property damage. Our comprehensive rodent management program eliminates current infestations and prevents future invasions through strategic placement of control measures and entry point sealing.
                </p>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Rodent Control Approach</h3>
                <ul className="text-lg text-muted-foreground space-y-3 mb-6">
                  <li>• Thorough property inspection to identify entry points and nesting areas</li>
                  <li>• Species identification for targeted treatment strategies</li>
                  <li>• Strategic placement of tamper-resistant bait stations</li>
                  <li>• Sealing of entry points to prevent future infestations</li>
                  <li>• Sanitation recommendations and habitat modification</li>
                  <li>• Regular monitoring and maintenance visits</li>
                </ul>

                <h3 className="text-2xl font-bold text-foreground mb-4">Health Risks of Rodent Infestations</h3>
                <ul className="text-lg text-muted-foreground space-y-3 mb-8">
                  <li>• Disease transmission through droppings and urine</li>
                  <li>• Contamination of food and surfaces</li>
                  <li>• Structural damage from gnawing and nesting</li>
                  <li>• Fire hazards from damaged electrical wiring</li>
                  <li>• Secondary pest infestations (fleas, mites)</li>
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
                <h2 className="text-3xl font-bold text-foreground mb-4">Get Your Free Quote</h2>
                <p className="text-lg text-muted-foreground">
                  Contact us for immediate rodent control and prevention services
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
                    placeholder="Describe your rodent problem or signs you've noticed..."
                    className="min-h-32"
                  />
                </div>
                <Button className="w-full h-12 text-lg">
                  Get Emergency Rodent Control
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

export default RodentManagement;