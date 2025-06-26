import GithubSVG from "../assets/GitHub.svg";
import LinkSVG from "../assets/Link.svg";

// Reusable Button Component
const IconButton = ({ href, iconSrc, label, altText }: any) => (
  <div className="transition-all duration-300 m-auto max-sm:mt-2 rounded-2xl bg-[#2323288d] p-1  border-1 border-[#484851] hover:bg-[#383840] backdrop-blur-xl">
    <a
      target="_blank"
      href={href}
      aria-label={label}
      className="flex items-center"
    >
      <img src={iconSrc} alt={altText} className="w-6 md:w-10" />
      <p className="mx-2 text-white md:hidden">{label}</p>
    </a>
  </div>
);

function ProjectComp({
  title,
  description,
  techStack,
  githubLink,
  projectLink,
  imageSrc,
}: any) {
  return (
    <div className="group m-2 md:m-4 xl:m-6 rounded-2xl flex p-2 h-fit font-mono text-white bg-[#2323288d] border-1 border-[#484851] hover:bg-[#232328] transition-all duration-300 hover:backdrop-blur-xl xl:min-h-62">
      <div className="w-32 md:w-48 lg:w-72 xl:w-100">
        <img
          src={imageSrc}
          alt={`${title} Project Thumbnail`}
          className="w-full object-left h-full object-cover rounded-2xl "
        />
      </div>
      <div className="flex flex-col justify-between md:flex-row md:w-full ml-2 flex-1">
        <div className="flex flex-col justify-between  w-full h-full">
          <div className="text-xl w-fit md:text-2xl lg:text-4xl font-bold relative">
            <p className="w-fit">{title}</p>
            <span className="absolute h-2 bottom-1 -z-1 w-0 bg-[#BB77FF] transition-all duration-300 group-hover:w-full"></span>
          </div>
          <div className="text-sm sm:text-lg md:text-xl lg:text-2xl">
            {description}
          </div>
          <div className="text-xs sm:text-sm md:text-lg lg:text-2xl">
            {techStack}
          </div>
        </div>
        <div className="h-full flex justify-between gap-2 md:flex-col md:h-fit w-fit">
          {githubLink && (
            <IconButton
              href={githubLink}
              iconSrc={GithubSVG}
              label="GitHub"
              altText="GitHub"
            />
          )}
          {projectLink && (
            <IconButton
              href={projectLink}
              iconSrc={LinkSVG}
              label="Link"
              altText="Project Link"
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default ProjectComp;
