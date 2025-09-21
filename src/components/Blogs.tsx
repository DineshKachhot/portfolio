import React, { useState } from 'react';
import { Calendar, Clock, Heart, Share2, Tag, Search, Filter } from 'lucide-react';
import { getAllBlogs, getBlogsByTag } from '../data/blogs';
import { Blog } from '../types/blog';

interface BlogsProps {
  onBlogSelect: (blogId: string) => void;
  onBlogAdmin: () => void;
}

const Blogs: React.FC<BlogsProps> = ({ onBlogSelect, onBlogAdmin }) => {
  const [blogs] = useState<Blog[]>(getAllBlogs());
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(blogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Get all unique tags
  const allTags = Array.from(new Set(blogs.flatMap(blog => blog.tags)));

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterBlogs(term, selectedTag);
  };

  const handleTagFilter = (tag: string) => {
    setSelectedTag(tag);
    filterBlogs(searchTerm, tag);
  };

  const filterBlogs = (search: string, tag: string) => {
    let filtered = blogs;

    if (search) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        blog.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
      );
    }

    if (tag) {
      filtered = getBlogsByTag(tag);
    }

    setFilteredBlogs(filtered);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTag('');
    setFilteredBlogs(blogs);
  };

  const handleLike = (blogId: string) => {
    // In a real app, this would make an API call
    console.log(`Liked blog ${blogId}`);
  };

  const handleShare = (blog: Blog) => {
    const shareData = {
      title: blog.title,
      text: blog.excerpt,
      url: `${window.location.origin}/blog/${blog.id}`
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      navigator.share(shareData).catch((error) => {
        // If sharing fails (permission denied, user cancellation, etc.), fall back to clipboard
        console.log('Share failed, falling back to clipboard:', error);
        fallbackToClipboard(blog);
      });
    } else {
      // Fallback for browsers that don't support Web Share API or can't share the data
      fallbackToClipboard(blog);
    }
  };

  const fallbackToClipboard = (blog: Blog) => {
    const blogUrl = `${window.location.origin}/blog/${blog.id}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(blogUrl).then(() => {
        alert('Blog link copied to clipboard!');
      }).catch(() => {
        // Final fallback for older browsers
        fallbackCopyToClipboard(blogUrl);
      });
    } else {
      // Final fallback for older browsers
      fallbackCopyToClipboard(blogUrl);
    }
  };

  const fallbackCopyToClipboard = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      alert('Blog link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      // Show the URL to the user as a last resort
      prompt('Copy this link:', text);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  const handleShare_old = (blog: Blog) => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: `${window.location.origin}/blog/${blog.id}`
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${window.location.origin}/blog/${blog.id}`);
      alert('Blog link copied to clipboard!');
    }
  };


  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Blogs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on mobile development, architecture, and technology trends
          </p>
          
          {/* Admin Access Button */}
          <div className="mt-8">
            <button
              onClick={onBlogAdmin}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 mx-auto"
            >
              <span>✏️</span>
              <span>Manage Blogs</span>
            </button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          {/* Tag Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={clearFilters}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !selectedTag
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              onClick={() => onBlogSelect(blog.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {blog.readTime} min read
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.author}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                  {blog.tags.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{blog.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(blog.id);
                    }}
                    className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors duration-200"
                  >
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{blog.likes}</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(blog);
                    }}
                    className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors duration-200"
                  >
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">{blog.shares}</span>
                  </button>

                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{blog.readTime}m</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No blogs found</h3>
            <p className="text-gray-500">
              Try adjusting your search terms or clearing the filters
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;