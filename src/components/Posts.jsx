import PostForm from "./PostForm";
import PostItem from "./PostItem";
import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [postsLimit, setPostsLimit] = useState(5);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?limit=${postsLimit}`)
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, postsLimit)))
      .catch((error) => console.error(error));
  }, [postsLimit]);

  return (
    <>
      <div>
        <PostForm />
        <select
          value={postsLimit}
          onChange={(e) => setPostsLimit(e.target.value)}
        >
          <option value={5}>05 Posts</option>
          <option value={10}>10 Posts</option>
          <option value={15}>15 Posts</option>
        </select>
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Posts;
