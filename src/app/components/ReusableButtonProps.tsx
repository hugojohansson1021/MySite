import React from 'react';
import Link from 'next/link';
/* eslint-disable react/no-unescaped-entities */

interface ReusableButtonProps {
  text: string;
  href: string;
  className?: string;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({ text, href, className }) => {
  // Observera hur `className` läggs till i slutet av klasslistan
  // Detta tillåter ytterligare klasser att appliceras på knappen
  const buttonClasses = ` nav-link bg-green-300 hover:bg-green-400 text-black font-normal py-2 px-4 rounded-full inline-flex items-center justify-center border border-black mt-auto transition duration-150 ease-in-out ${className}`;

  return (
    <Link href={href}>
      <button className={buttonClasses}>
        {text}
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </Link>
  );
};

export default ReusableButton;
