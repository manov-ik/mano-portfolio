import ManoResume from "../assets/manovikram_k_resume.pdf";

function NavBar() {
  return (
    <div className="w-full h-16 bg-[#232328] flex flex-row items-center font-mono text-white z-10">
      <div className=" m-auto flex flex-col items-center font-black ">
        <a href="">
          <h1 className="text-2xl ">MA</h1>
          <h1 className="text-2xl -mt-3">NO</h1>
        </a>
      </div>
      <div className="w-1/2 m-auto flex flex-row items-center justify-end text-white">
        <button className="text-l font-bold mr-10">
          <a href="/"> Home</a>
        </button>
        <button className="text-l font-bold mr-10">About Me</button>
        <button className="text-l font-bold mr-10">
          <a href="/skill">Skill</a>
        </button>
        <button className="text-l font-bold mr-10">Project</button>
        <button className="text-l font-bold mr-10">Contact</button>
      </div>

      <a href={ManoResume} target="blank" className="pr-10">
        <p className="text-xs p-2 border-1 w-fit hover:bg-white delay-100 duration-300 ease-in-out hover:text-[#1A191D] rounded-lg">
          open resume
        </p>
      </a>
    </div>
  );
}

export default NavBar;
