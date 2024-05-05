// NextIcon.js
import React from 'react';
/* eslint-disable react/no-unescaped-entities */

const NextIcon = ({ size = 50, color = '#000000' }) => (
  <svg width={size} height={size} viewBox="0 0 256 297" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* SVG path or image data */}
    <path d="M128 0L256 256H0L128 0z" fill={color}/>
    <path d="M212.5 256H42.5L128 84.5L212.5 256z" fill="white"/>
  </svg>
);

export default NextIcon;