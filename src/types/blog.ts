export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  readTime: number;
  likes: number;
  shares: number;
  imageUrl: string;
  isPublished: boolean;
}

export interface BlogFormData {
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  imageUrl: string;
  isPublished: boolean;
}