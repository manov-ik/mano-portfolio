import { Link } from "react-router-dom";
import { useWritings } from "../hooks/useWritings";
import type { Writing } from "../services/writingsApi";

const WritingCard = ({ writing }: { writing: Writing }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="rounded-2xl p-6 font-mono text-white bg-[#2323288d] border-1 border-[#484851] hover:bg-[#232328] transition-all duration-300 hover:backdrop-blur-xl h-full flex flex-col group">
        <div className="flex justify-between items-start mb-2">
          {writing.category && (
            <span className="text-xs text-[#BB77FF] bg-[#BB77FF20] px-2 py-1 rounded-full">
              {writing.category}
            </span>
          )}
          <span className="text-xs text-gray-400">
            {writing.read_time || "3 min read"}
            {}
          </span>
        </div>
        
        <Link to={`/writes/${writing.slug}`} className="flex-1 flex flex-col">
        <h2 className="text-3xl font-bold mb-1 z-10 relative w-fit">
          {writing.title}
          <span className="absolute -z-10 bottom-0 left-0 h-2 w-0 bg-[#BB77FF] transition-all duration-300 group-hover:w-full"></span>
        </h2>
          <p className="text-gray-300 text-lg flex-1 mb-2 line-clamp-3">
            {writing.excerpt}
          </p>
          <div className="text-xs text-gray-400 mt-auto">
            Published on {new Date(writing.created_at).toLocaleDateString()}
          </div>
        </Link>
      </div>
    </div>
  );
};

const Writes = () => {
  const { writings, loading, error, refetch } = useWritings({
    limit: 12, // Show more writings per page
    sortBy: 'order', // Sort by order column from database
    sortOrder: 'asc',
    published: true, // Only show published writings
  });

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center text-white font-mono">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#BB77FF] mx-auto mb-4"></div>
          <p className="text-xl">Loading writings...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center text-white font-mono">
          <h1 className="text-3xl font-bold mb-4 text-red-400">Error Loading Writings</h1>
          <p className="text-lg mb-6 text-gray-300">{error}</p>
          <button 
            onClick={refetch}
            className="bg-[#BB77FF] text-white px-6 py-3 rounded-lg hover:bg-[#BB77FF]/80 transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="flex justify-center mb-8">
        <p className="font-mono text-3xl font-bold text-[#1A191D] z-20 bg-white p-2 transition-all duration-300 hover:bg-[#BB77FF] relative group">
          My Writings
          <span className="absolute bottom-0 -z-10 left-0 h-1 w-0 bg-[#BB77FF] transition-all duration-300 group-hover:w-full"></span>
        </p>
      </div>
      
      <div className="w-[90%] sm:w-[80%] mx-auto">
        <p className="text-center text-white font-mono text-lg mb-8">
          Thoughts, tutorials, and insights on technology, programming, and design
        </p>
        
        {writings.length === 0 ? (
          <div className="text-center text-white font-mono">
            <p className="text-xl text-gray-400">No writings found.</p>
            <p className="text-sm text-gray-500 mt-2">Check back later for new content!</p>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center">
            {writings.map((writing) => (
              <WritingCard key={writing.id} writing={writing} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Writes;
