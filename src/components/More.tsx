import React from "react";

// Reusable Card Component for Experience, Education, and Achievements
const Card = ({ dateRange, title, description, subtitle }: any) => (
  <div className="w-full p-1 flex flex-col flex-wrap rounded-3xl bg-[#23232850] border-1 border-[#484851] hover:bg-[#232328] backdrop-blur-xl transition-colors duration-300">
    <div className="p-4 gap-2 flex flex-col">
      <p className="text-white font-light text-xs">{dateRange}</p>
      <p className="text-white text-2xl">{title}</p>
      {subtitle && <p className="text-white font-light text-xs">{subtitle}</p>}
      <p className="text-white font-light text-xs">{description}</p>
    </div>
  </div>
);

const More = () => {
  const experienceData = [
    {
      dateRange: "Mar 2025 – Present",
      title: "3D Artist, TIC Global Services",
      description:
        "Created high-quality 3D models and visual assets for branding and web projects.",
    },
    {
      dateRange: "Oct 2024 – Nov 2024",
      title: "Frontend Intern, FLY91",
      description:
        "Developed a web app for employees to request cabs and flights.",
    },
    {
      dateRange: "April 2024 – April 2025",
      title: "Graphic Designer, QPo Cabs",
      description:
        "Designed the official logo, promotional posters, and graphic illustrations for QPo Cabs.",
    },
  ];

  const educationData = [
    {
      dateRange: "2022 - Present",
      title: "B.E. Mechanical",
      description: "Rajalakshmi Engineering College",
    },
  ];

  const achievementsData = [
    {
      dateRange: "2024 – 2025",
      title: "Vice President, DEVS REC Club (Tech Club)",
      description:
        "Led tech initiatives in one of REC’s largest tech clubs, impacting 2000+ members through projects, innovation, and partnerships.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 font-bold font-mono w-[80%] m-auto">
      <div className="w-full flex flex-row gap-5">
        <div className="w-full flex flex-col lg:flex-row gap-5">
          {/* Experience Section */}
          <div className="w-full flex flex-col gap-5">
            <p className="text-2xl font-bold text-white p-2">My Experience</p>
            {experienceData.map((item, index) => (
              <Card
                key={index}
                dateRange={item.dateRange}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {/* Education Section */}
          <div className="w-full flex flex-col gap-5">
            <p className="text-2xl font-bold text-white p-2">My Education</p>
            {educationData.map((item, index) => (
              <Card
                key={index}
                dateRange={item.dateRange}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {/* Achievements Section */}
          <div className="w-full flex flex-col gap-5">
            <p className="text-2xl font-bold text-white p-2">Achievements</p>
            {achievementsData.map((item, index) => (
              <Card
                key={index}
                dateRange={item.dateRange}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(More);
