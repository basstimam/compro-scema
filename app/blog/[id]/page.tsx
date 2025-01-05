import BlogData from "@/components/Blog/blogData";

interface BlogDetailsProps {
  params: {
    id: string;
  };
}

export default function BlogDetails({ params }: BlogDetailsProps) {
  const blog = BlogData.find((b) => b._id.toString() === params.id);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div className="relative w-full h-96 mb-8">
        <img
          src={blog.mainImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="prose max-w-none">
        <p className="text-gray-600">{blog.metadata}</p>
      </div>
    </div>
  );
}