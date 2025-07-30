import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Bug, 
  Target, 
  Shield, 
  Zap, 
  Home, 
  TreePine, 
  AlertTriangle, 
  Hammer, 
  Building, 
  Ship, 
  Container,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bug,
      title: "Termite Management",
      description: "Complete termite elimination and prevention with advanced baiting systems and soil treatments.",
      features: ["Pre-construction treatment", "Post-construction treatment", "Annual maintenance", "Warranty coverage"],
      path: "/services/termite-management",
      popular: true
    },
    {
      icon: Target,
      title: "Rodent Management",
      description: "Safe and effective rodent control using integrated pest management techniques.",
      features: ["Inspection & assessment", "Exclusion techniques", "Baiting programs", "Monitoring systems"],
      path: "/services/rodent-management",
      popular: false
    },
    {
      icon: Shield,
      title: "Cockroach Management",
      description: "Professional cockroach elimination with gel baits and targeted treatments.",
      features: ["German cockroach control", "American cockroach control", "Residual treatments", "Follow-up services"],
      path: "/services/cockroach-management",
      popular: true
    },
    {
      icon: Zap,
      title: "Flying Insect Management",
      description: "Comprehensive control of flies, moths, and other flying insects.",
      features: ["UV light traps", "Residual spraying", "Source elimination", "Preventive measures"],
      path: "/services/flying-insect-management",
      popular: false
    },
    {
      icon: Home,
      title: "Mosquito Management",
      description: "Effective mosquito prevention and control for homes and commercial properties.",
      features: ["Breeding site elimination", "Larvicidal treatments", "Adult mosquito control", "Integrated management"],
      path: "/services/mosquito-management",
      popular: true
    },
    {
      icon: TreePine,
      title: "Lizard Management",
      description: "Humane lizard control and exclusion services for residential and commercial spaces.",
      features: ["Exclusion techniques", "Habitat modification", "Repellent applications", "Prevention strategies"],
      path: "/services/lizard-management",
      popular: false
    },
    {
      icon: AlertTriangle,
      title: "Snake Repellent",
      description: "Professional snake repellent services to keep your property safe from snake intrusions.",
      features: ["Perimeter treatment", "Natural repellents", "Habitat modification", "Emergency removal"],
      path: "/services/snake-repellent",
      popular: false
    },
    {
      icon: Hammer,
      title: "Wood Borer Control",
      description: "Specialized treatment for wood-boring insects that damage furniture and structures.",
      features: ["Wood treatment", "Fumigation services", "Preventive applications", "Damage assessment"],
      path: "/services/wood-borer-control",
      popular: false
    },
    {
      icon: Building,
      title: "Fumigation of Warehouse",
      description: "Industrial fumigation services for warehouses and storage facilities.",
      features: ["Commodity fumigation", "Structural fumigation", "Phosphine treatments", "Compliance certification"],
      path: "/services/fumigation-warehouse",
      popular: true
    },
    {
      icon: Ship,
      title: "Fumigation of Vessels",
      description: "Marine fumigation services for ships and vessels in compliance with international standards.",
      features: ["Pre-shipment fumigation", "In-transit fumigation", "IMO compliance", "Certificate issuance"],
      path: "/services/fumigation-vessels",
      popular: false
    },
    {
      icon: Container,
      title: "Fumigation of Containers",
      description: "Container fumigation services for import/export cargo and shipping containers.",
      features: ["Container sealing", "Gas monitoring", "Ventilation services", "Documentation"],
      path: "/services/fumigation-containers",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Guaranteed Results",
      description: "100% satisfaction guarantee with follow-up services"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "24/7 emergency services with rapid response times"
    },
    {
      icon: Star,
      title: "Expert Team",
      description: "59 certified professionals with years of experience"
    },
    {
      icon: Shield,
      title: "Safe Methods",
      description: "Eco-friendly and safe pest control solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-pest-red/10 to-pest-green/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-pest-black">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Comprehensive pest control and fumigation services tailored to meet your specific needs. 
              From residential pest control to industrial fumigation, we have the expertise to handle it all.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-pest-red">11+</div>
                <div className="text-sm text-muted-foreground">Service Types</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pest-red">15,000+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pest-red">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pest-red">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow relative">
                  {service.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-pest-red text-pest-white">
                      Popular
                    </Badge>
                  )}
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-pest-green mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button asChild className="flex-1">
                        <Link to={service.path}>Learn More</Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a href="tel:+918341022953">Call</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-pest-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-pest-black">Why Choose Our Services?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We deliver exceptional pest control services with a commitment to quality, safety, and customer satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-0 shadow-md text-center">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-pest-black">Our Process</h2>
              <p className="text-lg text-muted-foreground">
                A systematic approach to ensure effective and lasting pest control results
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-pest-white font-bold text-lg">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Inspection</h3>
                <p className="text-muted-foreground text-sm">Thorough assessment of your property to identify pest issues and entry points</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-pest-white font-bold text-lg">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Treatment Plan</h3>
                <p className="text-muted-foreground text-sm">Customized treatment strategy based on pest type and infestation level</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-pest-white font-bold text-lg">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                <p className="text-muted-foreground text-sm">Professional application of treatment using safe and effective methods</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-pest-white font-bold text-lg">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Follow-up</h3>
                <p className="text-muted-foreground text-sm">Monitoring and maintenance to ensure long-term pest prevention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pest-red to-pest-green">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-pest-white">Need Pest Control Services?</h2>
            <p className="text-xl text-pest-white/90 mb-8">
              Contact us today for a free consultation and let our experts solve your pest problems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pest-white text-pest-red hover:bg-pest-white/90">
                <a href="tel:+918341022953">Call Now: +91-83410 22953</a>
              </Button>
              <Button size="lg" variant="outline" className="border-pest-white text-pest-white hover:bg-pest-white hover:text-pest-red">
                <a href="https://wa.me/918341022953" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;