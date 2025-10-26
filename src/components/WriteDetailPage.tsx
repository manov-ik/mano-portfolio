import { useParams, Link } from "react-router-dom";
import { useWriting } from "../hooks/useWritings";

const WriteDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { writing, loading, error, refetch } = useWriting({
    slug: id || undefined,
    autoFetch: !!id,
  });

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center text-white font-mono">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#BB77FF] mx-auto mb-4"></div>
          <p className="text-lg">Loading writing...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center text-white font-mono">
          <h1 className="text-2xl font-bold mb-4 text-red-400">Error Loading Writing</h1>
          <p className="text-base mb-6 text-gray-300">{error}</p>
          <div className="space-x-4">
            <button 
              onClick={refetch}
              className="bg-[#BB77FF] text-white px-6 py-3 rounded-lg hover:bg-[#BB77FF]/80 transition-colors duration-300"
            >
              Try Again
            </button>
            <Link 
              to="/writes" 
              className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              Back to Writings
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!writing) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center text-white font-mono">
          <h1 className="text-2xl font-bold mb-4">Writing Not Found</h1>
          <p className="text-base mb-6">The writing you're looking for doesn't exist.</p>
          <Link 
            to="/writes" 
            className="inline-block bg-[#BB77FF] text-white px-6 py-3 rounded-lg hover:bg-[#BB77FF]/80 transition-colors duration-300"
          >
            Back to Writings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Back Navigation */}
      <div className="w-[90%] sm:w-[80%] mx-auto mb-4">
        <Link 
          to="/writes" 
          className="inline-flex items-center text-sm text-[#BB77FF] hover:text-white transition-colors duration-300 font-mono"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Writings
        </Link>
      </div>

      {/* Article Header */}
      <div className="w-[90%] sm:w-[80%] mx-auto mb-2">
        <div className="bg-[#2323288d] border-1 border-[#484851] rounded-2xl p-8 backdrop-blur-xl">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            {writing.category && (
              <span className="text-sm text-[#BB77FF] bg-[#BB77FF20] px-3 py-1 rounded-full">
                {writing.category}
              </span>
            )}
            <span className="text-sm text-gray-400 font-mono">
              {writing.read_time}
            </span>
            <span className="text-sm text-gray-400 font-mono">
              {new Date(writing.created_at).toLocaleDateString()}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-mono">
            {writing.title}
          </h1>
          
          <p className="text-lg text-gray-300 mb-2 font-mono">
            {writing.excerpt}
          </p>
          
          {writing.author && (
            <div className="flex items-center text-gray-400 font-mono">
              <span className="text-sm">By {writing.author}</span>
            </div>
          )}
        </div>
      </div>

      {/* Article Content */}
      <div className="w-[90%] sm:w-[80%] mx-auto mb-12">
        <div className="bg-[#2323288d] border-1 border-[#484851] rounded-2xl p-8 backdrop-blur-xl">
        <div 
      className="text-white font-mono leading-7 text-base max-w-none"
      style={{ whiteSpace: 'pre-line' }}
      dangerouslySetInnerHTML={{ __html: writing.content }}
    />
        </div>
      </div>

      {/* Tags */}
      {writing.tags && writing.tags.length > 0 && (
        <div className="w-[90%] sm:w-[80%] mx-auto mb-8">
          <div className="flex flex-wrap gap-2">
            {writing.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-sm text-gray-400 bg-[#23232850] border border-[#484851] px-3 py-1 rounded-full hover:bg-[#BB77FF20] hover:text-[#BB77FF] transition-colors duration-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Navigation to other writings */}
      <div className="w-[90%] sm:w-[80%] mx-auto text-center">
        <Link 
          to="/writes" 
          className="inline-block bg-[#BB77FF] text-white px-8 py-3 rounded-lg hover:bg-[#BB77FF]/80 transition-colors duration-300 font-mono font-bold text-base"
        >
          Explore More Writings
        </Link>
      </div>
    </div>
  );
};

export default WriteDetailPage;
