import InstaSVG from "../assets/Instagram.svg";
import GithubSVG from "../assets/GitHub.svg";
import MailSVG from "../assets/Mail.svg";
import LinkedInSVG from "../assets/LinkedIn.svg";

function Connect() {
  return (
    <div className="font-mono mt-12 w-[80%] flex m-auto text-4xl font-bold text-white flex-col">
      <p className="ml-0">Let's Connect!</p>
      <div className=" flex flex-row gap-5 mt-12">
        <div className="w-[50%]  flex flex-col justify-between gap-4">
          <div className=" rounded-2xl  h-full  p-10 flex bg-[#23232865]  font-bold">
            <div className="justify-center items-left flex flex-col">
              <p className="text-2xl">Tamil Nadu,India</p>
              <p className="text-2xl">+91 93610 26919</p>
            </div>
          </div>
          <div className="rounded-2xl flex h-5/6 bg-[#23232865] ">
            <p className=" p-5 pl-10 m-auto ml-0 text-left text-2xl">
              @ MANOVIKRAM K
            </p>
          </div>
          <div className="flex flex-row justify-around gap-10 h-1/4">
            <div className="w-[25%] rounded-2xl text-center  bg-[#23232865] py-2 ">
              <a target="blank" href="https://www.instagram.com/manov_ik/">
                <img
                  src={InstaSVG}
                  alt="instagram"
                  className="w-20   m-auto "
                />
              </a>
            </div>
            <div className="w-[25%] rounded-2xl text-center  bg-[#23232865] py-2 ">
              <a target="blank" href="https://github.com/manov-ik">
                <img src={GithubSVG} alt="github" className="w-20 m-auto " />
              </a>
            </div>
            <div className="w-[25%] rounded-2xl text-center  bg-[#23232865] py-2 ">
              <a target="blank" href="https://www.linkedin.com/in/manovikramk/">
                <img
                  src={LinkedInSVG}
                  alt="linkedin"
                  className="w-20 m-auto "
                />
              </a>
            </div>
            <div className="w-[25%] rounded-2xl text-center  bg-[#23232865] py-2 ">
              <a target="blank" href="mailto:manozart5@gmail.com">
                <img src={MailSVG} alt="mail" className="w-20 m-auto " />
              </a>
            </div>
          </div>
        </div>
        <div className="w-[50%] rounded-2xl p-5 bg-[#23232865] ">
          <p className="text-lg font-light">Name</p>
          <input className="w-full border-b mb-2 text-2xl"></input>
          <p className="text-lg font-light">Email</p>
          <input className="w-full border-b mb-2 text-2xl"></input>
          <p className="text-lg font-light">Contact No.</p>
          <input className="w-full border-b mb-2 text-2xl"></input>
          <p className="text-lg font-light">Message</p>
          <input className="w-full border-b mb-2 text-2xl"></input>
          <button className="w-full text-lg rounded-lg p-2 bg-[#BB77FF] ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default Connect;
