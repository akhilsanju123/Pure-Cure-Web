import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  Users,
  Shield,
  Award
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Kavali", "Andhra Pradesh, India"],
      action: null
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91-83410 22953", "+91-95059 14870"],
      action: "tel:+918341022953"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@pestcure.com"],
      action: "mailto:info@pestcure.com"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: By Appointment Only"],
      action: null
    }
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "Fast Response",
      description: "We understand the urgency of pest problems, so we offer quick, efficient service."
    },
    {
      icon: Users,
      title: "Certified Technicians",
      description: "Our team is fully trained and certified in all pest control techniques."
    },
    {
      icon: Shield,
      title: "Eco-Friendly Solutions",
      description: "Safe for your family, pets, and the environment."
    },
    {
      icon: Award,
      title: "Satisfaction Guaranteed",
      description: "We promise excellent service with guaranteed results."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-pest-red/10 to-pest-green/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-pest-black">Get in Touch with Pest Cure</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're here to help with all your pest control needs! Whether you need an inspection, treatment, 
              or advice, our team at Pest Cure is ready to provide you with fast and professional service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">
                          {info.action && detailIndex === 0 ? (
                            <a href={info.action} className="text-primary hover:underline">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-pest-gray">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-pest-black">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have a question or need a quote? Fill out the form below, and we'll get back to you as soon as possible.
              </p>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your pest problem and location details"
                        rows={4}
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Map & Quick Contact */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-pest-black">Find Us</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Visit our office or get in touch through any of our convenient contact methods.
              </p>
              
              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg mb-8">
                <CardContent className="p-0">
                  <div className="bg-pest-gray h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="text-lg font-semibold text-pest-black">Our Location</p>
                      <p className="text-muted-foreground"># 50-50-38/5, GROUND FLOOR, GURUDWARAJNBALAYYA SASTRY LAYOUT, VISAKHAPATNAM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <Button size="lg" className="w-full" asChild>
                  <a href="tel:+918341022953">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now: +91-83410 22953
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <a href="https://wa.me/918341022953" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp Us: +91-83410 22953
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <a href="tel:+919505914870">
                    <Phone className="h-5 w-5 mr-2" />
                    Alternative: +91-95059 14870
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-pest-black">Why Choose Pest Cure?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here's what makes us the preferred choice for pest control services across Andhra Pradesh.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-gradient-to-r from-pest-red to-pest-green">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-pest-white">24/7 Emergency Pest Control</h2>
            <p className="text-xl text-pest-white/90 mb-8">
              Pest emergency? Don't wait! Our team is available round the clock for urgent pest control situations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pest-white text-pest-red hover:bg-pest-white/90">
                <a href="tel:+918341022953">Emergency Call: +91-83410 22953</a>
              </Button>
              <Button size="lg" variant="outline" className="border-pest-white text-pest-white hover:bg-pest-white hover:text-pest-red">
                <a href="https://wa.me/918341022953" target="_blank" rel="noopener noreferrer">
                  Emergency WhatsApp
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

export default Contact;