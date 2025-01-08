"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 mt-[80px]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-black bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m Devansh Nagpal {" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "a Full-Stack Developer",
                1000,
                "a Machine Learning Enthusiest",
                1000,
                "an Embedded Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#3d3d3d] text-base sm:text-lg mb-6 lg:text-xl">
          A Computer Engineering student driven by curiosity and creativity in technology. Explore my journey as I craft solutions in Embedded Systems, Software Development, and AI.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 bg-black hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black border border-black mt-3"
            >
              <span className="block bg-[#ffffff] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
  className="col-span-4 place-self-center mt-4 lg:mt-0"
>
  <div className="w-[350px] h-[350px] bg-[url('/ProfilePicture.png')] bg-no-repeat bg-center bg-cover shadow-inner rounded-full animate-profile__animate relative border-[4px] border-white/30 backdrop-blur-md" >
    {/* Adjust Image props or remove if unnecessary */}
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default HeroSection;