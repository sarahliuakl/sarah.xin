import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug } from '../utils/blogPosts'; // Adjust path as needed

interface PostData {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
}

const ThoughtDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setError("Invalid post identifier.");
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const fetchedPost = await getPostBySlug(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
          setError(null);
        } else {
          setError("Thought not found.");
        }
      } catch (err) {
        console.error(`Error fetching post ${slug}:`, err);
        setError("Failed to load the thought.");
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Link to="/thoughts" className="text-pink-500 hover:text-pink-700">&larr; Back to Thoughts</Link>
      </div>

      {loading && <p className="text-center text-gray-500">Loading thought...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {post && !loading && !error && (
        <article className="prose lg:prose-xl max-w-none bg-white p-6 md:p-8 rounded-lg shadow-md">
          {/* Title is usually handled by the first H1 in markdown, but keep for structure */}
          {/* <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{post.title}</h1> */}
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>
      )}
    </div>
  );
};

export default ThoughtDetailPage;
