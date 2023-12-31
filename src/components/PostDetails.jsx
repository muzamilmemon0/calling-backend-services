import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
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
    <div>
      <Navbar />
      <div className="bg-white rounded-lg shadow-md p-6 space-y-2">
        {post ? (
          <>
            <h2 className="text-2xl font-semibold mb-2 cursor-pointer">
              {post.id}: {post.title}
            </h2>
            <p className="text-gray-700">{post.body}</p>
            <Link to={`/posts/${postId}/comments`}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                View Comments
              </button>
            </Link>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default PostDetails;
