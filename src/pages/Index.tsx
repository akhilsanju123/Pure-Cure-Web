import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Users, 
  Award, 
  CheckCircle, 
  Star,
  Shield,
  Clock,
  Target,
  Zap,
  Bug,
  Home,
  Building,
  Ship,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
// import slider1 from '@/assets/slider-1.jpg';
import slider2 from '@/assets/2.png';
import slider3 from '@/assets/3.png';
import TermiteManagementimage from '@/assets/Termite-Management-image.png';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    employees: 0,
    projects: 0,
    clients: 0,
    awards: 0
  });

  const slides = [
    // {
    //   image: slider1,
    //   title: "Professional Pest Control Solutions",
    //   subtitle: "Protecting your home and business with expert pest management services",
    //   cta: "Get Free Quote"
    // },
    {
      image: slider2,
      // title: "Advanced Fumigation Services", 
      // subtitle: "Industrial-grade fumigation for warehouses, vessels, and containers",
      cta: "Learn More"
    },
    {
      image: slider3,
      // title: "Eco-Friendly Pest Solutions",
      // subtitle: "Safe and effective treatments that protect your family and environment",
      cta: "View Services"
    }
  ];

  const stats = [
    { icon: Users, value: 59, label: "Expert Employees", suffix: "" },
    { icon: Target, value: 15000, label: "Projects Completed", suffix: "+" },
    { icon: CheckCircle, value: 14700, label: "Satisfied Clients", suffix: "+" },
    { icon: Award, value: 50, label: "Awards Won", suffix: "" }
  ];

  const services = [
    { 
      icon: Bug, 
      title: "Termite Management", 
      description: "Complete termite elimination and prevention",
      path: "/services/termite-management"
    },
    { 
      icon: Target, 
      title: "Rodent Control", 
      description: "Safe and effective rodent removal",
      path: "/services/rodent-management"
    },
    { 
      icon: Shield, 
      title: "Cockroach Control", 
      description: "Professional cockroach elimination",
      path: "/services/cockroach-management"
    },
    { 
      icon: Zap, 
      title: "Flying Insect Control", 
      description: "Comprehensive flying insect management",
      path: "/services/flying-insect-management"
    },
    { 
      icon: Home, 
      title: "Mosquito Control", 
      description: "Effective mosquito prevention and control",
      path: "/services/mosquito-management"
    },
    { 
      icon: Building, 
      title: "Warehouse Fumigation", 
      description: "Industrial fumigation services",
      path: "/services/fumigation-warehouse"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "ABC Industries",
      rating: 5,
      text: "Excellent service! They completely eliminated our termite problem. Highly professional team."
    },
    {
      name: "Priya Sharma",
      company: "Homeowner",
      rating: 5,
      text: "Quick response and effective treatment. Our home is now pest-free. Recommended!"
    },
    {
      name: "Anil Reddy",
      company: "XYZ Warehouse",
      rating: 5,
      text: "Professional fumigation service for our warehouse. Great job and reasonable pricing."
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Animate stats on load
  useEffect(() => {
    const timers = stats.map((stat, index) => {
      return setTimeout(() => {
        const increment = stat.value / 50;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setAnimatedStats(prev => ({
            ...prev,
            [index === 0 ? 'employees' : index === 1 ? 'projects' : index === 2 ? 'clients' : 'awards']: Math.floor(current)
          }));
        }, 20);
      }, index * 200);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Slider */}
      <section className="relative h-[600px] overflow-hidden">
        
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
        
        {/* <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-pest-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {slides[currentSlide].subtitle}
            </p>
            <Button size="lg" className="bg-pest-white text-pest-red hover:bg-pest-white/90">
              {slides[currentSlide].cta}
            </Button>
          </div>
        </div> */}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-pest-white/20 hover:bg-pest-white/30 rounded-full p-2 transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-pest-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-pest-white/20 hover:bg-pest-white/30 rounded-full p-2 transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-pest-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-pest-white' : 'bg-pest-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-pest-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const animatedValue = Object.values(animatedStats)[index];
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-pest-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-pest-red mb-2">
                    {animatedValue.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-pest-black font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-pest-black">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Pest Cure Solutions & Fumigation is a leading pest control company with over a decade of experience. 
              We specialize in comprehensive pest management solutions for residential, commercial, and industrial clients. 
              Our team of certified professionals uses the latest techniques and eco-friendly products to ensure 
              effective pest elimination while maintaining safety standards.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Certified Professionals</h3>
                <p className="text-muted-foreground">Licensed and trained experts</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Emergency Service</h3>
                <p className="text-muted-foreground">Round-the-clock support</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Guaranteed Results</h3>
                <p className="text-muted-foreground">100% satisfaction guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive pest control solutions tailored to your specific needs
            </p>
          </div>
          
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const serviceImages = [

                "src/assets/Termite-Management-image.png", // termite
                "src/assets/Rodent-Control.png", // rodent  
                "src/assets/Cockroach-Control.png", // cockroach
                "src/assets/Flying-Insect-Control.png", // flying insects
                "src/assets/Mosquito-Control.png", // mosquito
                "src/assets/Warehouse-Fumigation.png"  // warehouse

                
              ];
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <img 
                        src={serviceImages[index]}
                        alt={service.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 text-center">{service.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed text-center mb-6">{service.description}</p>
                    <div className="text-center">
                      <Button asChild variant="outline">
                        <Link to={service.path}>Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Mobile Slideshow */}
          <div className="md:hidden">
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    const serviceImages = [
                      "src/assets/Termite-Management-image.png", // termite
                      "src/assets/Rodent-Control.png", // rodent  
                      "src/assets/Cockroach-Control.png", // cockroach
                      "src/assets/Flying-Insect-Control.png", // flying insects
                      "src/assets/Mosquito-Control.png", // mosquito
                      "src/assets/Warehouse-Fumigation.png"  // warehouse
                    ];
                    return (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <Card className="shadow-lg border-0">
                          <CardContent className="p-6">
                            <div className="relative mb-4">
                              <img 
                                src={serviceImages[index]}
                                alt={service.title}
                                className="w-full h-40 object-cover rounded-lg"
                              />
                            </div>
                            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3 text-center">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-center mb-4">{service.description}</p>
                            <div className="text-center">
                              <Button asChild variant="outline" size="sm">
                                <Link to={service.path}>Learn More</Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:bg-primary/90 transition-colors z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:bg-primary/90 transition-colors z-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-pest-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Advanced Technology</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">We use the latest pest control technology and eco-friendly solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Experienced Team</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">59 expert professionals with years of field experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Comprehensive Services</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">From residential to industrial fumigation solutions.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Affordable Pricing</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">Competitive rates with transparent pricing and no hidden costs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Quick Response</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">Emergency services available with rapid response times.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Follow-up Support</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">Post-treatment monitoring and ongoing support services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-pest-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-pest-black">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground">What our satisfied customers say about us</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-pest-yellow fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-pest-black">Get Your Free Quote</h2>
              <p className="text-lg text-muted-foreground">
                Contact us today for a comprehensive pest inspection and customized solution
              </p>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <Input placeholder="Your phone number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="Your email address" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea 
                      placeholder="Describe your pest problem and location details" 
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

