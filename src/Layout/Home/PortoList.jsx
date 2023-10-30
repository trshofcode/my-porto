import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Porto = () => {
    useEffect(() => {        
        const scroll = document.querySelectorAll(".item-scroll");        
        console.log(scroll)

        gsap.to(scroll, {
          xPercent: -100 * (scroll.length - 1),
          ease: "none",                 
          scrollTrigger: {
            trigger: ".container",
            start: "top top",
            pin: true,
            scrub: 1,
            snap: 1 / (scroll.length - 1),            
            end: () => "+=120"
            
          }
        });          
      }, []);
    
      return (          
            <div className="container h-screen">                                   
                      <div className='section'>
                          <div className='item-scroll'>  
                            <div className='flex flex-col lg:flex-row p-12 gap-4 mb-[100px]'>
                              <div className='flex flex-col gap-4'>
                                <div className='text-white text-[50px] lg:text-[100px]'>
                                  <h1>ANDROID DEVELOPMENT</h1>                                 
                                </div>    
                                <div className='text-white text-xl'>
                                  <h2>Flutter</h2>
                                </div>
                              </div>
                              <div className='mt-8'>
                              <img src='https://placehold.co/600x600'/>                                                      
                              </div>                            
                            </div>                         
                          </div>            
                          <div className='item-scroll'>  
                            <div className='flex flex-col lg:flex-row p-12 lg:gap-12'>
                              <div className='flex flex-col gap-4'>
                                <div className='text-white text-[50px] lg:text-[100px]'>
                                  <h1>WEB DEVELOPMENT</h1>                                 
                                </div>    
                                <div className='text-white text-xl'>
                                  <h2>HTML, LARAVEL, REACTJS</h2>
                                </div>
                              </div>
                              <div className='mt-8'>
                              <img src='https://placehold.co/600x600' />                                                      
                              </div>                            
                            </div>                         
                          </div>            
                          <div className='item-scroll'>  
                            <div className='flex flex-col lg:flex-row lg:gap-80 p-12'>
                              <div className='flex flex-col gap-4'>
                                <div className='text-white text-[50px] lg:text-[100px]'>
                                  <h1>NETWORK</h1>                                 
                                </div>    
                                <div className='text-white text-xl'>
                                  <h2>LAN, WAN, MIKROTIK</h2>
                                </div>
                              </div>
                              <div className='mt-8'>
                              <img src='https://placehold.co/600x600' />                                                      
                              </div>                            
                            </div>                         
                          </div>                                                                                                                             
                      </div>                                                                                                                                                                                                   
             </div>             
      );
    };    