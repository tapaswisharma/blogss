import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MessageCircle, ThumbsUp, Share2, Bookmark, ChevronLeft } from 'lucide-react';

// In a real app, this would be fetched from an API
const POSTS = {
  '1': {
    title: "The Future of Web Development: AI and No-Code Solutions",
    author: {
      name: "Sarah Chen",
      role: "Senior Developer Advocate",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070&h=800",
    content: `
      Artificial Intelligence is revolutionizing the way we approach web development. From automated testing to intelligent code completion, AI tools are becoming an integral part of every developer's toolkit.

      The rise of no-code platforms has democratized web development, making it accessible to a broader audience while simultaneously creating new opportunities for professional developers to focus on more complex challenges.

      However, this shift raises important questions about the future of traditional coding skills and the evolving role of web developers in an increasingly automated landscape.
    `,
    tags: ["Web Development", "AI", "Technology", "Programming"],
    stats: {
      likes: 234,
      comments: 45,
      bookmarks: 89
    }
  }
};

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? POSTS[id as keyof typeof POSTS] : null;

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p>Post not found</p>
        <Link to="/" className="text-blue-600 hover:text-blue-700">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-900">{post.author.name}</h3>
              <p className="text-sm text-gray-500">{post.author.role}</p>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 text-sm space-x-4">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.image}
            alt="Blog post cover"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <article className="prose lg:prose-lg max-w-none mb-8">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Tags */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Engagement Bar */}
        <div className="border-t border-b py-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition">
              <ThumbsUp className="w-5 h-5" />
              <span>{post.stats.likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition">
              <MessageCircle className="w-5 h-5" />
              <span>{post.stats.comments}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition">
              <Bookmark className="w-5 h-5" />
              <span>{post.stats.bookmarks}</span>
            </button>
          </div>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;