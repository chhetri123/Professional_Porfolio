export interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  categories: string[];
  readTime?: string;
  doi?: string;
}

export type Heading = {
  level: number;
  text: string;
  slug: string;
};
