/* eslint-disable no-unused-vars */
import React from "react";
import { dishes } from "../data/dishes";
import LandingPage from "../components/LandingPage";
import { Link } from "react-router-dom";

import { TextEffect } from "../components/TextEffect";

function Home() {
  return (
    <div>
      <LandingPage />
      <div className="max-w-[60ch] mx-auto px-3 pt-0 pb-5 text-5xl  border-spacing-2 font-bold text-center font-poppins">
        <TextEffect as="span" per="char">GAMBIAN CUISINES </TextEffect>
          
        <h2 className="max-w-[50ch] mx-auto px-3 text-2xl  border-spacing-2 font-bold text-center font-poppins">
          <TextEffect as="span" per="char"> 
           Have a snippet of some of the diverse dishes and culinary delights of the Gambian people.
            
            </TextEffect>  
        </h2>
      </div>

      <div className="w-full  grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {dishes.map((dish) => (
          <div key={dish.id}>
            <div className="container mx-auto p-4">
              <h1 className="text-2xl font-bold mb-4 sm:mb-2">{dish.name}</h1>

              <div className="space-x-4">

                <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-y-4 gap-4 p-4 shadow-lg rounded-lg">

                  <p className="text-base sm:text-xl">{dish.description}</p>
                  <img
                    src={dish.imageUrl}
                    alt={dish.name}
                    className="w-full h-60 object-cover rounded-lg "
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-16 mt-10"></div>
    </div>
  );
}
export default Home;
