import React, { useEffect } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import foto from 'src/assets/images/foto.png';
import { MenuButton } from '@/components';

gsap.registerPlugin(CustomEase, ScrollTrigger);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

export const PageCV = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const titles = document.querySelectorAll('.h_title');
      const tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: '.span',
          start: 'right top',
          toggleActions: 'reverse none none play',
        },
      });

      titles.forEach((title, index) => {
        const el = title.querySelectorAll('span span');
        const delay = index * 0.08;

        tl.to(
          el,
          {
            y: 0,
            duration: 2.5,
            ease: 'cubic-text',
          },
          delay
        );
      });
    }, []);
    return () => ctx.revert();
  });

  return (
    <div className=" min-h-screen pt-[10px] pb-[90px] lg:py-[20px]">
      <div>
        <h1 className="h_title relative w-full text-xl font-medium leading-[90%] lg:text-2xl ">
          <span className="-mb-1.5 -mt-6 inline-block flex justify-end overflow-hidden align-bottom">
            <span className="inline-block translate-y-full pb-1.5 pt-6 will-change-transform">
              <strong className="px-4">ABOUT</strong>
            </span>
          </span>
        </h1>
        <h1 className="h_title relative w-full text-xl leading-[90%] lg:text-2xl ">
          <span className="-mb-1.5 -mt-6 inline-block flex justify-end overflow-hidden align-bottom">
            <span className="font_aeonik inline-block translate-y-full px-4 pb-1.5  pt-6 font-medium text-orange will-change-transform ">
              &nbsp;ME
            </span>
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center px-4 pt-4 lg:flex-row lg:justify-start">
        <Image src={foto} alt="foto profil" width={400} height={500} />
        <div className="flex flex-col">
          <div className="p-4 px-24 text-lg font-medium italic">
            <p className="leading-10">
              "I am a dedicated and skilled Internet Engineer with a passion for
              building and maintaining the digital infrastructure that drives
              our connected world. With a strong technical background and a deep
              understanding of networking, cybersecurity, and web technologies,
              I am committed to ensuring a seamless and secure online experience
              for users."
            </p>
          </div>
          <div className="px-[6vw]">
            <MenuButton>Contact</MenuButton>
          </div>
        </div>
      </div>
    </div>
  );
};
