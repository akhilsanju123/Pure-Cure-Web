import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageSlider from '@/components/ImageSlider';
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
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import slider2 from '@/assets/2.png';
import slider3 from '@/assets/3.png';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    employees: 0,
    projects: 0,
    clients: 0,
    awards: 0,
  });

  const heroSlides = [
    {
      image: slider2,
      alt: 'Advanced Fumigation Services',
      cta: 'Learn More',
    },
    {
      image: slider3,
      alt: 'Eco-Friendly Pest Solutions',
      cta: 'View Services',
    },
  ];

  const stats = [
    { icon: Users, value: 59, label: 'Expert Employees', suffix: '' },
    { icon: Target, value: 15000, label: 'Projects Completed', suffix: '+' },
    { icon: CheckCircle, value: 14700, label: 'Satisfied Clients', suffix: '+' },
    { icon: Award, value: 50, label: 'Awards Won', suffix: '' },
  ];

  const services = [
    {
      icon: Bug,
      title: 'Termite Management',
      description: 'Complete termite elimination and prevention',
      path: '/services/termite-management',
    },
    {
      icon: Target,
      title: 'Rodent Control',
      description: 'Safe and effective rodent removal',
      path: '/services/rodent-management',
    },
    {
      icon: Shield,
      title: 'Cockroach Control',
      description: 'Professional cockroach elimination',
      path: '/services/cockroach-management',
    },
    {
      icon: Zap,
      title: 'Flying Insect Control',
      description: 'Comprehensive flying insect management',
      path: '/services/flying-insect-management',
    },
    {
      icon: Home,
      title: 'Mosquito Control',
      description: 'Effective mosquito prevention and control',
      path: '/services/mosquito-management',
    },
    {
      icon: Building,
      title: 'Warehouse Fumigation',
      description: 'Industrial fumigation services',
      path: '/services/fumigation-warehouse',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'ABC Industries',
      rating: 5,
      text: 'Excellent service! They completely eliminated our termite problem. Highly professional team.',
    },
    {
      name: 'Priya Sharma',
      company: 'Homeowner',
      rating: 5,
      text: 'Quick response and effective treatment. Our home is now pest-free. Recommended!',
    },
    {
      name: 'Anil Reddy',
      company: 'XYZ Warehouse',
      rating: 5,
      text: 'Professional fumigation service for our warehouse. Great job and reasonable pricing.',
    },
  ];

  // Hero slider logic with swipe and autoplay reset
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);
  const autoPlayRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((s) => (s === heroSlides.length - 1 ? 0 : s + 1));
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((s) => (s === 0 ? heroSlides.length - 1 : s - 1));
  }, [heroSlides.length]);

  useEffect(() => {
    window.clearInterval(autoPlayRef.current!);
    autoPlayRef.current = window.setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      window.clearInterval(autoPlayRef.current!);
    };
  }, [nextSlide]);

  const resetAuto = () => {
    window.clearInterval(autoPlayRef.current!);
    autoPlayRef.current = window.setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const currentX = e.touches[0].clientX;
    touchDeltaX.current = currentX - touchStartX.current;
  };
  const handleTouchEnd = () => {
    const threshold = 50;
    if (touchDeltaX.current > threshold) {
      prevSlide();
      resetAuto();
    } else if (touchDeltaX.current < -threshold) {
      nextSlide();
      resetAuto();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  // Animate stats on mount
  useEffect(() => {
    const timers: number[] = [];
    stats.forEach((stat, index) => {
      const delay = index * 200;
      const t = window.setTimeout(() => {
        const increment = stat.value / 50;
        let current = 0;
        const inner = window.setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            window.clearInterval(inner);
          }
          setAnimatedStats((prev) => ({
            ...prev,
            [index === 0
              ? 'employees'
              : index === 1
              ? 'projects'
              : index === 2
              ? 'clients'
              : 'awards']: Math.floor(current),
          }));
        }, 20);
      }, delay);
      timers.push(t);
    });
    return () => timers.forEach(window.clearTimeout);
  }, []);

  // Services mobile slider (manual only)
  const serviceImages = [
    'https://i.pinimg.com/1200x/fc/5f/9b/fc5f9bb0d0c732ddee25c15bee674116.jpg', // termite
    'https://i.pinimg.com/736x/d2/48/60/d24860ac12343fd83eca5b4c1c4ca46d.jpg', // rodent
    'https://i.pinimg.com/1200x/71/b2/89/71b289f8a80856f886bb5cf3c703d21b.jpg', // cockroach
    'https://i.pinimg.com/736x/c7/8b/e4/c78be4da6932458412b653793825172f.jpg', // flying insects
    'https://i.pinimg.com/1200x/43/2e/d5/432ed5c9e0a613e70b6101dda6c8d3cd.jpg', // mosquito
    'https://i.pinimg.com/1200x/ae/b4/48/aeb4481071a33b47b1b4ac40d73d1fa7.jpg', // warehouse
  ];
  const [serviceSlide, setServiceSlide] = useState(0);
  const totalServices = services.length;
  const prevService = () => setServiceSlide((s) => (s === 0 ? totalServices - 1 : s - 1));
  const nextService = () => setServiceSlide((s) => (s === totalServices - 1 ? 0 : s + 1));
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Slider */}
      <section
        className="relative h-[300px] sm:h-[500px] md:h-[600px] overflow-hidden select-none"
        aria-roledescription="carousel"
        aria-label="Hero slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            aria-hidden={index !== currentSlide}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
            <img
              src={slide.image}
              alt={slide.alt || `Slide ${index + 1}`}
              className="hidden"
              aria-hidden="true"
              loading="lazy"
            />
          </div>
        ))}

        {/* Controls */}
        <button
          onClick={() => {
            prevSlide();
            resetAuto();
          }}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/40 rounded-full p-3 sm:p-2 transition-colors focus:outline-none"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={() => {
            nextSlide();
            resetAuto();
          }}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/40 rounded-full p-3 sm:p-2 transition-colors focus:outline-none"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentSlide(idx);
                resetAuto();
              }}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === currentSlide}
              className={`w-3 h-3 rounded-full transition-all duration-200 ring-1 ring-white/60 focus:outline-none ${
                idx === currentSlide ? 'scale-125 bg-white' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>

        
      </section>

      {/* Stats Section */}
      <section className="py-16 ">
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

      {/* Image Slider */} 
      <div className="max-w-4xl mx-auto text-center">
            
          <div className="max-w-5xl mx-auto">
             <h2 className="text-4xl font-bold mb-8 text-pest-black">Gallery</h2>
            <ImageSlider />
          </div>
          </div>

      {/* Who We Are Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-pest-black">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Pest Cure Solutions & Fumigation is a renowned Pest Management and Fumigation Company with over 20 years of expertise. 
              We deliver comprehensive and Integrated Pest Management Solutions for residential, commercial, and industrial clients.
            </p>

            {/* Our Services */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-pest-black">Our Services Include:</h3>
              <div className="text-left max-w-2xl mx-auto space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">General Pest Management.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Fumigation for shipping companies and export/import houses.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Fumigation for Wood Packaging Material (ISPM 15 Standards) for international trade.</p>
                </div>
              </div>
            </div>

            {/* Our Team */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-pest-black">Our Team</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team of certified and trained professionals utilizes the latest techniques and eco-friendly products from reputed companies to ensure effective pest management while maintaining the highest safety standards.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-pest-black">Key Highlights</h3>
              <div className="text-left max-w-3xl mx-auto space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Comprehensive Integrated Pest Management Solutions.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Termite Management - Complete Termite Prevention and Elimination in pre and post Construction structures.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Fumigation of Warehouses, Godowns, Export/Import Containers, Wood Packaging Material and Ships with Restricted Chemicals like Methyl Bromide and Aluminium Phosphide.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Experienced Trained and Certified Professionals.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Eco-friendly products and latest techniques.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">High safety standards.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Specialized Treatments for Wood Packaging Material as per NSPM & ISPM 15 Standards of Fumigation Regulations for international trade.</p>
                </div>
              </div>
            </div>

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
    {/* <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team of certified and trained professionals utilizes the latest techniques and eco-friendly products from reputed companies to ensure effective pest management while maintaining the highest safety standards.
          </p>
        </div>
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
                
                </div>
                </div>
                </div>
                </div>
      </div>
    </section> */}

      {/* Why Choose Us Section */}
      <section className="py-20 ">
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
      <section className="py-16 ">
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

