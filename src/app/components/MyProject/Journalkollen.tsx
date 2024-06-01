
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import withWebhook from '../Webhook';
/* eslint-disable react/no-unescaped-entities */


const MotionLinkWithWebhook = withWebhook(motion.a); // Skapa en wrapped komponent

const Journalkollen: React.FC<{ isSwedish: boolean; setIsSwedish: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isSwedish, setIsSwedish }) => {
    
    const images = [
        { src: "Journalkollen.png", alt: "Profil img 1" },
        { src: "Journalkollen_2.png", alt: "Profil img 2" },
        { src: "Journalkollen_3.png", alt: "Profil img 3" },
      ];
    
      const [activeIndex, setActiveIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
        }, 4000); 
        return () => clearInterval(interval);
      }, []);


    



  return (
    <section className=" bg-transparent py-12 px-4 sm:px-6 lg:px-8 rounded-3xl mt-2">

           <motion.h2
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className=  "text-3xl text-center font-bold mb-3 bg-gradient-to-r from-emerald-500 to-white bg-clip-text text-transparent  "
            >
            {isSwedish ? 'Journalkollen.se' : 'Journalkollen.se'}
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
               {isSwedish ? 'Journalkollen' : 'Journalkollen'}
              </h3>

            <p className='text-black italic '>
                {isSwedish ? 'Journalkollen är ett projekt som jag startade efter att fått läkarsvar som var nästan helt omöjliga att förstå, akronymer och förkortningar som enbart läkare kunnde förstå hjälpte inte mig som patient ' : "Journalkollen is a project that I started after receiving doctors' answers that were almost completely impossible to understand, acronyms and abbreviations that only doctors could understand did not help me as a patient"}
            </p>
            <br />
            <p className='text-black italic '>
                {isSwedish ? 'Så jag tänkte att jag kan utveckla ett AI verktyg som översätter alla medicin tekniska akronymer och kan ge en enkel förklaring till användaren vad svaren betyder ' : "So I thought I can develop an ai tool that translates all medical technical acronyms and can give a simple explanation to the user what the answers mean"}
            </p>
            


         <div className="mt-6 flex flex-wrap justify-start space-x-4">
  <img
    src="typescript.png"
    alt="Typescript Icon"
    className="w-12 h-12"
  />
  <img
    src="tailwind.png"
    alt="Tailwind Icon"
    className="w-16 h-12"
  />
  <img
    src="react.png"
    alt="react Icon"
    className="w-12 h-12"
  />
  <img
    src="next.png"
    alt="next Icon"
    className="w-13 h-12"
  />
  <img
    src="googleana.png"
    alt="next Icon"
    className="w-13 h-12"
  />
  <img
    src="Swish-icon.png"
    alt="mongo Icon"
    className="w-13 h-12"
  />
  
</div>

  
            
            
            
              

              
              



            <div className="mt-6 ">
  <MotionLinkWithWebhook
    href={`https://github.com/carlhugojohansson`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
    className="bg-emerald-400 text-black text-xl py-1 px-3 rounded-full inline-flex justify-center items-center relative"
    message="Någon har tryckt på Journalkollen Repo"
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
    <span className="text-center">{isSwedish ? 'No Public Github    ' : 'No Public Github    '}</span>
    <svg
      className="ml-2 w-5 h-5 absolute right-2"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12 1a5 5 0 00-5 5v2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V10a2 2 0 00-2-2h-2V6a5 5 0 00-5-5zm-3 8V6a3 3 0 116 0v3H9z"
        clipRule="evenodd"
      />
    </svg>
  </MotionLinkWithWebhook>
</div>

<div className="mt-6">
<MotionLinkWithWebhook
    href="https://www.journalkollen.se/"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
    className="bg-emerald-400 text-black text-xl py-1 px-3 rounded-full inline-flex justify-center items-center"
    message="Någon har tryckt på Journalkollen website"
  >
    <span className="text-center">{isSwedish ? 'WebbApp' : 'WebbApp'}</span>
    </MotionLinkWithWebhook>
</div>















            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journalkollen;