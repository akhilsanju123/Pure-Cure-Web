import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Menu, X, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Termite Management', path: '/services/termite-management' },
    { name: 'Rodent Management', path: '/services/rodent-management' },
    { name: 'Cockroach Management', path: '/services/cockroach-management' },
    { name: 'Flying Insect Management', path: '/services/flying-insect-management' },
    { name: 'Mosquito Management', path: '/services/mosquito-management' },
    { name: 'Lizard Management', path: '/services/lizard-management' },
    { name: 'Snake Repellent', path: '/services/snake-repellent' },
    { name: 'Wood Borer Control', path: '/services/wood-borer-control' },
    { name: 'Fumigation of Warehouse', path: '/services/fumigation-warehouse' },
    { name: 'Fumigation of Vessels', path: '/services/fumigation-vessels' },
    { name: 'Fumigation of Containers', path: '/services/fumigation-containers' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/ce25489f-b51e-4332-aba2-878e4a2cd8cd.png" 
                alt="Pest Cure Solutions & Fumigation" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-foreground'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition-colors hover:text-primary ${
                  isActive('/about') ? 'text-primary' : 'text-foreground'
                }`}
              >
                About
              </Link>
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="font-medium">
                    Services <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-background border shadow-lg">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.path}>
                      <Link 
                        to={service.path} 
                        className="w-full text-sm font-medium hover:text-primary"
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link 
                to="/contact" 
                className={`font-medium transition-colors hover:text-primary ${
                  isActive('/contact') ? 'text-primary' : 'text-foreground'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Social Media & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex space-x-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              </div>
              <Button asChild>
                <a href="tel:+918341022953">Call Now</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <Link to="/" className="font-medium hover:text-primary">Home</Link>
                <Link to="/about" className="font-medium hover:text-primary">About</Link>
                <div className="space-y-2">
                  <p className="font-medium text-sm text-muted-foreground">Services</p>
                  {services.map((service) => (
                    <Link 
                      key={service.path}
                      to={service.path} 
                      className="block pl-4 text-sm hover:text-primary"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                
                <Link to="/contact" className="font-medium hover:text-primary">Contact</Link>
                <div className="flex space-x-4 pt-4">
                  <Button asChild size="sm">
                    <a href="tel:+918341022953">Call Now</a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://wa.me/918341022953">WhatsApp</a>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        <Button
          asChild
          size="icon"
          className="h-14 w-14 rounded-full bg-secondary hover:bg-secondary/90 shadow-lg"
        >
          <a href="https://wa.me/918341022953" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-6 w-6" />
          </a>
        </Button>
        <Button
          asChild
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg"
        >
          <a href="tel:+918341022953">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>
        </Button>
      </div>
    </>
  );
};

export default Header;