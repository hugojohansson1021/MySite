import React from 'react';
import ReusableButton from '../../ReusableButtonProps'; // Ersätt med korrekt sökväg

/* eslint-disable react/no-unescaped-entities */

interface MyComponentProps {
    titleText: string;   // Texten för h1-tagg
    imgSrc: string;      // Bildkälla för img-tagg
    buttonHref: string;  // href för ReusableButton
}

const MyComponent: React.FC<MyComponentProps> = ({ titleText, imgSrc, buttonHref }) => {
    return (
        <div className="flex justify-between items-start mx-auto max-w-6xl m-1  sm:h-[620px]">
            {/*  kort */}
            <div className="relative  sm:w-[320px] sm:h-[420px] w-[320px] h-[420px] bg-white bg-opacity-15 rounded-2xl shadow-md border border-black flex flex-col justify-between p-4 text-black mt-1 ml-20 responsive-card" style={{ marginTop: '40px' }}>
                
                {/* Innehåll */}
                <h1 className="text-3xl text-center font-bold mb-6 bg-gradient-to-r from-emerald-500 to-white bg-clip-text text-transparent">
                    {titleText}
                </h1>

                {/* Bildcontainer */}
                <div className="absolute top-1/2 left-0 w-full h-full transform -translate-y-1/2 z-0 flex justify-center items-center" style={{ pointerEvents: 'none' }}>
                <img src={imgSrc} className="max-w-[70%] max-h-[70%] object-contain rounded-lg" />
                </div>

                {/* Knapp */}
                <ReusableButton text="See More" href={buttonHref} className="z-10 self-center ml-36"/>   
            </div>
        </div>
    );
};

export default MyComponent;
