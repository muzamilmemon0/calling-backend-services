import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PostDetails() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.log("Error fetching post data: ", error));
  }, [postId]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {post ? (
        <>
          <h2 className="text-2xl font-semibold mb-2 cursor-pointer">
            {post.id}: {post.title}
          </h2>
          <p className="text-gray-700">{post.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PostDetails;
