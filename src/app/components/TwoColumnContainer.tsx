// ThreeColumnContainer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import withWebhook from './Webhook';


/* eslint-disable react/no-unescaped-entities */

const MotionLinkWithWebhook = withWebhook(motion.a); // Skapa en wrapped komponent


const TwoColumnContainer: React.FC<{ isSwedish: boolean; setIsSwedish: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isSwedish, setIsSwedish }) => {
  const textConfig = {
    en: {
      title: 'My Projects',
      arrowlink: 'Projects',
      description: 'See all my projects im working on',

      title1: 'My Github',
      arrowlink1: 'Github Link',
      description1: 'See my github profile, my big project are private but the rest is open src',

      title2: 'CV',
      arrowlink2: 'Download my CV',
      description2: 'See my CV ',

      
      
    },
    sv: {
      title: 'Mina Projekt',
      description: 'Se alla projekt och IP:s som jag byggt',
      arrowlink: 'Mina Projekt',

      title1: 'Min Github',
      arrowlink1: 'Github',
      description1: 'Kolla min github profil, mina stora projekt som är i produktion är "Private" men resten är open src',

      title2: 'CV',
      arrowlink2: 'Mitt CV',
      description2: 'Nedan kan du ladda ner mitt CV ',

      
    },
  };

  return (
    <section className=" bg-transparent py-2 px-4 sm:px-6 lg:px-2 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12">
          
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-4 w-96 max-w-md"
            >
              <h3 className="text-2xl font-bold text-black mb-4">
                {isSwedish ? textConfig.sv.title : textConfig.en.title}
              </h3>
              <p className="text-gray-700 mb-2">
                {isSwedish ? textConfig.sv.description : textConfig.en.description}
              </p>



  
<div className="mt-6 items-center justify-center text-center">
<MotionLinkWithWebhook
    href="#fastigapp"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
    className="bg-emerald-400 text-black text-xl py-1 px-3 rounded-full inline-flex justify-center items-center"
    message="Någon har tryckt på 'se alla projekt'"
  >
    <svg
      className="mr-2 w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
    <span className="text-center">{isSwedish ? 'Se all projekt' : 'View all projects'}</span>
    </MotionLinkWithWebhook>
</div>
            </motion.div>
            </div>


          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-4 w-96 max-w-md"
            >
              <h3 className="text-2xl font-bold text-black mb-4">
                {isSwedish ? textConfig.sv.title1 : textConfig.en.title1}
              </h3>
              <p className="text-gray-700 mb-2">
                {isSwedish ? textConfig.sv.description1 : textConfig.en.description1}
              </p>



              <MotionLinkWithWebhook
               href="https://github.com/hugojohansson1021" className="green-color flex items-center" message="Någon har tryckt på github länken ">
                <span>{isSwedish ? textConfig.sv.arrowlink1 : textConfig.en.arrowlink1}</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                </MotionLinkWithWebhook>


            </motion.div>
          </div>


          <div className="flex flex-col items-center ">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-4 w-96 max-w-md"
            >
              <h3 className="text-2xl font-bold text-black mb-4">
                {isSwedish ? textConfig.sv.title2 : textConfig.en.title2}
              </h3>
              <p className="text-gray-700 mb-2">
                {isSwedish ? textConfig.sv.description2 : textConfig.en.description2}
              </p>


              <MotionLinkWithWebhook
  href="/CV.pdf"
  download
  className="bg-emerald-400 text-black text-xl py-1 px-3 rounded-full inline-flex justify-center "
  message="Någon har laddat ner ditt CV"
>
  <span>{isSwedish ? textConfig.sv.arrowlink2 : textConfig.en.arrowlink2}</span>
  <svg
    className="ml-2 w-6 h-6 mt-0.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
  </MotionLinkWithWebhook>
            </motion.div>
          </div>






          

          
        </div>
      </div>
    </section>
  );
};

export default TwoColumnContainer;