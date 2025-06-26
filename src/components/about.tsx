import illustration from "../assets/illustation-face.png";

function About() {
  return (
    <>
      <div className=" bg-[#232328] font-mono mb-10  lg:pb-10  ">
        <div className="flex flex-row  items-center lg:w-[80%] lg:m-auto ">
          <h1
            className="text-4xl  font-bold text-white m-auto my-6 lg:mb-0 lg:mr-0
           "
          >
            About me
          </h1>
        </div>
        <div
          className="m-auto flex flex-col-reverse w-[80%] 
        lg:flex-row "
        >
          <div className="bg-white w-72 h-72 m-auto my-7 transition-all duration-300 ease-in-out hover:rounded-[50%]  ">
            <img
              src={illustration}
              alt="img"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>

          <div className="m-auto lg:w-[60%] lg:mr-0">
            <p className="text-justify text-white text-lg  lg:text-xl">
              I'm a engineering student who is interested in technology and
              innovation. I enjoy designing and venturing into the limitless
              opportunities of machine learning and engineering.
            </p>
            <br className="hidden  lg:block" />
            <br />
            <p className="text-justify text-white text-lg  lg:text-xl ">
              With ML engineering, product development, and software solution
              expertise, I aim to develop meaningful, real-world applications.
              Whether developing AI applications, creating product animations,
              or propelling digital transformation, I'm always excited to learn,
              test, and innovate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
