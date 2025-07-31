import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Zap } from 'lucide-react';

const FlyingInsectManagement = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Flying Insect Management</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive solutions for all types of flying insect infestations
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1558168848-a8c1d8f0f5cb?w=800&h=400&fit=crop&auto=format"
                alt="Flying Insect Management Service"
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Professional Flying Insect Control</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Flying insects like flies, gnats, moths, and flying ants can be more than just annoying - they can spread disease and contaminate food. Our comprehensive flying insect management program uses targeted treatments and preventive measures to eliminate current infestations and prevent future problems.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Common Flying Insects We Control</h3>
                  <ul className="text-lg text-muted-foreground space-y-3 mb-6">
                    <li>• House flies and fruit flies</li>
                    <li>• Gnats and midges</li>
                    <li>• Moths and flying ants</li>
                    <li>• Drain flies and cluster flies</li>
                    <li>• Wasps and hornets</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Treatment Approach</h3>
                  <ul className="text-lg text-muted-foreground space-y-3 mb-6">
                    <li>• Source identification and elimination</li>
                    <li>• Targeted spray applications</li>
                    <li>• UV light traps installation</li>
                    <li>• Residual barrier treatments</li>
                    <li>• Ongoing monitoring programs</li>
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
                <p className="text-lg text-muted-foreground">
                  Contact us for effective flying insect control solutions
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input placeholder="Your Name" className="h-12" />
                  <Input placeholder="Phone Number" type="tel" className="h-12" />
                </div>
                <Input placeholder="Email Address" type="email" className="h-12" />
                <Input placeholder="Property Address" className="h-12" />
                <Textarea 
                  placeholder="Describe your flying insect problem..."
                  className="min-h-32"
                />
                <Button className="w-full h-12 text-lg">
                  Get Flying Insect Control Quote
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

export default FlyingInsectManagement;