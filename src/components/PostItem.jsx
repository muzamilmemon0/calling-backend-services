function PostItem({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-2 cursor-pointer">
        {post.id}: {post.title}
      </h2>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}

export default PostItem;
