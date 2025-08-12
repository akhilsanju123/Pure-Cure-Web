import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pest-black text-pest-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/d200ea04-081b-4dce-bf8a-e281c0d317cf.png" 
              alt="Pest Cure Solutions" 
              className="h-12 w-auto"
            />
            <p className="text-sm text-gray-300">
              Professional pest Management and fumigation services with over 15,000 successful projects and 14,700 satisfied clients.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25">
                  <Facebook className="h-4 w-4 text-white" />
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25">
                  <Instagram className="h-4 w-4 text-white" />
                </div>
              </a>
              <a href="https://wa.me/918341022953" target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-2 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-700/25">
                  <Linkedin className="h-4 w-4 text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/termite-management" className="hover:text-primary transition-colors">Termite Control</Link></li>
              <li><Link to="/services/rodent-management" className="hover:text-primary transition-colors">Rodent Control</Link></li>
              <li><Link to="/services/cockroach-management" className="hover:text-primary transition-colors">Cockroach Control</Link></li>
              <li><Link to="/services/fumigation-warehouse" className="hover:text-primary transition-colors">Warehouse Fumigation</Link></li>
              <li><Link to="/services/fumigation-vessels" className="hover:text-primary transition-colors">Vessel Fumigation</Link></li>
               <li><Link to="/services/snake-repellent" className="hover:text-primary transition-colors">Snake Control</Link></li>
               <li><Link to="/services/wood-borer-control" className="hover:text-primary transition-colors">Wood Borer Control</Link></li>
               <li><Link to="/services/fumigation-warehouse" className="hover:text-primary transition-colors">Fumigation Of Warehouse</Link></li>
               <li><Link to="/services/fumigation-vessel" className="hover:text-primary transition-colors">Fumigation of Vessel</Link></li>
               <li><Link to="/services/fumigation-containers" className="hover:text-primary transition-colors">Fumigation of Containers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>50-50-38/5, GROUND FLOOR, GURUDWARAJNBALAYYA SASTRY LAYOUT, VISAKHAPATNAM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <div className="space-y-1">
                  <a href="tel:+918341022953" className="block hover:text-primary transition-colors">
                    +91-83410 22953
                  </a>
                  <a href="tel:+919505914870" className="block hover:text-primary transition-colors">
                    +91-95059 14870
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@pestcure.com" className="hover:text-primary transition-colors">
                  info@pestcure.com
                </a>
              </div>
              <div className="text-gray-300">
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat - Sun: By Appointment Only</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2025 Pest Cure Solutions & Fumigation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;