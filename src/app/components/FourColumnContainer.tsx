// ThreeColumnContainer.tsx
import React from 'react';
import { motion } from 'framer-motion';

const ThreeColumnContainer: React.FC<{ isSwedish: boolean; setIsSwedish: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isSwedish, setIsSwedish }) => {
  const textConfig = {
    en: {
      titletitle: 'My Competenses',
      title: 'Who I Am',
      description: 'Learn more about my background and experiences',
      title2: 'My Projects',
      description2: 'Explore the projects I have worked on',
      title3: 'Contact ',
      description3: 'Get in touch for more information',
      title4: 'Contact ',
      description4: 'Get in touch for more information',
      title5: 'Contact ',
      description5: 'Get in touch for more information',
      
    },
    sv: {
      titletitle: 'Mina kompetenser',
      title: 'Fullstack Webbutveckling',
      description: 'Hybrid applikations utveckling i system som NEXT.js och vercel men också klassiska tech stacks som MERN',
      title2: 'IOS utveckling',
      description2: 'Focus på Swift UI men också kunskap inom UIkit storyboard, med erfarenhet av API:er MVVM och databaser som FireBase',
      title3: 'SEO',
      description3: 'Erfarenhet av optimering av SEO, Google Vitals, och sökords algorithmer',
      title4: 'Bi Utveckling',
      description4: 'Erfarenhet av att integrera Databaser till Power bi, bygga dashboards och skriva DAX funktioner',
      title5: 'Ai automatisering',
      description5: 'Erfarenhet av att bygga egna integrationer/applikationer med Api:er som open ai och bygga ai automateserings flöden med verktyg som MAKE och zapier',
    },
  };

  return (
    <section className=" bg-transparent py-2 px-4 sm:px-6 lg:px-2 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12">
          <div className="flex flex-col items-center">

            
          <motion.h2
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-3xl text-center font-bold mb-6 bg-gradient-to-r from-emerald-500 to-white bg-clip-text text-transparent"
            >
            {isSwedish ? textConfig.sv.titletitle : textConfig.en.titletitle}
            </motion.h2>



            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-4 w-96 max-w-md"
            >
              <h3 className="text-lg font-bold text-black mt-5">
                {isSwedish ? textConfig.sv.title : textConfig.en.title}
              </h3>
              <p className="text-gray-700 text-sm mb-2 italic">
                {isSwedish ? textConfig.sv.description : textConfig.en.description}
              </p>

              <h3 className="text-lg font-bold text-black mt-5">
                {isSwedish ? textConfig.sv.title2 : textConfig.en.title2}
              </h3>
              <p className="text-gray-700 text-sm mb-2 italic">
                {isSwedish ? textConfig.sv.description2 : textConfig.en.description2}
              </p>

              <h3 className="text-lg font-bold text-black mt-5">
                {isSwedish ? textConfig.sv.title3 : textConfig.en.title3}
              </h3>
              <p className="text-gray-700 text-sm mb-2 italic">
                {isSwedish ? textConfig.sv.description3 : textConfig.en.description3}
              </p>

              <h3 className="text-lg font-bold text-black mt-5">
                {isSwedish ? textConfig.sv.title4 : textConfig.en.title4}
              </h3>
              <p className="text-gray-700 text-sm mb-2 italic">
                {isSwedish ? textConfig.sv.description4 : textConfig.en.description4}
              </p>
              
              <h3 className="text-lg font-bold text-black mt-5">
                {isSwedish ? textConfig.sv.title5 : textConfig.en.title5}
              </h3>
              <p className="text-gray-700 text-sm mb-2 italic">
                {isSwedish ? textConfig.sv.description5 : textConfig.en.description5}
              </p>



              <a href="/#" className="green-color flex items-center">
                <span>Learn More</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </motion.div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnContainer;