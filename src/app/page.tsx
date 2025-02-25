
'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import InformationContainer from './components/InformationContainer';
import AboutMe from './components/AboutMe';
import IconSlider from './components/IconSlider';
import KontaktaMig from './components/MyProjects';
import Kontaka from './components/Kontaka';
import FastingApp from './components/MyProject/FastingApp';
import FlixTrackr from './components/MyProject/Flixtrackr';
import Fakeflix from './components/MyProject/Fakeflix';
import Journalkollen from './components/MyProject/Journalkollen';
import Googleads from './components/MyProject/Googleads';
/* eslint-disable react/no-unescaped-entities */



const HomePage: React.FC = () => {
  const [isSwedish, setIsSwedish] = useState(true);

  return (
    <main className="black-gradient-container">
      <div className="black-gradient-content">
        <Navbar isSwedish={isSwedish} setIsSwedish={setIsSwedish} />
        {/* Your page content goes here */}
        
    <InformationContainer isSwedish={isSwedish} setIsSwedish={setIsSwedish} />
    <IconSlider/>
    
    <AboutMe isSwedish={isSwedish} setIsSwedish={setIsSwedish}/>

    

    




    <KontaktaMig isSwedish={isSwedish} setIsSwedish={setIsSwedish}/>

    
    <Journalkollen isSwedish={isSwedish} setIsSwedish={setIsSwedish}/>
    <FastingApp isSwedish={isSwedish} setIsSwedish={setIsSwedish}/>
    <FlixTrackr isSwedish={isSwedish} setIsSwedish={setIsSwedish}/>
    <Fakeflix isSwedish={isSwedish} setIsSwedish={setIsSwedish}/>
    
    <Googleads isSwedish={isSwedish} setIsSwedish={setIsSwedish}/>


    <Kontaka isSwedish={isSwedish} setIsSwedish={setIsSwedish}/>


    
    
    


   
    
    
   
    
    

      </div>
    </main>
  );
};

export default HomePage;