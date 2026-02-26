import { Typewriter } from "react-simple-typewriter";
import manoS from "../assets/mano3.png";

function HeroSection() {
  return (
    <>
      <div
        className="flex flex-col-reverse items-center justify-center lg:h-screen
      xl:flex-row xl:w-[80%] xl:m-auto xl:pt-20"
      >
        <section
          className="flex items-center text-white px-4 font-mono font-bold
         "
        >
          <div
            className="space-y-6 text-center
          xl:text-left xl:w-2/3"
          >
            <p className="-mb-2 text-xl mt-8 lg:text-4xl ">Hello! This is</p>
            <h1 className="relative inline-block text-4xl">
              <span className="relative z-10 text-white text-[100px] lg:text-[180px] ">
                Mano
              </span>
              <span className="absolute bottom-3 xl:bottom-5 left-0 h-6 w-full bg-[#BB77FF] z-0"></span>
            </h1>
            <p className="text-xl lg:text-4xl ">
              <Typewriter
                words={[
                  "ML Engineer",
                  "Software Developer",
                  "AI Enthusiast",
                  "Graphic Desginer"
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <p className=" font-semibold text-white w-full mb-5 lg:text-2xl">
              Crafting Intelligent Systems & Scalable Solutions.
            </p>
          </div>
        </section>
        <div className="flex justify-center items-center">
   <div className="flex justify-center items-center ">
    {/* <img src={manoF} alt="img" className="w-96 lg:block hidden " /> */}
      <img
      src={manoS}
      alt="img"
      className="w-60 mt-24 xl:mt-0 bg-[#BB77FF] p-2 rounded-full xl:w-128"
      />
</div>
</div>
      </div>
    </>
  );
}
export default HeroSection;
