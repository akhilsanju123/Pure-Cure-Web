// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const slides = [
//   {
//     image: '/lovable-uploads/c93d4f5c-a9e7-4249-b2bc-e597743e3804.png',
//     title: 'Community Outreach Programs',
//     description: 'Bringing hope and support to communities across Andhra Pradesh'
//   },
//   {
//     image: '/lovable-uploads/888de924-d6b6-4b7e-b095-a81588a078e7.png',
//     title: 'Diplomatic Excellence',
//     description: 'Building bridges and fostering international cooperation'
//   },
//   {
//     image: '/lovable-uploads/cdd85714-779f-46bc-9487-a648811513c1.png',
//     title: 'Educational Initiatives',
//     description: 'Empowering women through education and skill development'
//   },
//   {
//     image: '/lovable-uploads/2f683d00-43d3-4c94-8d3d-a9c9b16bccf7.png',
//     title: 'Leadership Development',
//     description: 'Nurturing future leaders with wisdom and compassion'
//   },
//   {
//     image: '/lovable-uploads/IMG-20250802-WA0003.jpg',
//     title: 'Leadership Development',
//     description: 'Nurturing future leaders with wisdom and compassion'
//   }
// ];

// const ImageSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentSlide ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <img
//             src={slide.image}
//             alt={slide.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//           <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
//             <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
//             <p className="text-lg opacity-90">{slide.description}</p>
//           </div>
//         </div>
//       ))}

//       {/* Navigation arrows */}
//       <Button
//         variant="ghost"
//         size="icon"
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
//         onClick={prevSlide}
//       >
//         <ChevronLeft className="h-6 w-6" />
//       </Button>

//       <Button
//         variant="ghost"
//         size="icon"
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
//         onClick={nextSlide}
//       >
//         <ChevronRight className="h-6 w-6" />
//       </Button>

//       {/* Dots indicator */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full transition-all ${
//               index === currentSlide ? 'bg-white' : 'bg-white/50'
//             }`}
//             onClick={() => setCurrentSlide(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };








// export default ImageSlider;

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    image: '/lovable-uploads/c93d4f5c-a9e7-4249-b2bc-e597743e3804.png',
    title: 'Community Outreach Programs',
    description: 'Bringing hope and support to communities across Andhra Pradesh'
  },
  {
    image: '/lovable-uploads/888de924-d6b6-4b7e-b095-a81588a078e7.png',
    title: 'Diplomatic Excellence',
    description: 'Building bridges and fostering international cooperation'
  },
  {
    image: '/lovable-uploads/cdd85714-779f-46bc-9487-a648811513c1.png',
    title: 'Educational Initiatives',
    description: 'Empowering women through education and skill development'
  },
  {
    image: '/lovable-uploads/2f683d00-43d3-4c94-8d3d-a9c9b16bccf7.png',
    title: 'Leadership Development',
    description: 'Nurturing future leaders with wisdom and compassion'
  },
  {
    image: '/lovable-uploads/IMG-20250802-WA0003.jpg',
    title: 'Plant Health Management',
    description: 'Training programs for plant health professionals'
  },
  {
    image: '/lovable-uploads/IMG-20250802-WA0004.jpg',
    title: 'National Institute Certification',
    description: 'Recognized certifications in plant health management'
  },
  {
    image: '/lovable-uploads/IMG-20250802-WA0005.jpg',
    title: 'Advanced Termite Control',
    description: 'Innovative solutions for pest management'
  },
  {
    image: '/lovable-uploads/IMG-20250802-WA0006.jpg',
    title: 'Annual Conference',
    description: 'Gathering of experts in human rights and legal services'
  },
  {
    image: '/lovable-uploads/IMG-20250802-WA0010.jpg',
    title: 'Advanced Distribution',
    description: 'Control technology for effective pest management'
  },
  {
    image: '/lovable-uploads/IMG-20250802-WA0011.jpg',
    title: 'Diplomatic Meet 2023',
    description: 'Asian-Africa Chamber of Commerce & Industry event'
  },
  {
    image: '/lovable-uploads/IMG-20250802-WA0014.jpg',
    title: 'High Level Diplomatic Meet',
    description: 'International cooperation and partnership building'
  },
  {
    image: '/lovable-uploads/IMG-20250802-WA0017.jpg',
    title: 'Fashion Championship',
    description: 'Celebrating cultural diversity through fashion'
  },
  {
    image: '/lovable-uploads/IMG-20250802-WA0018.jpg',
    title: 'Termite Control Technology',
    description: 'Advanced chemistry solutions for pest management'
  },
  {
    image: '/lovable-uploads/IMG-20250802-WA0019.jpg',
    title: 'World Pest Day',
    description: 'Sustainable solutions for plant health challenges'
  },
  {
    image: '/lovable-uploads/IMG-20250802-WA0020.jpg',
    title: 'International Collaboration',
    description: 'Building global partnerships in pest management'
  },
  {
    image: '/lovable-uploads/IMG-20250802-WA0021.jpg',
    title: 'Weekly Times Feature',
    description: 'Media coverage of our innovative solutions'
  }
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  // Auto-scroll functionality every 2 seconds
  const startAutoScroll = () => {
    stopAutoScroll(); // avoid multiple intervals
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 2000); // 2 seconds
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  useEffect(() => {
    if (isHovered) stopAutoScroll();
    else startAutoScroll();
  }, [isHovered]);

  const nextSlide = () => {
    stopAutoScroll();
    setCurrentSlide(prev => (prev + 1) % slides.length);
    startAutoScroll();
  };

  const prevSlide = () => {
    stopAutoScroll();
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    startAutoScroll();
  };

  const goToSlide = (index: number) => {
    stopAutoScroll();
    setCurrentSlide(index);
    startAutoScroll();
  };

  return (
    <div
      ref={sliderRef}
      className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={index !== currentSlide}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
              <p className="text-lg opacity-90">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm z-20"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm z-20"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
