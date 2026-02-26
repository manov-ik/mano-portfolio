import { useParams, Link } from "react-router-dom";
import { useProject } from "../hooks/useProjects";
import GithubSVG from "../assets/GitHub.svg";
import LinkSVG from "../assets/Link.svg";

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { project, loading, error, refetch } = useProject({ slug, autoFetch: !!slug });

  // ── Loading ────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center text-white font-mono">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#BB77FF] mx-auto mb-4" />
          <p className="text-lg">Loading project...</p>
        </div>
      </div>
    );
  }

  // ── Error ──────────────────────────────────────────────────────────────────
  if (error) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center text-white font-mono">
          <h1 className="text-2xl font-bold mb-4 text-red-400">Error Loading Project</h1>
          <p className="text-base mb-6 text-gray-300">{error}</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={refetch}
              className="bg-[#BB77FF] text-white px-6 py-3 rounded-lg hover:bg-[#BB77FF]/80 transition-colors duration-300"
            >
              Try Again
            </button>
            <Link
              to="/projects"
              className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Not found ──────────────────────────────────────────────────────────────
  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center text-white font-mono">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-base mb-6 text-gray-300">The project you're looking for doesn't exist.</p>
          <Link
            to="/projects"
            className="inline-block bg-[#BB77FF] text-white px-6 py-3 rounded-lg hover:bg-[#BB77FF]/80 transition-colors duration-300"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* ── Back nav ────────────────────────────────────────────── */}
      <div className="w-[90%] sm:w-[80%] mx-auto mb-6">
        <Link
          to="/projects"
          className="inline-flex items-center text-sm text-[#BB77FF] hover:text-white transition-colors duration-300 font-mono"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>
      </div>

      {/* ── Hero image ────────────────────────────────────────────── */}
      {project.image_url && (
        <div className="w-[90%] sm:w-[80%] mx-auto mb-4">
          <div className="rounded-2xl overflow-hidden border border-[#484851] h-64 sm:h-80 lg:h-96">
            <img
              src={project.image_url}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* ── Header card ───────────────────────────────────────────── */}
      <div className="w-[90%] sm:w-[80%] mx-auto mb-4">
        <div className="bg-[#2323288d] border border-[#484851] rounded-2xl p-8 backdrop-blur-xl">
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm text-[#BB77FF] bg-[#BB77FF20] px-3 py-1 rounded-full font-mono">
              {project.year}
            </span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-400 bg-[#23232850] border border-[#484851] px-2 py-1 rounded-full font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 font-mono">
            {project.title}
          </h1>

          <p className="text-lg text-gray-300 font-mono leading-relaxed mb-5">
            {project.short_description}
          </p>

          {/* Action buttons */}
          <div className="flex gap-3 flex-wrap">
            {project.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#232328] border border-[#484851] text-white px-4 py-2 rounded-lg hover:bg-[#383840] transition-colors duration-300 font-mono text-sm"
              >
                <img src={GithubSVG} alt="GitHub" className="w-5 h-5" />
                GitHub
              </a>
            )}
            {project.project_link && (
              <a
                href={project.project_link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#BB77FF] text-white px-4 py-2 rounded-lg hover:bg-[#BB77FF]/80 transition-colors duration-300 font-mono text-sm"
              >
                <img src={LinkSVG} alt="Live" className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Long description ──────────────────────────────────────── */}
      <div className="w-[90%] sm:w-[80%] mx-auto mb-4">
        <div className="bg-[#2323288d] border border-[#484851] rounded-2xl p-8 backdrop-blur-xl">
          <h2 className="text-sm font-bold text-[#BB77FF] font-mono mb-4 uppercase tracking-widest">
            About the Project
          </h2>
          <p className="text-white font-mono leading-8 text-base whitespace-pre-line">
            {project.long_description}
          </p>
        </div>
      </div>

      {/* ── Tech stack ───────────────────────────────────────────── */}
      <div className="w-[90%] sm:w-[80%] mx-auto mb-8">
        <div className="bg-[#2323288d] border border-[#484851] rounded-2xl p-8 backdrop-blur-xl">
          <h2 className="text-sm font-bold text-[#BB77FF] font-mono mb-4 uppercase tracking-widest">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech_stack.map((tech) => (
              <span
                key={tech}
                className="text-sm text-gray-200 bg-[#232328] border border-[#484851] px-3 py-1.5 rounded-full font-mono hover:border-[#BB77FF] hover:text-white transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom nav ───────────────────────────────────────────── */}
      <div className="w-[90%] sm:w-[80%] mx-auto text-center">
        <Link
          to="/projects"
          className="inline-block bg-[#BB77FF] text-white px-8 py-3 rounded-lg hover:bg-[#BB77FF]/80 transition-colors duration-300 font-mono font-bold text-base"
        >
          Explore More Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
