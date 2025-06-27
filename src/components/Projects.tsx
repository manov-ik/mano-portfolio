import ProjectComp from "./ProjectComp";
import lyricGen from "../assets/lyric_gen.png";
import defectDetect from "../assets/defect_detect.jpg";
import projectImg from "../assets/project_img.png";

import rtx4090 from "../assets/rtx4090.png";
import nothing from "../assets/nothing.png";
import keyboard from "../assets/keyboard.png";
import ashetic from "../assets/asthetic1.png";
import coke from "../assets/coke.png";
import moreOnInstagram from "../assets/more on instagram.png";
import tic from "../assets/tic.png";
import qpo from "../assets/qpo.png";
import rs500 from "../assets/500rs.png";

const WorksCard = ({ imgSrc, content, link }: any) => {
  return (
    <div className="w-1/2 md:w-1/3 xl:w-1/4 p-2">
      <div className="  rounded-2xl p-2 font-mono text-white bg-[#2323288d] border-1 border-[#484851] hover:bg-[#232328] transition-all duration-300 hover:backdrop-blur-xl xl:min-h-54 h-32 md:h-48">
        <a href={link} target="_blank">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt="Work Img"
              className="w-full object-center h-full object-cover rounded-2xl"
            />
          ) : (
            <p className="text-center text-lg font-bold">{content}</p>
          )}
        </a>
      </div>
    </div>
  );
};
function Projects() {
  const projects = [
    {
      title: "Spotify Lyric Generator",
      description:
        "Developed a computer vision system to identify weld and paint defects, classify surface scratches, and provide real-time prediction feedback.",
      techStack: "Python, Web Scaping, FastApi, Html, Css, Javascript",
      githubLink: "https://github.com/manov-ik/spotify-lyric-generator",
      projectLink: "https://spotify-lyric-generator.vercel.app/",
      imageSrc: lyricGen,
    },
    {
      title: "Defect Detection System using YOLOv5",
      description:
        "Developed a computer vision system to identify weld and paint defects, classify surface scratches, and provide real-time prediction feedback.",
      techStack: "Python, YOLOv5, OpenCV, FastApi",
      githubLink: "https://github.com/manov-ik/defect-detection-system-v1",
      imageSrc: defectDetect,
    },
    {
      title: "ERP Chatbot",
      description:
        "Designed a chatbot capable of responding to queries from PDFs, answering company policy questions, replying to user messages, and retaining conversational memory.",
      techStack: "Python, Flask, Gemini",
      githubLink: "https://github.com/manov-ik/erp-chatbot-server",
      imageSrc: projectImg,
    },
    {
      title: "Grands – GDSC 2023",
      description:
        "A social media app dedicated to enhancing the well-being of elderly individuals through engagement and interaction.",
      techStack: "Python, Flask, Gemini, Voice Cloning",
      githubLink: "https://github.com/manov-ik/Grands-GSC24",
      imageSrc: projectImg,
    },
  ];
  const works = [
    {
      imgSrc: nothing,
      link: "https://www.instagram.com/mano3d/reel/CzQ6H38BNCY/",
      content: "nothing",
    },
    {
      imgSrc: tic,
      link: "https://www.theinternetcompany.one/design.html",
      content: "tic",
    },
    {
      imgSrc: coke,
      link: "https://www.instagram.com/mano3d/reel/DJPJWGJPlki/",
      content: "coke",
    },
    {
      imgSrc: keyboard,
      link: "https://www.instagram.com/mano3d/reel/Cr8U8OQsBg0/",
      content: "keyboard",
    },
    { imgSrc: rtx4090, link: "", content: "rtx4090" },
    { imgSrc: ashetic, link: "", content: "ashetic" },
    {
      imgSrc: qpo,
      link: "https://www.linkedin.com/company/qpo-cabs/",
      content: "qpo",
    },
    { imgSrc: rs500, link: "", content: "rs500" },
    {
      imgSrc: moreOnInstagram,
      link: "https://www.instagram.com/mano3d/",
      content: "More on Instagram",
    },
  ];

  return (
    <>
      <div className="min-h-screen pt-24">
        <div className="flex justify-center mb-5">
          <p className="font-mono text-3xl font-bold text-[#1A191D] z-20 bg-white p-2 transition-all duration-300 hover:bg-[#BB77FF]">
            Projects
          </p>
        </div>
        {projects.map((project, index) => (
          <ProjectComp
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
            projectLink={project.projectLink}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
      <div className="my-4">
        <p className="font-mono my-2 xl:mt-2 mt-4 w-fit m-auto text-3xl font-bold text-[#1A191D] z-20 bg-white p-2 transition-all duration-300 hover:bg-[#BB77FF]">
          Works
        </p>
        <p className="text-center w-full text-white font-bold font-mono text-xl"></p>
        <div className="flex flex-wrap px-2 justify-center">
          {works.map((work, index) => (
            <WorksCard
              key={index}
              link={work.link}
              imgSrc={work.imgSrc}
              content={work.content}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
