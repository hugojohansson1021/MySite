
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
/* eslint-disable react/no-unescaped-entities */

const Fakeflix: React.FC<{ isSwedish: boolean; setIsSwedish: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isSwedish, setIsSwedish }) => {
    


    const images = [
        { src: "kotlinApp.png", alt: "Profil img 1" },
        { src: "kotlinApp.png", alt: "Profil img 2" },
        { src: "kotlinApp.png", alt: "Profil img 3" },
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
            {isSwedish ? 'Kotlin App' : 'Kotlin App'}
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
    className="w-full sm:w-3/4 md:w-1/2 rounded-3xl shadow-lg"
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
               {isSwedish ? 'FakeFlix App' : 'FakeFlix App'}
              </h3>

            <p className='text-black italic '>
                {isSwedish ? 'Detta är en native Android app byggd i kotlin, Under detta project testade jag bygga i Android Studio' : 'This is a native Android app built in Kotlin, During this project I tested building in Android Studio'}
            </p>
            <br />
            <p className='text-black italic '>
                {isSwedish ? 'Detta projekt byggde jag för att testa en ny IDE och byggnation av en native android app, jag testade också på hur det funkar med api requests och core databas hanteriung' : 'I built this project to test a new IDE and build a native android app, I also tested how it works with api requests and core database handling'}
            </p>
            <br />
            <div className="mt-6 flex flex-wrap justify-start space-x-4">
  <img
    src="swifter.png"
    alt="swift iocon Icon"
    className="w-12 h-12"
  />
  <img
    src="firebase.png"
    alt="Firebase Icon"
    className="w-12 h-12"
  />
  <img
    src="googleana.png"
    alt="react Icon"
    className="w-12 h-12"
  />
  
</div>
        
              

              
              


            <div className="mt-6 ">
                
  <motion.a
    href={`https://github.com/hugojohansson1021/STI_AndroidUTV_ProjektARB`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
    className="bg-emerald-400 text-black text-xl py-1 px-3 rounded-full inline-flex justify-center items-center"
  >
    <svg
      className="mr-2 w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-center">{isSwedish ? 'Github' : 'Github'}</span>
  </motion.a>
  
</div>







            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fakeflix;