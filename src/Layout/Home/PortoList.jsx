import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MenuButton } from '@/components';
import Link from 'next/link';
import Image from 'next/image';
import porto1 from 'src/assets/images/ecommerce.png';
import porto2 from 'src/assets/images/pkl.jpg';

gsap.registerPlugin(ScrollTrigger);

export const Porto = () => {
  useEffect(() => {
    const scroll = document.querySelectorAll('.item-scroll');
    console.log(scroll);

    gsap.to(scroll, {
      xPercent: -100 * (scroll.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.container',
        start: 'top top',
        pin: true,
        scrub: 1,
        snap: 1 / (scroll.length - 1),
        end: () => '+=60',
      },
    });
  }, []);

  return (
    <div className="container h-screen">
      <div className="section">
        <div className="item-scroll">
          <div className="flex flex-col gap-4 p-10 lg:flex-row lg:gap-8">
            <div className="flex flex-col gap-8">
              <div className="text-xl font-medium text-white lg:text-xl">
                <h1>PROJECT</h1>
                <hr
                  style={{
                    color: 'white',
                    height: '2px',
                    width: '105px',
                  }}
                />
              </div>
              <div className="text-[50px] font-bold text-white lg:text-[100px]">
                <h1>ECOMMERCE</h1>
              </div>
              <div className="text-xl font-medium text-white">
                <h2>
                  Website Ecommerce Fashion Brand dibuat dengan FrontEnd{' '}
                  <b className="text-orange">ReactJS</b>, BackEnd{' '}
                  <b className="text-orange">Laravel</b>, dan{' '}
                  <b className="text-orange">MySQL</b> sebagai database.
                </h2>
              </div>
              <div className="text-white">
                <Link href={'https://github.com/trshofcode/ecommerce-laract9'}>
                  <MenuButton>View Code</MenuButton>{' '}
                </Link>
              </div>
            </div>
            <div className="py-2 lg:py-12 ">
              <div class="overflow-hidden rounded-xl border-2 border-gray-300">
                <div class="flex h-11 w-full items-center justify-start space-x-1.5 border-b-2 border-gray-300 bg-gray-50 px-3">
                  <span class="h-3 w-3 rounded-full bg-rose-400"></span>
                  <span class="h-3 w-3 rounded-full bg-yellow-400"></span>
                  <span class="h-3 w-3 rounded-full bg-green"></span>
                </div>
                <div class="h-[18rem] w-full">
                  <Image src={porto1} alt="mockup ecommerce" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-scroll">
          <div className="flex flex-col p-12 lg:flex-row lg:gap-12">
            <div className="flex flex-col gap-4">
              <div className="text-xl font-medium text-white lg:text-xl">
                <h1>PROJECT</h1>
                <hr
                  style={{
                    color: 'white',
                    height: '2px',
                    width: '105px',
                  }}
                />
              </div>
              <div className="text-[50px] font-bold text-white lg:text-[100px]">
                <h1>e-PKL</h1>
              </div>
              <div className="text-xl text-white">
                <h2>Aplikasi Manajemen PKL untuk siswa SMK Negeri 5 Surakarta, dibuat dengan <b className="text-orange">Flutter</b> dan <b className="text-orange">GoogleSheetAPI</b> sebagai database.</h2>
              </div>
              <div className='text-white'>
                <Link href={'https://github.com/trshofcode/pkl'}>
                  <MenuButton>View Code</MenuButton>{' '}
                </Link>
              </div>
            </div>
            <div className="py-2">
              <div class="relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-gray-200 bg-gray-200 shadow-xl dark:border-gray-200">
                <div class="absolute top-0 left-1/2 h-[18px] w-[148px] -translate-x-1/2 rounded-b-[1rem] bg-gray-200"></div>
                <div class="-start-[17px] rounded-s-lg absolute top-[124px] h-[46px] w-[3px] bg-gray-200"></div>
                <div class="-start-[17px] rounded-s-lg absolute top-[178px] h-[46px] w-[3px] bg-gray-200"></div>
                <div class="-end-[17px] rounded-e-lg absolute top-[142px] h-[64px] w-[3px] bg-gray-200"></div>
                <div class="h-[572px] w-[272px] overflow-hidden rounded-[2rem] bg-white dark:bg-gray-200">
                  <Image
                    src={porto2}
                    className="hidden dark:block"
                    alt="mockup e-pkl"
                    width={272}
                    height={572}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-scroll">
          <div className="flex flex-col p-12 lg:flex-row lg:gap-80">
            <div className="flex flex-col gap-4">
              <div className="text-xl font-medium text-white lg:text-xl">
                <h1>PROJECT</h1>
                <hr
                  style={{
                    color: 'white',
                    height: '2px',
                    width: '105px',
                  }}
                />
              </div>
              <div className="text-[50px] text-white lg:text-[100px]">
                <h1>NETWORK</h1>
              </div>
              <div className="text-xl text-white">
                <h2>LAN, WAN, MIKROTIK</h2>
              </div>
            </div>
            <div className="py-12">
              <img src="https://placehold.co/600x400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
