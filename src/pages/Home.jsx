/* eslint-disable no-unused-vars */
import React from "react";
import { dishes } from "../data/dishes";
import LandingPage from "../components/LandingPage";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <LandingPage />
      <div className="py-4" id="asdf">
        <h1 className="text-5xl py-3 border-spacing-2 font-bold text-center font-poppins">
          NAKSIN EMPIRE
        </h1>
        <h2 className="max-w-[60ch] mx-auto text-xl  text-center px-3">
          Have a snippet of some of the diverse dishes and culinary delights of
          the Gambian people.
        </h2>
      </div>

      <div className="w-full  grid  grid-cols-2">
        {dishes.map((dish) => (
          <div key={dish.id}>
            <div className="container mx-auto p-4">
              <h1 className="text-2xl font-bold mb-4">{dish.name}</h1>

              <div className="space-x-4">
                <div className="grid w-full grid-cols-2 p-4 shadow-lg rounded-lg">
                  <p className="text-base">{dish.description}</p>
                  <img
                    src={dish.imageUrl}
                    alt={dish.name}
                    className="w-full h-60 object-cover rounded-lg"
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
