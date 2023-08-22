import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function PostComments() {
  const [comments, setComments] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.log("Error fetching post comments: ", error));
  }, [postId]);

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">
          {" "}
          Post {postId}: Comments
        </h2>
        <div className="grid gap-4">
          {comments.map((comment, index) => (
            <div className="bg-white rounded-lg shadow-md p-4" key={comment.id}>
              <h3 className="text-lg font-semibold mb-2">
                Comment {index + 1}: &nbsp;
                {comment.name}
              </h3>
              <p className="text-gray-700 mb-2">{comment.body}</p>
              <p className="text-gray-500">{comment.email}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PostComments;
