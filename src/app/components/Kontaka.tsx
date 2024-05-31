// InformationContainer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import withWebhook from './withWebhook'; // Importera HOC

const MotionLinkWithWebhook = withWebhook(motion.a); // Skapa en wrapped komponent

const InformationContainer: React.FC<{ isSwedish: boolean; setIsSwedish: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isSwedish, setIsSwedish }) => {
  const textConfig = {
    en: {
      title: 'Contact Me ',
      description: 'Here you can find information about who I am and what I like as well as my projects and interests',
      descriptiontwo: 'You can also chat with an AI bot I built that has information about who I am and what I did earlier in my life and so on',
    },
    sv: {
      title: 'Kontakta mig', 
      description: 'Här kan du hitta information om vem jag är och vad jag tycker om samt mina projekt och intressen',
      descriptiontwo: 'Du kan även chatta med en AI bot jag byggt som har information om vem jag är och vad jag gjort tidigare i mitt liv',
    },
  };

  return (
    <section className="bg-transparent py-12 px-4 sm:px-6 lg:px-8 rounded-3xl mt-32">
      <motion.h2
        id='contactme'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl text-center font-bold mb-9 bg-gradient-to-r from-emerald-500 to-white bg-clip-text text-transparent underline decoration-emerald-400"
      >
        {isSwedish ? 'Kontakta mig' : 'Contact me'}
      </motion.h2>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
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
          <div className="flex flex-col items-center text-center mt-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-4 w-96 max-w-md"
            >
              <h3 className="text-3xl font-bold text-black mb-4">
                {isSwedish ? textConfig.sv.title : textConfig.en.title}
              </h3>
              
              <div className="mt-6 items-center justify-center text-center">
                <MotionLinkWithWebhook
                  href="mailto:carlhugojohansson@outlook.com"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-emerald-400 text-black text-xl py-1 px-3 rounded-full inline-flex justify-center items-center"
                  message="Maila mig knapp tryckt"
                >
                  <svg
                    className="mr-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-center">{isSwedish ? 'Maila mig' : 'Mail me'}</span>
                </MotionLinkWithWebhook>
              </div>

              <div className="mt-6 items-center justify-center text-center">
                <MotionLinkWithWebhook
                  href="tel:+46763211459"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-emerald-400 text-black text-xl py-1 px-3 rounded-full inline-flex justify-center items-center"
                  message="Ring mig knapp tryckt"
                >
                  <svg
                    className="mr-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-center">{isSwedish ? 'Ring mig' : 'Call me'}</span>
                </MotionLinkWithWebhook>
              </div>

              <div className="mt-6 items-center justify-center text-center">
                <MotionLinkWithWebhook
                  href="https://www.linkedin.com/in/hugo-johansson-0b3266193/"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-emerald-400 text-black text-xl py-1 px-3 rounded-full inline-flex justify-center items-center"
                  message="LinkedIn knapp tryckt"
                >
                  <svg
                    className="mr-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="text-center">{isSwedish ? 'Min LinkedIn' : 'My LinkedIn'}</span>
                </MotionLinkWithWebhook>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
