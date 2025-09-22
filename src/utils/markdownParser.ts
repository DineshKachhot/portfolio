export interface BlogMetadata {
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  tags: string[];
  readTime: number;
  imageUrl: string;
}

export interface ParsedBlog {
  metadata: BlogMetadata;
  content: string;
  slug: string;
}

export function parseMarkdownFile(filename: string, content: string): ParsedBlog {
  const slug = filename.replace('.md', '');
  
  // Extract frontmatter
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    throw new Error(`Invalid markdown format in ${filename}`);
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
  
  return {
    metadata: metadata as BlogMetadata,
    content: markdownContent.trim(),
    slug
  };
}

export function formatMarkdownContent(content: string): string {
  return content
    // Headers
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-gray-900 mb-6 mt-8">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-6">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-gray-900 mb-3 mt-4">$1</h3>')
    
    // Bold and italic
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4 border"><code class="text-sm language-$1">$2</code></pre>')
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4 border"><code class="text-sm">$1</code></pre>')
    
    // Inline code
    .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">$1</code>')
    
    // Lists
    .replace(/^\- (.*$)/gim, '<li class="ml-4 mb-1">• $1</li>')
    .replace(/^\* (.*$)/gim, '<li class="ml-4 mb-1">• $1</li>')
    .replace(/^(\d+)\. (.*$)/gim, '<li class="ml-4 mb-1">$1. $2</li>')
    
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">$1</a>')
    
    // Paragraphs
    .replace(/\n\n/g, '</p><p class="text-gray-700 leading-relaxed mb-4">')
    .replace(/\n/g, '<br>');
}