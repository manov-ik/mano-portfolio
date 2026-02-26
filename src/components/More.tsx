import React from "react";
import manoS from "../assets/mano1.png";


/* ── Types ──────────────────────────────────────────────────────────────────── */
interface CardItem {
  dateRange: string;
  title: string;
  company?: string;
  description: string;
  subtitle?: string;
  tags?: string[];
}

/* ── Card ────────────────────────────────────────────────────────────────────── */
const Card = ({ dateRange, title, company, description, tags }: CardItem) => (
  <div className="group w-full flex flex-col rounded-2xl bg-[#2323288d] border border-[#484851] hover:bg-[#232328] hover:backdrop-blur-xl transition-all duration-300 overflow-hidden">
    <div className="p-6 flex flex-col gap-3 flex-1">
      {/* Top row: date + optional first tag */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-[#BB77FF] bg-[#BB77FF20] px-2 py-1 rounded-full font-mono">
          {dateRange}
        </span>
        {tags && tags[0] && (
          <span className="text-xs text-gray-400 border border-[#484851] px-2 py-0.5 rounded-full font-mono">
            {tags[0]}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white font-mono z-10">
        <span className="relative w-fit inline-block">
          {title},
          <span className="absolute -z-10 bottom-0 left-0 h-1.5 w-0 bg-[#BB77FF] transition-all duration-300 group-hover:w-full" />
        </span>{" "}
        {company && company}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm font-mono leading-relaxed flex-1">
        {description}
      </p>

      {/* Extra tags */}
      {tags && tags.length > 1 && (
        <div className="flex flex-wrap gap-1.5 mt-1">
          {tags.slice(1).map((t) => (
            <span
              key={t}
              className="text-[10px] text-gray-400 border border-[#484851] px-2 py-0.5 rounded-full font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

/* ── Section heading ─────────────────────────────────────────────────────────── */
const SectionHeading = ({ label }: { label: string }) => (
  <p className="font-mono text-2xl font-bold text-[#1A191D] bg-white p-2 w-fit transition-all duration-300 hover:bg-[#BB77FF] mb-5">
    {label}
  </p>
);

/* ── Page ────────────────────────────────────────────────────────────────────── */
const More = () => {
  const experienceData: CardItem[] = [
    {
      dateRange: "Mar 2025 – Jul 2025",
      title: "3D Artist",
      company: "TIC Global Services",
      description:
        "Created high-quality 3D models and visual assets for branding and web projects.",
      tags: ["Blender", "3D Modeling"],
    },
    {
      dateRange: "Oct 2024 – Nov 2024",
      title: "Frontend Intern",
      company: "FLY91",
      description:
        "Developed a web app for employees to request cabs and flights.",
      tags: ["React", "JavaScript"],
    },
    {
      dateRange: "Apr 2024 – Apr 2025",
      title: "Graphic Designer",
      company: "QPo Cabs",
      description:
        "Designed the official logo, promotional posters, and graphic illustrations for QPo Cabs.",
      tags: ["Illustrator","Figma"],
    },
  ];

  const educationData: CardItem[] = [
    {
      dateRange: "2022 – Present",
      title: "B.E. Mechanical Engineering",
      company: "Rajalakshmi Engineering College",
      description:
        "Pursuing a degree in Mechanical Engineering while actively building software projects and leading tech initiatives.",
      tags: ["Chennai, India"],
    },
  ];

  const achievementsData: CardItem[] = [
    {
      dateRange: "2024 – 2025",
      title: "Vice President",
      company: "DEVS REC Club",
      description:
        "Led tech initiatives in one of REC's largest tech clubs, impacting 2000+ members through projects, innovation, and partnerships.",
      tags: ["Leadership", "Community"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 ">
      {/* Page title */}
      <div className="flex justify-center mb-4">
        <p className="font-mono text-3xl font-bold text-[#1A191D] bg-white p-2 transition-all duration-300 hover:bg-[#BB77FF]">
          More About Me
        </p>
      </div>

      <p className="text-center text-white font-mono text-base mb-12 opacity-60 w-[80%] mx-auto">
        Experience, education, and the milestones that shaped who I am.
      </p>

      {/* Content grid */}
      <div className="w-[90%] sm:w-[85%] mx-auto flex flex-col gap-16">

        {/* Experience */}
        <section>
          <SectionHeading label="My Experience" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experienceData.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <SectionHeading label="My Education" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {educationData.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <SectionHeading label="Achievements" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievementsData.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>
        </section>

      </div>
      <div className="flex -mb-10 justify-center items-center w-full pt-12 mt-24 bg-[#FFFFFF]">
    
        {/* The Image */}
        <img
          src={manoS}
          alt="img"
          className="w-[50%]"
        />
        
      </div>
    </div>
  );
};

export default React.memo(More);
