import React, { useEffect } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';

gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

export const HomeHero = () => {
  useEffect(() => {
    const titles = document.querySelectorAll('.h_title');
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll('span span');
      const delay = index * 0.08;

      tl.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: 'cubic-text',
        },
        delay
      );
    });

    return () => {};
  }, []);

  return (          
        <div className=" min-h-screen pt-[120px] pb-[90px] lg:py-[180px]">          
          <div className="h_container font_apoc flex flex-col items-center  px-2 pb-[20vw]  lg:pb-[4vw]">        
            <h1 className="h_title relative w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[8.7vw] ">
              <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                    WELCOME
                </span>
              </span>
              </h1>
              <h1 className="h_title relative w-full text-center text-[15vw] uppercase leading-[90%] lg:text-[8.7vw] ">
              <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                <span className="font_aeonik inline-block translate-y-full pb-1.5  pt-6 font-medium text-orange will-change-transform ">
                  &nbsp;TO
                </span>
              </span>
            </h1>
            <h1 className="h_title relative flex w-full flex-col items-center justify-center text-center text-[15vw]  font-light uppercase leading-[90%] lg:flex-row lg:text-[8.7vw] ">
              <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                  MY PORTOFOLIO
                </span>
              </span>
            </h1>
          </div>
        </div>      
  );
};
