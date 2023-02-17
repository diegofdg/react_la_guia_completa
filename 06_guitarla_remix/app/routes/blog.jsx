import { useLoaderData } from "@remix-run/react";
import Post from "../components/post";
import { getPosts } from "../models/posts.server";

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

function Blog() {
  const post = useLoaderData();

  return (
    <main className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {post.map(post => (
          <Post
            key={post.id}
            post={post.attributes}
          />
        ))}
      </div>
    </main>
  )
}

export default Blog;