import illustation from "../assets/illustation-face.png";

function About() {
  return (
    <div className="w-full h-screen m-auto flex flex-col items-center bg-[#232328] font-mono  ">
      <div className="w-[80%] m-auto flex flex-row items-center">
        <h1 className="text-4xl font-bold text-white m-auto mr-0 ">About me</h1>
      </div>
      <div className=" m-auto mt-0 flex flex-row w-[80%]">
        <div className="bg-white w-96 m-auto">
          <img src={illustation} alt="img" className="w-96" />
        </div>
        <div className="mr-0 m-auto w-[60%] ">
          <p className="text-justify text-white text-2xl">
            I'm a engineering student who is interested in technology and
            innovation. I enjoy designing and venturing into the limitless
            opportunities of machine learning and engineering.
          </p>
          <br />
          <br />
          <p className="text-justify text-white text-2xl font-medium">
            With ML engineering, product development, and software solution
            expertise, I aim to develop meaningful, real-world applications.
            Whether developing AI applications, creating product animations, or
            propelling digital transformation, I'm always excited to learn,
            test, and innovate.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
