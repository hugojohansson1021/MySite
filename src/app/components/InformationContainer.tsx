// InformationContainer.tsx
import React from 'react';
import { motion } from 'framer-motion';

const InformationContainer: React.FC<{ isSwedish: boolean; setIsSwedish: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isSwedish, setIsSwedish }) => {
  const textConfig = {
    en: {
      title: <meta>Welcome to my site..!</meta>,
      description: <p>Here you can find information about who I am and what I like as well as my projects and interests </p>,
      descriptiontwo: <p>You can also <a className='underline decoration-indigo-500'>chat with an AI bot </a> I built that has information about who I am and what I did earlier in my life and so on</p>,
    },
    sv: {
      title: <p>Välkommen till min sida..!</p>, 
      description: <p>Här kan du hitta information om <a className='underline decoration-teal-500'>vem jag är</a> och vad jag tycker om samt mina <a className='underline decoration-teal-500'>projekt</a> och <a className='underline decoration-teal-500'>intressen</a> </p>,
      descriptiontwo: <p>Du kan även <a className='underline decoration-indigo-500'>chatta med en AI bot </a> jag byggt som har information om vem jag är och vad jag gjort tidigare i mitt liv</p>,
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
              {isSwedish ? textConfig.sv.descriptiontwo : textConfig.en.descriptiontwo}
            </motion.h3>
          
          
            <motion.a
            href="/#"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-emerald-500 text-black text-xl py-3 px-6 rounded-full inline-flex justify-center items-center "
            >
  <span className="text-center">{isSwedish ? 'Fråga min AI' : 'Ask my AI'}</span>
  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
</motion.a>




            
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