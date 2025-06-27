interface SkillCompProps {
  text: string | React.ReactNode;
}

export default function SkillComp({ text }: SkillCompProps) {
  return (
    <div className="flex hover:bg-[#BB77FF] transition-all duration-300 justify-center p-2 m-2 bg-[#232328] text-xs md:text-lg xl:text-xl">
      {text}
    </div>
  );
}
