import { Blog } from "@/types/blog";


const images = "https://picsum.photos/200/300"

import axios from 'axios';

const fetchBlogData = async (): Promise<Blog[]> => {
  try {
    const response = await axios.get('https://dummyjson.com/posts?limit=10&skip=10');
    const posts = response.data.posts;
    
    return posts.map((post: any, index: number) => ({
      _id: post.userId,
      mainImage: `${images}?random=${index}`,
      title: post.title,
      metadata: `Reactions: ${post.reactions}`,
    }));
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return [];
  }
};


const BlogData: Blog[] = [
  {
    _id: 1,
    mainImage: `${images}?random=1`,
    title: "Artikel Pertama",
    metadata: "Penulis: John Doe",
  },
  {
    _id: 2,
    mainImage: `${images}?random=2`,
    title: "Tips Menulis Blog yang Efektif",
    metadata: "Kategori: Penulisan",
  },
  {
    _id: 3,
    mainImage: `${images}?random=3`,
    title: "Perjalanan ke Bali",
    metadata: "Tanggal: 15 Mei 2023",
  },
  {
    _id: 4,
    mainImage: `${images}?random=4`,
    title: "Resep Nasi Goreng Spesial",
    metadata: "Kategori: Kuliner",
  },
  {
    _id: 5,
    mainImage: `${images}?random=5`,
    title: "Teknologi Terbaru 2023",
    metadata: "Penulis: Jane Smith",
  }

];

fetchBlogData().then((data) => {
  BlogData.push(...data);
}).catch((error) => {
  console.error('Error mengambil data blog:', error);
});

export default BlogData;
