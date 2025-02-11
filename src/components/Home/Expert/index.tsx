"use client";
import Marquee from "react-fast-marquee";

import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ExpertData } from "@/app/api/data";

const Expert = () => {
  return (
    <section className="bg-primary/15">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="text-center">
          <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
            EXPERT CHEFS
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
            Let&apos;s meet the expert.
          </h2>
        </div>
        <Marquee>
          {ExpertData.map((items, i) => (
            <div key={i}>
              <div className="m-3 py-14 my-10 text-center">
                <div className="relative">
                  <Image
                    src={items.imgSrc}
                    alt="gaby"
                    width={362}
                    height={262}
                    className="inline-block m-auto"
                  />
                  <div className="absolute top-[50%] right-[2%]">
                    <Image
                      src={"/images/Expert/Linkedin.svg"}
                      alt="linkedin"
                      width={220}
                      height={120}
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-lightblack">
                  {items.name}
                </h3>
                <h4 className="text-lg font-normal text-lightblack pt-4 pb-2 opacity-50">
                  {items.profession}
                </h4>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Expert;
