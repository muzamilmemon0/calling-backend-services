import PostItem from "./PostItem";
import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const limit = 5;
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 5)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
