import { useState, useEffect } from 'react';

const AnimatedText = () => {
  const words = [ 'Websites Development', 'Graphic Design', 'Digital Marketing','Search EEngine Optimazation', 'Branding Strategy', 'Media Production'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(true);
      }, 500); // Wait for exit animation
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    
        <h1 className="text-5xl lg:text-8xl font-bold text-white mb-6 lg:mt-18">
          <span>Your partner in all things </span>
          <span
            className={`inline-block transition-all duration-500 ${
              isAnimating
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="text-[#F90040]">{words[currentIndex]}</span>
          </span>
        </h1>
   
  );
};

export default AnimatedText;