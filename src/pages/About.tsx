import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Target, Users, Award, CheckCircle, Eye, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Certified",
      description: "All our technicians are licensed professionals with industry certifications and ongoing training."
    },
    {
      icon: Target,
      title: "Precision Treatment",
      description: "We use targeted approaches for each pest type, ensuring maximum effectiveness with minimal environmental impact."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our 59 expert professionals bring decades of combined experience in pest control and fumigation."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized with 50+ industry awards for excellence in pest control services and customer satisfaction."
    },
    {
      icon: CheckCircle,
      title: "Guaranteed Results",
      description: "We stand behind our work with comprehensive warranties and follow-up services to ensure lasting results."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-pest-red/10 to-pest-green/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-pest-black">About Pest Cure</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your trusted partner in comprehensive pest control and fumigation services, 
              protecting homes and businesses with professional expertise since our inception.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-pest-black">Who We Are</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Pest Cure Solutions & Fumigation is a leading pest control company established with the mission 
                  to provide comprehensive, safe, and effective pest management solutions. Based in Kavali, 
                  we have grown to become one of the most trusted names in the pest control industry.
                </p>
                <p>
                  Our company specializes in both residential and commercial pest control services, offering 
                  everything from routine pest prevention to complex industrial fumigation projects. We serve 
                  a diverse clientele including homeowners, businesses, warehouses, and shipping vessels.
                </p>
                <p>
                  What sets us apart is our commitment to using the latest technology, eco-friendly products, 
                  and proven methodologies to deliver results that exceed our clients' expectations. Our team 
                  of 59 expert professionals undergoes continuous training to stay current with industry 
                  best practices and emerging pest control techniques.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-pest-red mb-2">15,000+</div>
                  <div className="text-sm font-medium">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-pest-red mb-2">14,700+</div>
                  <div className="text-sm font-medium">Satisfied Clients</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-pest-red mb-2">59</div>
                  <div className="text-sm font-medium">Expert Employees</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-pest-red mb-2">50</div>
                  <div className="text-sm font-medium">Awards Won</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-pest-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-pest-black">Our Mission</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <Eye className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading pest control company in India, known for our innovative solutions, 
                    exceptional customer service, and commitment to creating pest-free environments that 
                    promote health, safety, and peace of mind for our clients.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <Heart className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Safety first in all our operations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Environmental responsibility</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Transparent and honest communication</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Continuous improvement and innovation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-pest-black">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here are five compelling reasons why Pest Cure should be your first choice for pest control services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
                    <p className="text-muted-foreground text-center leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-pest-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-pest-black">Our Expert Team</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our success is built on the expertise and dedication of our professional team members who bring 
              years of experience and specialized knowledge to every project.
            </p>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Certified Technicians</h3>
                    <p className="text-muted-foreground">Licensed professionals with specialized pest control certifications</p>
                  </div>
                  <div>
                    <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Continuous Training</h3>
                    <p className="text-muted-foreground">Regular training on latest techniques and safety protocols</p>
                  </div>
                  <div>
                    <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Industry Experts</h3>
                    <p className="text-muted-foreground">Years of field experience across diverse pest control scenarios</p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-pest-gray rounded-lg">
                  <blockquote className="text-lg italic text-center text-muted-foreground">
                    "Our team is our greatest asset. Each member brings unique expertise and unwavering commitment 
                    to delivering exceptional pest control solutions that protect what matters most to our clients."
                  </blockquote>
                  <div className="text-center mt-4">
                    <div className="font-semibold">- Pest Cure Management Team</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-pest-black">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for a free consultation and let our experts create a customized pest control solution for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+918341022953">Call Now: +91-83410 22953</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
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

export default About;