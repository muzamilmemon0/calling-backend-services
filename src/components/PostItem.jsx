function PostItem({ post }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold ">
        {post.id}: {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostItem;
