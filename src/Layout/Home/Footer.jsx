import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';


export const Footer = () => {
    
      return (          
            <div className="lg:min-h-screen pt-[150px] pb-[90px] lg:py-[210px]">
                <div className="flex flex-col items-center px-2 pb-[6vw]  lg:pb-6">        
                    <h1 className="h_title relative w-full text-center text-[15vw] font-bold uppercase leading-[90%] lg:text-[8.7vw] ">
                        <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">                            
                            <span className="inline-block translate-y-full pb-1.5 pt-20 will-change-transform">                                
                                <div className='flex flex-row'>
                                    "<Typewriter
                                    options={{
                                        strings: 
                                        ["THANK YOU",
                                        "TERIMA KASIH",
                                        "GRAZIE",
                                        "ARIGATOU",
                                        "GAMSAHAMIDA",
                                        "DANKE"
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}                                
                                />"
                                </div>
                            </span>
                        </span>
                    </h1>         
                </div>
            </div>      
      );
    };    