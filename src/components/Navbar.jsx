/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>

     <header className="sticky top-0 z-40 w-full border-b  shadow-sm"
          style={{ backgroundColor: '#556B2F' }}>
     <div className="container flex h-16 items-center justify-between px-4 md:px-6">
       <Link className="flex items-center gap-2 text-lg font-bold" to="/">
         <span className='text-primary text-larger text-[#FFFFF0]'>GamFood</span>
       </Link>
       <nav className="hidden gap-4 text-sm font-larger md:flex bg-primary-500/5">
         <Link className="hover:text-[#FFD700] hover:underline-none text-[#FFFFF0]" to="/">Home</Link>
         <a className="hover:text-[#FFD700] hover:underline-none text-[#FFFFF0]" href="#asdf">Home</a>
         <Link className="hover:text-[#FFD700] text-[#FFFFF0]" to="/ingeridients">Dishes</Link>
         <Link className="hover:text-[#FFD700] text-[#FFFFF0]" to="/cooking-guides">Cooking Guides</Link>
         <Link className="hover:text-[#FFD700] text-[#FFFFF0]" to="/about">About</Link>
       </nav>

       <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 md:hidden">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           width="24"
           height="24"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
           className="h-5 w-5"
         >
           <line x1="4" x2="20" y1="12" y2="12"></line>
           <line x1="4" x2="20" y1="6" y2="6"></line>
           <line x1="4" x2="20" y1="18" y2="18"></line>
         </svg>
         <span className="sr-only">Toggle menu</span>
       </button>
     </div>
   </header>

    </>

  );
};

export default Navbar;
