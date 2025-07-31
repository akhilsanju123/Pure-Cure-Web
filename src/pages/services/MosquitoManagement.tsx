import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Home } from 'lucide-react';

const MosquitoManagement = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Home className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Mosquito Management</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Effective mosquito control to protect your family and property
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="https://i.pinimg.com/1200x/90/a0/b1/90a0b1da318d81a008f57ab152e40bc6.jpg"
                alt="Mosquito Management Service"
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Complete Mosquito Control Solutions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Mosquitoes are not only annoying but can also transmit serious diseases like dengue, malaria, and Zika virus. Our comprehensive mosquito management program targets both adult mosquitoes and their breeding sites to provide long-lasting protection for your property.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Mosquito Control Methods</h3>
                  <ul className="text-lg text-muted-foreground space-y-3 mb-6">
                    <li>• Breeding site identification and treatment</li>
                    <li>• Larvicide applications in water sources</li>
                    <li>• Adult mosquito spray treatments</li>
                    <li>• Misting system installations</li>
                    <li>• Natural repellent solutions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Prevention Services</h3>
                  <ul className="text-lg text-muted-foreground space-y-3 mb-6">
                    <li>• Water management consultations</li>
                    <li>• Landscape modification advice</li>
                    <li>• Regular monitoring programs</li>
                    <li>• Seasonal treatment plans</li>
                    <li>• Emergency response services</li>
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
                  Contact us for comprehensive mosquito control services
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
                  placeholder="Describe your mosquito problem and outdoor areas..."
                  className="min-h-32"
                />
                <Button className="w-full h-12 text-lg">
                  Get Mosquito Control Quote
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

export default MosquitoManagement;