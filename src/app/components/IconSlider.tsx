import React from 'react';
import { FaNodeJs, FaReact, FaAngular, FaVuejs, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiMongodb } from 'react-icons/si';
import VercelIcon from './VercelIcon';  // Assuming you've saved this component
import NextIcon from './NextIcon';    // Assuming you've saved this component
/* eslint-disable react/no-unescaped-entities */

const IconSlider: React.FC = () => {
  // Create an array of icons
  const baseIcons = [
    <FaNodeJs key="node" size={50} color="#339933" />,
    <FaReact key="react" size={50} color="#61DAFB" />,
    <SiTypescript key="ts" size={50} color="#3178C6" />,
    <FaJs key="js" size={50} color="#F0DB4F" />,
    <FaHtml5 key="html" size={50} color="#E34F26" />,
    <FaCss3Alt key="css" size={50} color="#1572B6" />,
    <SiMongodb key="mongo" size={50} color="#4FAA41" />,
    <FaDatabase key="db" size={50} color="#F6DB1F" />,
    <VercelIcon key="vercel" size={50} color="#000000" />,   // Custom Vercel Icon
    <NextIcon key="next" size={50} color="#000000" />,      // Custom Next Icon
  ];

  // Expanded array of icons
  const icons = Array.from({ length: 30 }, () => baseIcons).flat();

  return (
    <div className="icon-slider">
      <div className="icon-container">
        {icons.map((icon, index) => (
          <div key={`icon-${index}`} className="icon-item">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconSlider;