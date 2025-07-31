import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Building } from 'lucide-react';

const FumigationOfWarehouse = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-slate-100 to-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Building className="h-16 w-16 text-foreground mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Warehouse Fumigation</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ensure your storage facility remains pest-free and compliant with safe, industrial-grade fumigation services.
              </p>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src="https://i.pinimg.com/736x/6c/3b/ff/6c3bff6162212fe7faa666ce2a4b6762.jpg"
                alt="Warehouse Fumigation Service"
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
                <h2 className="text-3xl font-bold text-foreground mb-6">Comprehensive Warehouse Fumigation</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Warehouses are vulnerable to a variety of pests that can compromise inventory, contaminate goods, and lead to regulatory issues. Our warehouse fumigation service uses proven, industrial-grade methods to fully eradicate infestations while maintaining safety and minimizing downtime.
                </p>

                <h3 className="text-2xl font-bold text-foreground mb-4">Our Fumigation Process</h3>
                <ul className="text-lg text-muted-foreground space-y-3 mb-6">
                  <li>• Detailed site assessment and risk evaluation</li>
                  <li>• Sealing and preparation of the warehouse to contain fumigant</li>
                  <li>• Selection of appropriate fumigant based on commodity and pest type</li>
                  <li>• Controlled release and exposure period under expert monitoring</li>
                  <li>• Aeration and clearance to ensure safety before re-entry</li>
                  <li>• Documentation and compliance reporting for regulatory needs</li>
                </ul>

                <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our Warehouse Fumigation?</h3>
                <ul className="text-lg text-muted-foreground space-y-3 mb-8">
                  <li>• Certified fumigation specialists with industrial experience</li>
                  <li>• Custom plans to suit different storage types and inventory</li>
                  <li>• Minimal operational disruption with fast turnaround</li>
                  <li>• Full regulatory compliance and safety protocols</li>
                  <li>• Post-fumigation inspection and preventive advice</li>
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
                <h2 className="text-3xl font-bold text-foreground mb-4">Request Your Fumigation Quote</h2>
                <p className="text-lg text-muted-foreground">
                  Contact us for a professional warehouse inspection and tailored fumigation plan
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
                  <Input placeholder="Warehouse Location" className="h-12" />
                </div>
                <div>
                  <Textarea
                    placeholder="Describe your inventory type, existing pest concerns, and any compliance requirements..."
                    className="min-h-32"
                  />
                </div>
                <Button className="w-full h-12 text-lg">
                  Get Fumigation Quote
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

export default FumigationOfWarehouse;
