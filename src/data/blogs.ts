import { Blog } from '../types/blog';

// Import markdown files as strings
const blogModules = import.meta.glob('../blogs/*.md', { as: 'raw', eager: true });

// Convert file paths to blog data
const loadBlogsFromMarkdown = (): Blog[] => {
  const blogs: Blog[] = [];
  
  Object.entries(blogModules).forEach(([path, content]) => {
    try {
      const filename = path.split('/').pop() || '';
      const slug = filename.replace('.md', '');
      
      // Extract frontmatter
      const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
      const match = content.match(frontmatterRegex);
      
      if (!match) {
        console.warn(`Invalid markdown format in ${filename}`);
        return;
      }
      
      const [, frontmatterStr, markdownContent] = match;
      
      // Parse frontmatter
      const metadata: any = {};
      frontmatterStr.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
          const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
          
          if (key.trim() === 'tags') {
            // Parse array format [item1, item2, item3]
            const arrayMatch = value.match(/\[(.*)\]/);
            if (arrayMatch) {
              metadata[key.trim()] = arrayMatch[1]
                .split(',')
                .map(item => item.trim().replace(/^["']|["']$/g, ''));
            }
          } else if (key.trim() === 'readTime') {
            metadata[key.trim()] = parseInt(value);
          } else {
            metadata[key.trim()] = value;
          }
        }
      });
      
      const blog: Blog = {
        id: slug,
        title: metadata.title || 'Untitled',
        excerpt: metadata.excerpt || '',
        content: markdownContent.trim(),
        author: metadata.author || 'Dinesh Kachhot',
        publishedAt: metadata.publishedAt || new Date().toISOString().split('T')[0],
        updatedAt: metadata.publishedAt || new Date().toISOString().split('T')[0],
        tags: metadata.tags || [],
        readTime: metadata.readTime || Math.ceil(markdownContent.split(' ').length / 200),
        likes: 0, // Default values for dynamic data
        shares: 0,
        imageUrl: metadata.imageUrl || 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
        isPublished: true
      };
      
      blogs.push(blog);
    } catch (error) {
      console.error(`Error parsing blog ${path}:`, error);
    }
  });
  
  // Sort by published date (newest first)
  return blogs.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

export const markdownBlogs = loadBlogsFromMarkdown();

// Simulate API calls
export const getBlogById = (id: string): Blog | undefined => {
  return markdownBlogs.find(blog => blog.id === id);
};

export const getAllBlogs = (): Blog[] => {
  return markdownBlogs.filter(blog => blog.isPublished);
};

export const getBlogsByTag = (tag: string): Blog[] => {
  return markdownBlogs.filter(blog => 
    blog.isPublished && blog.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
};