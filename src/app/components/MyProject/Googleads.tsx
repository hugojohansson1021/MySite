
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
/* eslint-disable react/no-unescaped-entities */

const Googleads: React.FC<{ isSwedish: boolean; setIsSwedish: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isSwedish, setIsSwedish }) => {
    


    const images = [
        { src: "Keyword_algo.png", alt: "Profil img 1" },
        { src: "Keyword_sheet_1.png", alt: "Profil img 2" },
        { src: "Keyword_sheet_2.png", alt: "Profil img 3" },
      ];
    
      const [activeIndex, setActiveIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
        }, 4000); // Change image every 3000 milliseconds (3 seconds)
        return () => clearInterval(interval);
      }, []);

  return (
    <section className=" bg-transparent py-12 px-4 sm:px-6 lg:px-8 rounded-3xl mt-32">




           <motion.h2
           id='kotlinapp'
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className=  "text-3xl text-center font-bold mb-3 bg-gradient-to-r from-emerald-500 to-white bg-clip-text text-transparent   "
            >
            {isSwedish ? 'Extra kompetenser' : 'Extra skills'}
            </motion.h2>
        




      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            
          
          <div className="flex justify-center items-center">
  <motion.img
    key={images[activeIndex].src}
    src={images[activeIndex].src}
    alt={images[activeIndex].alt}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.6 }}
    className="w-full h-[500px]  rounded-3xl shadow-lg"
  />
</div>



            
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-4 w-full mt-28"
            >
              <h3 className="text-2xl font-bold text-black mb-4">
               {isSwedish ? 'Google ads' : 'Google ads'}
              </h3>

            <p className='text-black italic '>
                {isSwedish ? 'Under min tid på supernormal så fick jag ägande att underhålla all SMM (SocialMediaMarketing) och när det kom till meta ads och google ads så byggde jag en sökords algorithm i javascript och applicerade den i ett google sheet med 500 sökord ' : 'During my time at supernormal I got ownership of maintaining all SMM (SocialMediaMarketing) and when it came to meta ads and google ads I built a keyword algorithm in javascript and applied it in a google sheet with 500 keywords'}
            </p>
            <br />
            <p className='text-black italic '>
                {isSwedish ? 'Denna algorithm räknade ut vilka sökord på google och Meta som var undervärderade på marknaden inom specificka nischer, detta resulterade till mindre kostnader men samtidigt mer trafik till hemsidan och mer konverteringar ' : 'This algorithm calculated fold keywords on google and Meta that were undervalued on the market within specific niches, this resulted in lower costs but at the same time more traffic to the website and more conversions'}
            </p>
            <br />
            <div className="mt-6 flex flex-wrap justify-start space-x-4">
  <img
    src="Google.png"
    alt="Google Icon"
    className="w-12 h-12"
  />
  <img
    src="Google-AD.png"
    alt="google ad Icon"
    className="w-12 h-12"
  />
  
  
</div>
        
              

              
              









            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Googleads;