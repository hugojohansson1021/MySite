import React, { useEffect, useRef } from 'react';
import ProdjectCardOne from './ProjectCards/ProdjectCardOne';
import { motion } from 'framer-motion';
/* eslint-disable react/no-unescaped-entities */
const HomePageProdjects: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const textConfig = {
    en: {
      titletitle: 'My Competenses',
      title: 'Who I Am',
      description: 'Learn more about my background and experiences',
    },
    sv: {
      titletitle: 'Mina kompetenser',
      title: 'Fullstack Webbutveckling',
      description: 'Hybrid applikations utveckling i system som NEXT.js och vercel men också klassiska tech stacks som MERN',
    },
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const cardWidth = 320; // Assumed card width, adjust this value as needed

    container.querySelectorAll('.project-card').forEach((card) => {
      const cardElement = card as HTMLDivElement;
      const cardCenter = cardElement.offsetLeft + cardElement.offsetWidth / 2;
      const diff = Math.abs(scrollLeft + containerWidth / 2 - cardCenter);
      const opacity = Math.max(1 - diff / 500, 0.5); // Adjust these values as needed
      cardElement.style.opacity = `${opacity}`;
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = 320; // Assumed card width, adjust this value as needed
      const firstCardOffset = cardWidth; // Offset for the first card
      container.scrollLeft = firstCardOffset; // Scroll to the first card
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initialize the opacity on the first render
    }




    


    






    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);



  

  return (
    <section className="h-[650px] sm:h-[620px] bg-gray-200 p-4 w-full mx-auto my-2.5 rounded-md responsiv-card-height bg-transparent mt-12">
      

      <motion.h2
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-3xl text-center font-bold mb-2 bg-gradient-to-r from-emerald-500 to-white bg-clip-text text-transparent"
            >
          
                
          
            </motion.h2>

            

      <div className="text-center my-0 text-black text-2xl">↔️</div>

      {/* Flex container for the project cards */}
      <div className="flex overflow-x-auto py-2 space-x-4 md:space-x-0 " ref={scrollContainerRef}>
        <ProdjectCardOne titleText="Fasting app" imgSrc="./mainscreen.png" buttonHref="/me" />
        <ProdjectCardOne titleText="Fasting app" imgSrc="./mainscreen.png" buttonHref="/me" />
        <ProdjectCardOne titleText="Fasting app" imgSrc="./mainscreen.png" buttonHref="/me" />
        <ProdjectCardOne titleText="Fasting app" imgSrc="./mainscreen.png" buttonHref="/me" />
      
        

        {/* More ProdjectCardOne components... */}
      </div>
    </section>
  );
};

export default HomePageProdjects;