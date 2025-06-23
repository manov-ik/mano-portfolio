import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import SkillComp from "./skillComp";

export default function SkillsGraph() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);
  const group1Ref = useRef<HTMLDivElement | null>(null);
  const group2Ref = useRef<HTMLDivElement | null>(null);
  const group3Ref = useRef<HTMLDivElement | null>(null);

  const [positions, setPositions] = useState({
    center: { x: 0, y: 0 },
    group1: { x: 0, y: 0 },
    group2: { x: 0, y: 0 },
    group3: { x: 0, y: 0 },
  });

  const updatePositions = () => {
    if (
      !containerRef.current ||
      !centerRef.current ||
      !group1Ref.current ||
      !group2Ref.current ||
      !group3Ref.current
    )
      return;

    const containerRect = containerRef.current.getBoundingClientRect();

    const getRelativePosition = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top,
      };
    };

    setPositions({
      center: getRelativePosition(centerRef.current),
      group1: getRelativePosition(group1Ref.current),
      group2: getRelativePosition(group2Ref.current),
      group3: getRelativePosition(group3Ref.current),
    });
  };

  useEffect(() => {
    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  const handleDragEnd = (group: "group1" | "group2" | "group3") => {
    return () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const element =
        group === "group1"
          ? group1Ref.current
          : group === "group2"
          ? group2Ref.current
          : group3Ref.current;

      if (!element) return;

      const rect = element.getBoundingClientRect();
      setPositions((prev) => ({
        ...prev,
        [group]: {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        },
      }));
    };
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen text-white font-mono overflow-hidden"
    >
      {/* SVG Connections */}
      <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <path
          d={`M${positions.center.x},${positions.center.y} C${
            positions.center.x
          },${(positions.center.y + positions.group1.y) / 2} ${
            positions.group1.x
          },${(positions.center.y + positions.group1.y) / 2} ${
            positions.group1.x
          },${positions.group1.y}`}
          stroke="#6DE58B"
          fill="none"
          strokeWidth="5"
        />
        <path
          d={`M${positions.center.x},${positions.center.y} C${
            positions.center.x
          },${(positions.center.y + positions.group2.y) / 2} ${
            positions.group2.x
          },${(positions.center.y + positions.group2.y) / 2} ${
            positions.group2.x
          },${positions.group2.y}`}
          stroke="#6DE58B"
          fill="none"
          strokeWidth="5"
        />
        <path
          d={`M${positions.center.x},${positions.center.y} C${
            positions.center.x
          },${(positions.center.y + positions.group3.y) / 2} ${
            positions.group3.x
          },${(positions.center.y + positions.group3.y) / 2} ${
            positions.group3.x
          },${positions.group3.y}`}
          stroke="#6DE58B"
          fill="none"
          strokeWidth="5"
        />
      </svg>

      {/* Center Node */}
      <div
        ref={centerRef}
        className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <h1 className="text-3xl font-bold text-[#1A191D] z-20 bg-white p-2">
          Skills
        </h1>
      </div>

      {/* Draggable Group 1 */}
      <motion.div
        ref={group1Ref}
        drag
        dragConstraints={containerRef}
        dragMomentum={false}
        onDragEnd={handleDragEnd("group1")}
        initial={{ x: "-40%", y: "20%" }}
        className="absolute top-[70%] w-[30%] left-[10%] z-10 cursor-move p-2 flex flex-wrap justify-center rounded-3xl bg-[#23232882]"
      >
        <SkillComp text="Python" />
        <SkillComp text="Java" />
        <SkillComp text="C" />
        <SkillComp text="HTML" />
        <SkillComp text="CSS" />
        <SkillComp text="JavaScript" />
        <SkillComp text="React" />
        <SkillComp text="Tailwind CSS" />
        <SkillComp text="SQL" />
      </motion.div>

      {/* Draggable Group 2 */}
      <motion.div
        ref={group2Ref}
        drag
        dragConstraints={containerRef}
        dragMomentum={false}
        onDragEnd={handleDragEnd("group2")}
        initial={{ x: "40%", y: "-20%" }}
        className="absolute top-[70%] w-[30%] left-[10%] z-10 cursor-move p-2 flex flex-wrap justify-center rounded-3xl bg-[#23232882]"
      >
        <SkillComp text="TensorFlow" />
        <SkillComp text="FastAPI" />
        <SkillComp text="Django" />
        <SkillComp text="Flask" />
        <SkillComp text="GIT" />
        <SkillComp text="GitHub" />
        <SkillComp text="Docker" />
      </motion.div>

      {/* Draggable Group 3 */}
      <motion.div
        ref={group3Ref}
        drag
        dragConstraints={containerRef}
        dragMomentum={false}
        onDragEnd={handleDragEnd("group3")}
        initial={{ x: "-15%", y: "40%" }}
        className="absolute top-[70%] w-[30%] left-[10%] z-10 cursor-move p-2 flex flex-wrap justify-center rounded-3xl bg-[#23232882]"
      >
        <SkillComp text="Blender" />
        <SkillComp text="Photoshop" />
        <SkillComp text="Illustrator" />
        <SkillComp text="Figma" />
      </motion.div>
    </div>
  );
}
