// About me .tsx
import React from 'react';
import { motion } from 'framer-motion';
import FourColumnContainer from './FourColumnContainer';
import ThreeColumnContainer from './FourColumnContainer';
/* eslint-disable react/no-unescaped-entities */


const AboutMe: React.FC<{ isSwedish: boolean; setIsSwedish: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isSwedish, setIsSwedish }) => {
  const textConfig = {
    en: {
      title: 'About Me',
      title1:'Who am i?',
      description: 'My name is Hugo Johansson, I am 23 years old and come from a small town in Småland called Tranås, currently I live in Stockholm.',
      title2:'My interests',
      descriptiontwo: 'Since I come from the country, my obvious interests are fishing and outdoor life, but I also have a deep interest in development, design and construction of a vision tuill a finished product',
      title3:'When did I become interested in Development?',
      descriptionttree: 'I built my first website in html, css and javascript in 2015, and an interest in being able to build something from scratch started, since then I have continued to learn full stack development and both native and hybrid application development.',
      
    },
    sv: {
      title: 'Lite om mig',
      title1:'Vem är jag?',
      description: 'Mitt namn är Hugo Johansson jag är 23 år gammal och kommer från en liten stad i småland som heter Tranås, för närvarande bor jag i Stockholm.',
      title2:'Mina intressen',
      descriptiontwo: 'Eftersom jag kommer från landet så är mina självklara intressen fiska och fridluftliv, men jag har också ett djupt intresse för utveckling, design och byggnation av en vision tuill en färedig  product  ',
      title3:'När fick jag intresse för Utveckling?',
      descriptionttree: 'Jag har byggde min första hemmsida i html,css och javascript 2015, och ett intresse av att kunna bygga något från grunden startade, sedan dess har jag fortsatt att lära mig fullstack utveckling och både nativ och hybrid applikations utveckling.',
    },
  };

  return (
    <section className=" bg-transparent py-2 px-4 sm:px-6 lg:px-8 rounded-3xl mt-20">

      <motion.h2
          id='whoami'
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className=  "text-4xl text-center font-bold mb-9 bg-gradient-to-r from-emerald-500 to-white bg-clip-text text-transparent underline decoration-emerald-400  "
            >
            {isSwedish ? 'Vem är jag?' : 'Who am i?'}
            </motion.h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center items-center">

        <motion.h2
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-3xl text-center font-bold mb-6 bg-gradient-to-r from-emerald-500 to-white bg-clip-text text-transparent"
            >
            {isSwedish ? textConfig.sv.title : textConfig.en.title}
            </motion.h2>




            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md"
            >
              
              
            <motion.h2
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-xl font-bold text-black"
            >
            {isSwedish ? textConfig.sv.title1 : textConfig.en.title1}
            </motion.h2>
              <p className="text-gray-700 mb-6 mt-1">
              {isSwedish ? textConfig.sv.description : textConfig.en.description}
              </p>



              <motion.h2
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-xl font-bold text-black"
            >
            {isSwedish ? textConfig.sv.title2 : textConfig.en.title2}
            </motion.h2>
              <p className="text-gray-700 mb-6 mt-1">
              {isSwedish ? textConfig.sv.descriptiontwo : textConfig.en.descriptiontwo}
              </p>


              <motion.h2
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-xl font-bold text-black"
            >
            {isSwedish ? textConfig.sv.title3 : textConfig.en.title3}
            </motion.h2>
              <p className="text-gray-700 mb-6 mt-1">
              {isSwedish ? textConfig.sv.descriptionttree : textConfig.en.descriptionttree}
              </p>
            </motion.div>
          </div>

          <ThreeColumnContainer isSwedish={isSwedish} setIsSwedish={setIsSwedish}/>
          
          



        </div>
      </div>
    </section>
  );
};

export default AboutMe;