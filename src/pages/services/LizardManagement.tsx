import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Target } from 'lucide-react';

const LizardManagement = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Target className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Lizard Management</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Humane and effective lizard control solutions for your property
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=400&fit=crop&auto=format"
                alt="Lizard Management Service"
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Professional Lizard Control</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                While lizards can be beneficial by eating insects, they can become a nuisance when they invade your living spaces. Our humane lizard management services focus on exclusion methods and habitat modification to keep lizards outside where they belong.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Approach</h3>
                  <ul className="text-lg text-muted-foreground space-y-3">
                    <li>• Entry point identification and sealing</li>
                    <li>• Habitat modification recommendations</li>
                    <li>• Humane removal methods</li>
                    <li>• Natural repellent applications</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Prevention Tips</h3>
                  <ul className="text-lg text-muted-foreground space-y-3">
                    <li>• Remove food sources (insects)</li>
                    <li>• Eliminate hiding places</li>
                    <li>• Seal cracks and crevices</li>
                    <li>• Reduce outdoor lighting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Get Your Free Quote</h2>
                <p className="text-lg text-muted-foreground">Contact us for humane lizard control services</p>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input placeholder="Your Name" className="h-12" />
                  <Input placeholder="Phone Number" type="tel" className="h-12" />
                </div>
                <Input placeholder="Email Address" type="email" className="h-12" />
                <Input placeholder="Property Address" className="h-12" />
                <Textarea placeholder="Describe your lizard concerns..." className="min-h-32" />
                <Button className="w-full h-12 text-lg">Get Lizard Control Quote</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LizardManagement;