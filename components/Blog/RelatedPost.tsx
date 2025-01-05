import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

const RelatedPost = async () => {
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Related Posts
        </h4>

        <div className="space-y-5">
          {BlogData.slice(0, 3).map((post, key) => (
            <div
              className="group flex items-center gap-4 border-b border-stroke pb-5 last:border-0 last:pb-0"
              key={key}
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-md">
                {post.mainImage ? (
                  <Image 
                    fill 
                    src={post.mainImage} 
                    alt={post.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-110" 
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800">
                    No image
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h5 className="line-clamp-2 text-sm font-medium text-black transition-all duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                  <Link href={`/blog/blog-details/${post._id}`}>
                    {post.title}
                  </Link>
                </h5>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {post.metadata}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
