'use client'
import React from 'react';
import { motion } from 'framer-motion';
import withWebhook from './withWebhook';
/* eslint-disable react/no-unescaped-entities */
const MotionLinkWithWebhook = withWebhook(motion.a); // Skapa en wrapped komponent

const InformationContainer: React.FC<{ isSwedish: boolean; setIsSwedish: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isSwedish, setIsSwedish }) => {
  const textConfig = {
    en: {
      title: 'Welcome..!',
      description: 'Here you can find information about who I am and what I like as well as my projects and interests',
      descriptiontwo: 'You can also chat with an AI bot I built that has information about who I am and what I did earlier in my life and so on.',
    },
    sv: {
      title: 'Välkommen..!', 
      description: 'Här kan du hitta information om vem jag är samt mina projekt och intressen,',
      descriptiontwo: 'Du kan även chatta med en AI bot jag byggt som har information om vem jag är och vad jag gjort tidigare i mitt liv.',
    },
  };

  return (
    <section className=" bg-transparent py-12 px-4 sm:px-6 lg:px-8 rounded-3xl mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-6 opacity-25"
            >
              {isSwedish ? textConfig.sv.title : textConfig.en.title}
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white text-lg mb-8"
            >
              {isSwedish ? textConfig.sv.description : textConfig.en.description}
              <br />
              <br />
              {isSwedish ? textConfig.sv.descriptiontwo : textConfig.en.descriptiontwo}
            </motion.h3>
          
          
            <MotionLinkWithWebhook
            href="#myprods"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-emerald-500 text-black text-xl py-3 px-6 rounded-full inline-flex justify-center items-center "
            message="Chatta med min AI har tryckts"
            >
  <span className="text-center">{isSwedish ? 'Fråga min AI' : 'Ask my AI'}</span>
  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
  
  </MotionLinkWithWebhook>




            
          </div>
          <div className="flex justify-center items-center">
            <motion.img
              src="fiskarn.png"
              alt="Profil img"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full max-w-md rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;