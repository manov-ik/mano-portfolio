import { Link } from "react-router-dom";
import { DESIGN_WORKS } from "../data/projects";
import { useProjects } from "../hooks/useProjects";
import type { Project } from "../services/projectsApi";

// ── Project card ───────────────────────────────────────────────────────────────
const ProjectCard = ({ project }: { project: Project }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="rounded-2xl font-mono text-white bg-[#2323288d] border-1 border-[#484851] hover:bg-[#232328] transition-all duration-300 hover:backdrop-blur-xl h-full flex flex-col group overflow-hidden">
      {/* Thumbnail */}
      <div className="w-full h-44 overflow-hidden bg-[#1a1a1f]">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">
            No image
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Meta row */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-[#BB77FF] bg-[#BB77FF20] px-2 py-1 rounded-full">
            {project.year}
          </span>
          <span className="text-xs text-gray-400">{project.tech_stack[0]}</span>
        </div>

        <Link to={`/projects/${project.slug}`} className="flex-1 flex flex-col">
          {/* Title with underline animation */}
          <h2 className="text-2xl font-bold mb-2 z-10 relative w-fit">
            {project.title}
            <span className="absolute -z-10 bottom-0 left-0 h-2 w-0 bg-[#BB77FF] transition-all duration-300 group-hover:w-full" />
          </h2>

          <p className="text-gray-300 text-sm flex-1 mb-4 line-clamp-3 leading-relaxed">
            {project.short_description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tech_stack.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-[10px] text-gray-400 border border-[#484851] px-2 py-0.5 rounded-full"
              >
                {t}
              </span>
            ))}
            {project.tech_stack.length > 4 && (
              <span className="text-[10px] text-gray-500 px-2 py-0.5">
                +{project.tech_stack.length - 4} more
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  </div>
);

// ── Design work card ───────────────────────────────────────────────────────────
const WorkCard = ({ imgSrc, link, label }: { imgSrc: string; link: string; label: string }) => (
  <div className="w-1/2 md:w-1/3 xl:w-1/4 p-2">
    <div className="rounded-2xl font-mono text-white bg-[#2323288d] border-1 border-[#484851] hover:bg-[#232328] transition-all duration-300 hover:backdrop-blur-xl h-32 md:h-48 xl:min-h-54 overflow-hidden group">
      <a href={link || undefined} target="_blank" rel="noreferrer" className="block w-full h-full">
        <img
          src={imgSrc}
          alt={label}
          loading="lazy"
          className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
        />
      </a>
    </div>
  </div>
);

// ── Page ──────────────────────────────────────────────────────────────────────
function Projects() {
  const { projects, loading, error, refetch } = useProjects();

  return (
    <>
      {/* ── Software Projects ────────────────────────────────────── */}
      <div className="min-h-screen pt-24">
        <div className="flex justify-center mb-4">
          <p className="font-mono text-3xl font-bold text-[#1A191D] z-20 bg-white p-2 transition-all duration-300 hover:bg-[#BB77FF]">
            Projects
          </p>
        </div>

        <p className="text-center text-white font-mono text-base mb-8 opacity-60 w-[80%] mx-auto">
          Things I've built — from AI systems to web apps and beyond.
        </p>

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center text-white font-mono">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#BB77FF] mx-auto mb-4" />
              <p className="text-lg">Loading projects...</p>
            </div>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center text-white font-mono">
              <h2 className="text-2xl font-bold mb-3 text-red-400">Error Loading Projects</h2>
              <p className="text-gray-300 mb-6">{error}</p>
              <button
                onClick={refetch}
                className="bg-[#BB77FF] text-white px-6 py-3 rounded-lg hover:bg-[#BB77FF]/80 transition-colors duration-300"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Projects grid */}
        {!loading && !error && (
          <div className="w-[90%] sm:w-[85%] mx-auto flex flex-wrap justify-center">
            {projects.length === 0 ? (
              <p className="text-gray-400 font-mono text-lg py-16">No projects yet. Check back soon!</p>
            ) : (
              projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))
            )}
          </div>
        )}
      </div>

      {/* ── Design Works ─────────────────────────────────────────── */}
      <div className="my-4 mt-24">
        <p className="font-mono my-2 xl:mt-2 mt-4 w-fit m-auto text-3xl font-bold text-[#1A191D] z-20 bg-white p-2 transition-all duration-300 hover:bg-[#BB77FF] mb-4">
          Design Works
        </p>
        <p className="text-center text-white font-mono text-base mb-8 opacity-60 w-[80%] mx-auto">
          A collection of design projects I've worked on, including UI/UX design, branding, and more.
        </p>
        <div className="flex flex-wrap px-2 justify-center mt-4">
          {DESIGN_WORKS.map((work) => (
            <WorkCard key={work.label} imgSrc={work.imgSrc} link={work.link} label={work.label}  />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
