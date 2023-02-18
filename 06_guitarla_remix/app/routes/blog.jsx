import { useLoaderData } from "@remix-run/react";
import ListadoPosts from '../components/listado-posts';
import { getPosts } from "../models/posts.server";
import styles from '~/styles/blog.css';

export function meta() {
  return {
    title: 'GuitarLA - Nuestro Blog',
    description: 'GuitarLA, Blog de música y venta de guitarras'
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

function Blog() {
  const post = useLoaderData();

  return (
    <main className="contenedor">
      <ListadoPosts
        post={post}
      />      
    </main>
  )
}

export default Blog;