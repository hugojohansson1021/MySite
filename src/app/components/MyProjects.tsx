// About me .tsx
import React from 'react';
import { motion } from 'framer-motion';
import FourColumnContainer from './FourColumnContainer';
import ThreeColumnContainer from './FourColumnContainer';
import Chatbot from './AiChat';
import TwoColumnContainer from './TwoColumnContainer';


const KontaktaMig: React.FC<{ isSwedish: boolean; setIsSwedish: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isSwedish, setIsSwedish }) => {
  

  return (
    <section className=" bg-transparent py-2 px-4 sm:px-6 lg:px-8 rounded-3xl mt-20">
      <motion.h2
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className=  "text-4xl text-center font-bold mb-9 bg-gradient-to-r from-emerald-500 to-white bg-clip-text text-transparent underline decoration-emerald-400 "
            >
            {isSwedish ? 'Mina Projekt' : 'My Projects '}
            </motion.h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
              <Chatbot apiEndpoint="/api/ai" />
            
          

          <TwoColumnContainer isSwedish={isSwedish} setIsSwedish={setIsSwedish}/>
          
          



        </div>
      </div>
    </section>
  );
};

export default KontaktaMig;