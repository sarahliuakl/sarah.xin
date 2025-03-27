import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../utils/blogPosts'; // Adjust path as needed

interface PostSummary {
  slug: string;
  title: string;
  excerpt: string;
}

const ThoughtsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await fetchPosts();
        // We only need summary data for the list page
        const summaries = fetchedPosts.map(p => ({ slug: p.slug, title: p.title, excerpt: p.excerpt }));
        setPosts(summaries);
        setError(null);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load thoughts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Thoughts</h1>

      {loading && <p className="text-center text-gray-500">Loading thoughts...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        posts.length > 0 ? (
          <div className="space-y-8 max-w-3xl mx-auto">
            {posts.map((post) => (
              <article key={post.slug} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  <Link
                    to={`/thoughts/${post.slug}`}
                    className="hover:text-pink-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <Link
                  to={`/thoughts/${post.slug}`}
                  className="text-pink-500 hover:text-pink-700 font-medium inline-flex items-center"
                >
                  Read More &rarr;
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No thoughts published yet.</p>
        )
      )}
    </div>
  );
};

export default ThoughtsPage;
