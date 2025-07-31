import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Shield } from 'lucide-react';

const CockroachManagement = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Cockroach Management</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional cockroach elimination and prevention services
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1633332290-1d5d8e8308e7?w=800&h=400&fit=crop&auto=format"
                alt="Cockroach Management Service"
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Effective Cockroach Control</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Cockroaches are among the most resilient pests, capable of spreading diseases and contaminating food sources. Our targeted cockroach management program uses advanced baiting systems and growth regulators to eliminate entire colonies and prevent reinfestation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Treatment Methods</h3>
                  <ul className="text-lg text-muted-foreground space-y-3">
                    <li>• Gel baiting in targeted locations</li>
                    <li>• Residual spray applications</li>
                    <li>• Growth regulator treatments</li>
                    <li>• Crack and crevice treatments</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Prevention Tips</h3>
                  <ul className="text-lg text-muted-foreground space-y-3">
                    <li>• Eliminate water sources</li>
                    <li>• Proper food storage</li>
                    <li>• Regular cleaning protocols</li>
                    <li>• Seal entry points</li>
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
                  Contact us for professional cockroach elimination services
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
                  placeholder="Describe your cockroach problem..."
                  className="min-h-32"
                />
                <Button className="w-full h-12 text-lg">
                  Get Cockroach Control Quote
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

export default CockroachManagement;