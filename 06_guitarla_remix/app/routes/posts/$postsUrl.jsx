import { getPost } from "~/models/posts.server";

export async function loader({ params }) {
  const { postsUrl } = params;
  const post = await getPost(postsUrl);

  if(post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Entrada no encontrada'
    })
  }
  
  return post;
}

function Posts() {
  return (
    <div>
      $postUrl
    </div>
  )
}

export default Posts;