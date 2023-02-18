import Post from '~/components/post';

function ListadoPosts({ post }) {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {post.map(post => (
          <Post
            key={post.id}
            post={post.attributes}
          />
        ))}
      </div>
    </>
  )
}

export default ListadoPosts;