import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Target, Users, Award, CheckCircle, Eye, Heart, Lightbulb, Star, Quote, ThumbsUp } from 'lucide-react';

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

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "ABC Industries",
      location: "Kavali",
      rating: 5,
      text: "Excellent service! They completely eliminated our termite problem. The team was professional, punctual, and used eco-friendly methods. Highly recommend Pest Cure for any pest control needs.",
      service: "Termite Management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      company: "Homeowner",
      location: "Nellore",
      rating: 5,
      text: "Quick response and effective treatment. Our home is now pest-free and the kids can play safely. The technicians explained everything clearly and provided valuable prevention tips.",
      service: "Residential Pest Control",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9b8c009?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Anil Reddy",
      company: "XYZ Warehouse",
      location: "Tirupati",
      rating: 5,
      text: "Professional fumigation service for our warehouse. Great job and reasonable pricing. They worked around our schedule and ensured minimal disruption to our operations.",
      service: "Warehouse Fumigation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sunitha Rao",
      company: "Restaurant Owner",
      location: "Ongole",
      rating: 5,
      text: "Outstanding cockroach control service! They solved our restaurant's pest problem quickly and safely. The follow-up service ensures we stay pest-free. Excellent customer service.",
      service: "Cockroach Management",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Venkat Reddy",
      company: "Manufacturing Unit",
      location: "Guntur",
      rating: 5,
      text: "Pest Cure handled our industrial fumigation with complete professionalism. They provided all necessary certifications and documentation. Highly satisfied with their service quality.",
      service: "Industrial Fumigation",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lakshmi Devi",
      company: "Apartment Complex",
      location: "Vijayawada",
      rating: 5,
      text: "Excellent mosquito control service for our entire apartment complex. The team was courteous, efficient, and the results are fantastic. No more mosquito troubles!",
      service: "Mosquito Management",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { icon: Users, value: "14,700+", label: "Happy Customers" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: ThumbsUp, value: "98%", label: "Satisfaction Rate" }
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
                  At Pest Cure, we're committed to protecting your home and business from the discomfort and damage caused by pests. With years of experience in the pest control industry, we have earned a reputation for delivering reliable, eco-friendly, and effective solutions to a wide range of pest problems. Whether you're dealing with termites, rodents, mosquitoes, or any other pest, Pest Cure has the expertise and technology to handle it.
                </p>
                <p>
                  We believe in treating every pest issue with the utmost care and attention to detail, providing fast, safe, and affordable pest management solutions that offer long-term protection. Our team of certified pest control professionals is equipped with the latest tools and knowledge to ensure your property remains pest-free.
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
                  <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide comprehensive and environmentally responsible pest control solutions that protect your home, family, and business from the harmful effects of pests.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <Heart className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Experienced Team: Our technicians are highly trained and use the latest pest control techniques</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Eco-Friendly Solutions: We prioritize environmentally safe methods, ensuring the safety of your family, pets, and the environment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Comprehensive Services: From residential to commercial pest control, we handle all types of pest issues with customized solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Affordable Rates: We offer competitive pricing with no hidden fees—just honest and reliable service</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Satisfaction Guaranteed: If pests return, so do we—our work is guaranteed!</span>
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

      {/* Customer Stats Section */}
      <section className="py-16 bg-pest-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-pest-black">Our Achievements</h2>
            <p className="text-lg text-muted-foreground">
              Numbers that speak for our excellence and customer satisfaction
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-pest-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-pest-red mb-2">
                    {stat.value}
                  </div>
                  <div className="text-pest-black font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-pest-black">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real testimonials from real customers who have experienced our professional pest control services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      <p className="text-xs text-pest-red">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-pest-yellow fill-current" />
                    ))}
                  </div>
                  
                  <div className="relative mb-4">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground italic pl-6">"{testimonial.text}"</p>
                  </div>
                  
                  <div className="bg-pest-gray/50 rounded-lg p-3">
                    <p className="text-sm font-medium text-pest-red">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-pest-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-pest-black">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              See the remarkable results our pest control treatments have achieved
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Residential Success</h3>
                <p className="text-muted-foreground mb-4">
                  Completely eliminated termite infestation from a 3-story residential building, 
                  protecting the family's investment and ensuring their safety.
                </p>
                <div className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full inline-block">
                  100% Pest-Free
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Commercial Excellence</h3>
                <p className="text-muted-foreground mb-4">
                  Successfully fumigated a 50,000 sq ft warehouse, eliminating all pests 
                  and ensuring compliance with food safety standards.
                </p>
                <div className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full inline-block">
                  Certified Safe
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Industrial Achievement</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive pest management for a manufacturing facility, 
                  maintaining pest-free environment for 2+ years running.
                </p>
                <div className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full inline-block">
                  Long-term Success
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
            <h2 className="text-4xl font-bold mb-6 text-pest-black">Ready to Join Our Happy Customers?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the same professional service and outstanding results that our customers rave about.
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