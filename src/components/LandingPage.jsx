import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import domoda  from '../assets/domoda.jpg';
export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="bg-primary text-primary-foreground">

            <div className="container flex flex-col items-center gap-10 px-4 py-18 md:flex-row md:gap-30 md:py-24 md:pr-0">

              <div className="max-w-md space-y-4">
                <h1 className="text-3xl  font-bold tracking-tighter sm:text-4xl md:text-5xl"
                    style={{marginBottom: '75px'}}>
                  Discover the Flavors of Gambian Cuisine
                </h1>

                <p className="mt-5 text-muted-foreground"
                    style={{marginBottom: '25px',
                    fontSize: '20px',
                    marginTop: '-10px'
                    }}>

                  Gambian Food is your gateway to the rich and vibrant culinary traditions of The Gambia. Explore authentic
                  Gambian dishes, learn to cook them, and immerse yourself in the cultural heritage of this West African
                  nation.
                </p>
                <div className="flex gap-10">
                  <Link 
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:text-white hover:bg-[#556B2F]"
                    to="./pages/Ingredients"
                  >
                    Explore Ingredients
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:text-white hover:bg-[#556B2F]"
                     to="./pages/CookingGuide"
                  >
                    Learn to Cook
                  </Link>
                </div>
              </div>
              <div style={{marginLeft: '25px', }}>
              <img
              src='/assets/benachin.jpg'
                // src="https://i.ytimg.com/vi/u16Yodhdjr4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDXxczczRifqsGVsH9GotbirQG3zQ"
                width="600"
                height="400"
                alt="Gambian Cuisine"
                className="rounded-xl object-cover"
                style={{ aspectRatio: '550 / 400'}}
              />
              </div>
             
          </div>
          </section>
          {/* <section className="py-12 md:py-24">
            <div className="container grid gap-12 px-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Ingredients</h3>
                  <p className="text-sm text-muted-foreground">Explore the diverse ingredients used in Gambian cuisine.</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {['Peanuts', 'Palm Oil', 'Cassava', 'Millet', 'Okra', 'Fish'].map((item) => (
                      <a
                        key={item}
                        className="group flex flex-col items-center gap-2 rounded-lg bg-muted p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
                        href="#"
                      >
                        <img
                          src="/placeholder.svg"
                          width="80"
                          height="80"
                          alt={item}
                          className="rounded-full"
                          style={{ aspectRatio: '80 / 80', objectFit: 'cover' }}
                        />
                        <span className="text-sm font-medium group-hover:underline">{item}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Cooking Guides</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how to prepare authentic Gambian dishes with our step-by-step guides.
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {['Benachin', 'Domoda', 'Plasas', 'Supakanja'].map((dish) => (
                      <a
                        key={dish}
                        className="group flex flex-col items-center gap-2 rounded-lg bg-muted p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
                        href="#"
                      >
                        <img
                          src="/placeholder.svg"
                          width="80"
                          height="80"
                          alt={dish}
                          className="rounded-full"
                          style={{ aspectRatio: '80 / 80', objectFit: 'cover' }}
                        />
                        <span className="text-sm font-medium group-hover:underline">{dish}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Cuisine Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore the cultural significance and nutritional value of Gambian dishes.
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: (
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
                            className="h-8 w-8"
                          >
                            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                            <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                          </svg>
                        ),
                        label: 'Most Popular Dishes',
                        chartStyle: { width: '100%', height: '100%', minWidth: '0px' },
                        containerStyle: { position: 'relative', cursor: 'default', width: '100%', height: '100%', maxHeight: '300px', maxWidth: '533px' },
                      },
                      {
                        icon: (
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
                            className="h-8 w-8"
                          >
                            <line x1="12" x2="12" y1="19" y2="5"></line>
                            <line x1="16" x2="16" y1="19" y2="5"></line>
                            <line x1="8" x2="8" y1="19" y2="5"></line>
                          </svg>
                        ),
                        label: 'Regional Variations',
                        chartStyle: { width: '100%', height: '100%', minWidth: '0px' },
                        containerStyle: { position: 'relative', cursor: 'default', width: '100%', height: '100%', maxHeight: '300px', maxWidth: '533px' },
                      },
                    ].map((item, index) => (
                      <a
                        key={index}
                        className="group flex flex-col items-center gap-2 rounded-lg bg-muted p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
                        href="#"
                      >
                        {item.icon}
                        <span className="text-sm font-medium group-hover:underline">{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </main>
        {/* <footer className="bg-background py-4 text-center text-sm text-muted-foreground">
          <p>© 2024 GamFood. All rights reserved.</p>
        </footer> */}
      </div>
    </>
  );
}

