import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Bug } from 'lucide-react';

const TermiteManagement = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Bug className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Termite Management</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Protect your property from destructive termites with our comprehensive management solutions
              </p>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1558618666-c60fa7d28c8c?w=800&h=400&fit=crop&auto=format"
                alt="Termite Management Service"
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
                <h2 className="text-3xl font-bold text-foreground mb-6">Comprehensive Termite Protection</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Termites can silently cause significant damage to your property's structure. Our termite management services provide thorough protection through advanced inspection techniques, targeted treatments, and ongoing monitoring to safeguard your investment.
                </p>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Termite Management Process</h3>
                <ul className="text-lg text-muted-foreground space-y-3 mb-6">
                  <li>• Comprehensive property inspection using advanced detection tools</li>
                  <li>• Identification of termite species and infestation levels</li>
                  <li>• Customized treatment plans based on your property's specific needs</li>
                  <li>• Application of eco-friendly, effective termiticides</li>
                  <li>• Installation of monitoring stations for ongoing protection</li>
                  <li>• Regular follow-up inspections and maintenance</li>
                </ul>

                <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our Termite Services?</h3>
                <ul className="text-lg text-muted-foreground space-y-3 mb-8">
                  <li>• Licensed and certified termite control specialists</li>
                  <li>• Latest technology and treatment methods</li>
                  <li>• Environmentally safe and family-friendly solutions</li>
                  <li>• Comprehensive warranty on all treatments</li>
                  <li>• 24/7 emergency response available</li>
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
                  Contact us today for a professional termite inspection and customized treatment plan
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
                    placeholder="Tell us about your termite concerns or any signs you've noticed..."
                    className="min-h-32"
                  />
                </div>
                <Button className="w-full h-12 text-lg">
                  Get Free Inspection Quote
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

export default TermiteManagement;