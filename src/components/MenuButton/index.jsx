import React from 'react';

export const MenuButton = ({ children }) => {
  return (
    <div className=" group relative cursor-pointer overflow-hidden  text-base uppercase leading-6 lg:text-2xl">
      <span className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
        {children}
      </span>
      <span className="absolute left-0 inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
        {children}
      </span>
    </div>
  );
};
