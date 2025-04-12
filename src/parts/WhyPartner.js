/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

const Why = () => {
  return (
    <section className="py-12 mb-12 px-8 ">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-6">
          <h2 className="mb-2 text-center text-2xl  md:text-3xl lg:text-5xl font-bold text-theme-blue">
            Why Partner With Us
          </h2>
          <p className="text-center font-light lg:text-lg text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            itaque modi quos hic placeat laudantium inventore reiciendis
            cupiditate, facilis aliquam.
          </p>
        </div>
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div>
            <img
              src="https://shadcnblocks.com/images/block/placeholder-1.svg"
              alt="placholder"
              className="rounded-lg border"
            />
            <div className="px-4 pt-10">
              <h3 className="font-bold text-theme-teal">Innovation Driven</h3>
              <p className="text-base font-light text-gray-400">
                We actively seek collaboration with technology pioneers to offer
                state-of-the-art solutions.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://shadcnblocks.com/images/block/placeholder-2.svg"
              alt="placholder"
              className="rounded-lg border"
            />
            <div className="px-4 pt-10">
              <h3 className="font-medium text-theme-teal">
                Sustainability Focused
              </h3>
              <p className="text-base font-light text-gray-400">
                Our partnerships help foster sustainable practices in building
                management, supporting greener futures.
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <img
              src="https://shadcnblocks.com/images/block/placeholder-3.svg "
              alt="placholder"
              className="aspect-video max-h-[480px] w-full rounded-lg border bg-muted object-cover"
            />
            <div className="px-4 pt-10">
              <h3 className="font-bold text-theme-teal">
                Client-Centric Approach
              </h3>
              <p className="text-base font-light text-gray-400">
                Working closely with partners, we tailor comprehensive solutions
                that address the unique challenges faced by our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
