import SkillComp from "./skillComp";

// export default function SkillsGraph() {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const centerRef = useRef<HTMLDivElement | null>(null);
//   const group1Ref = useRef<HTMLDivElement | null>(null);
//   const group2Ref = useRef<HTMLDivElement | null>(null);
//   const group3Ref = useRef<HTMLDivElement | null>(null);

//   const [positions, setPositions] = useState({
//     center: { x: 0, y: 0 },
//     group1: { x: 0, y: 0 },
//     group2: { x: 0, y: 0 },
//     group3: { x: 0, y: 0 },
//   });

//   const updatePositions = () => {
//     if (
//       !containerRef.current ||
//       !centerRef.current ||
//       !group1Ref.current ||
//       !group2Ref.current ||
//       !group3Ref.current
//     )
//       return;

//     const containerRect = containerRef.current.getBoundingClientRect();

//     const getRelativePosition = (element: HTMLElement) => {
//       const rect = element.getBoundingClientRect();
//       return {
//         x: rect.left + rect.width / 2 - containerRect.left,
//         y: rect.top + rect.height / 2 - containerRect.top,
//       };
//     };

//     setPositions({
//       center: getRelativePosition(centerRef.current),
//       group1: getRelativePosition(group1Ref.current),
//       group2: getRelativePosition(group2Ref.current),
//       group3: getRelativePosition(group3Ref.current),
//     });
//   };

//   useEffect(() => {
//     updatePositions();
//     window.addEventListener("resize", updatePositions);
//     return () => window.removeEventListener("resize", updatePositions);
//   }, []);

//   const handleDragEnd = (group: "group1" | "group2" | "group3" | "group4") => {
//     return () => {
//       if (!containerRef.current) return;
//       const containerRect = containerRef.current.getBoundingClientRect();
//       const element =
//         group === "group1"
//           ? group1Ref.current
//           : group === "group2"
//           ? group2Ref.current
//           : group3Ref.current;

//       if (!element) return;

//       const rect = element.getBoundingClientRect();
//       setPositions((prev) => ({
//         ...prev,
//         [group]: {
//           x: rect.left + rect.width / 2 - containerRect.left,
//           y: rect.top + rect.height / 2 - containerRect.top,
//         },
//       }));
//     };
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-screen text-white font-mono overflow-hidden"
//     >
//       {/* Center Node */}
//       <div
//         ref={centerRef}
//         className="absolute top-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
//       >
//         <h1 className="text-3xl font-bold text-[#1A191D] z-20 bg-white p-2">
//           Skills
//         </h1>
//       </div>

//       {/* Draggable Group 1 */}
//       <motion.div
//         ref={group1Ref}
//         drag
//         dragConstraints={containerRef}
//         dragMomentum={false}
//         onDragEnd={handleDragEnd("group1")}
//         initial={{ x: "-40%", y: "20%" }}
//         className="absolute top-[70%] w-[30%] left-[10%] z-10 cursor-move p-2 flex flex-wrap justify-center rounded-3xl bg-[#23232882]"
//       >
//         <SkillComp text="Python" />
//         <SkillComp text="Java" />
//         <SkillComp text="C" />
//         <SkillComp text="HTML" />
//         <SkillComp text="CSS" />
//         <SkillComp text="JavaScript" />
//         <SkillComp text="React" />
//         <SkillComp text="Tailwind CSS" />
//         <SkillComp text="SQL" />
//       </motion.div>
//       <motion.div
//         ref={group1Ref}
//         drag
//         dragConstraints={containerRef}
//         dragMomentum={false}
//         onDragEnd={handleDragEnd("group1")}
//         initial={{ x: "-40%", y: "20%" }}
//         className="absolute top-[70%] w-[30%] left-[10%] z-10 cursor-move p-2 flex flex-wrap justify-center rounded-3xl bg-[#23232882]"
//       >
//         <SkillComp text="Python" />
//         <SkillComp text="Java" />
//         <SkillComp text="C" />
//         <SkillComp text="HTML" />
//         <SkillComp text="CSS" />
//         <SkillComp text="JavaScript" />
//         <SkillComp text="React" />
//         <SkillComp text="Tailwind CSS" />
//         <SkillComp text="SQL" />
//       </motion.div>

//       {/* Draggable Group 2 */}
//       <motion.div
//         ref={group2Ref}
//         drag
//         dragConstraints={containerRef}
//         dragMomentum={false}
//         onDragEnd={handleDragEnd("group2")}
//         initial={{ x: "40%", y: "-20%" }}
//         className="absolute top-[70%] w-[30%] left-[10%] z-10 cursor-move p-2 flex flex-wrap justify-center rounded-3xl bg-[#23232882]"
//       >
//         <SkillComp text="TensorFlow" />
//         <SkillComp text="FastAPI" />
//         <SkillComp text="Django" />
//         <SkillComp text="Flask" />
//         <SkillComp text="GIT" />
//         <SkillComp text="GitHub" />
//         <SkillComp text="Docker" />
//       </motion.div>

//       {/* Draggable Group 3 */}
//       <motion.div
//         ref={group3Ref}
//         drag
//         dragConstraints={containerRef}
//         dragMomentum={false}
//         onDragEnd={handleDragEnd("group3")}
//         initial={{ x: "-15%", y: "40%" }}
//         className="absolute top-[70%] w-[30%] left-[10%] z-10 cursor-move p-2 flex flex-wrap justify-center rounded-3xl bg-[#23232882]"
//       >
//         <SkillComp text="Blender" />
//         <SkillComp text="Photoshop" />
//         <SkillComp text="Illustrator" />
//         <SkillComp text="Figma" />
//       </motion.div>
//     </div>
//   );
// }
// Reusable component for displaying a group of skills
function Skill() {
  // Data structure for different skill categories
  const skillData = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "Go (Basic)", "C"],
    },
    {
      title: "Technical & Frameworks",
      skills: ["AI", "ML", "DL", "Django", "React (Basic)", "FastAPI"],
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "PostgreSQL", "Git", "GitHub", "Power BI"],
    },
    {
      title: "Design",
      skills: ["Blender", "Figma", "Photoshop", "Illustrator"],
    },
  ];

  return (
    <div className="w-full min-h-screen text-white font-mono overflow-hidden ">
      <h1 className="mt-20 w-fit mx-auto mb-4 text-3xl font-bold text-[#1A191D] z-20 bg-white p-2 transition-all duration-300 hover:bg-[#BB77FF] relative group">
        Skills
        <span className="absolute bottom-0 -z-10 left-0 h-1 w-0 bg-[#BB77FF] transition-all duration-300 group-hover:w-full"></span>
      </h1>
      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        {skillData.map((group, index) => (
          <div
            key={index}
            className="w-full p-1 flex flex-col flex-wrap rounded-3xl bg-[#23232850] border-1 border-[#484851] hover:bg-[#232328] backdrop-blur-xl transition-colors duration-300 group"
          >
            <div className="relative flex w-[80%] m-auto mt-2 justify-start items-center">
              <p className="text-xs z-10 relative">
                {group.title}
                <span className="absolute bottom-0 -z-10 left-0 h-1 w-0 bg-[#BB77FF] transition-all duration-300 group-hover:w-full"></span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 p-2">
              {group.skills.map((skill, skillIndex) => (
                <SkillComp text={skill} key={skillIndex} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
