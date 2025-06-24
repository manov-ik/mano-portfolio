import { Typewriter } from "react-simple-typewriter";
import mano from "../assets/mano.png";

function HeroSection() {
  return (
    <>
      <div
        className="w-[80%] mt-[5%] m-auto flex flex-row items-center bg-[url('src/assets/Perspective Grid.svg')] 
       max-sm:w-[90%] max-sm:flex-col-reverse "
      >
        <section className="flex items-center text-white px-4 font-mono font-bold">
          <div className="text-left space-y-6 max-sm:text-center">
            <p className="text-4xl -mb-2 max-sm:text-2xl">Hello! This is</p>
            <h1 className="relative inline-block text-6xl ">
              <span className="relative z-10 text-white text-[160px] max-sm:text-[120px] ">
                Mano
              </span>
              <span className="absolute bottom-3 left-0 h-6 w-full bg-[#BB77FF] z-0"></span>
            </h1>
            <p className="text-2xl">
              <Typewriter
                words={[
                  "ML Engineer",
                  "Software Developer",
                  "3D Artist",
                  "AI Enthusiast",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <p className="text-3xl font-semibold text-white w-2xl max-sm:w-md max-sm:text-xl">
              Crafting Intelligent Systems & Scalable Software Solutions.
            </p>
          </div>
        </section>
        <div className="flex items-center m-auto mr-0 max-sm:m-auto bg-amber-400">
          <img src={mano} alt="img" className="w-96 mr-10 max-sm:w-45 " />
        </div>
      </div>
    </>
  );
}
export default HeroSection;
