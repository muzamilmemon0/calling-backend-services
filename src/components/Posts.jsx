import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostItem from "./PostItem";

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
    <div>
      <select
        value={postsLimit}
        onChange={(e) => setPostsLimit(e.target.value)}
        className="ml-4"
      >
        <option value={5}>05 Posts</option>
        <option value={10}>10 Posts</option>
        <option value={15}>15 Posts</option>
      </select>
      <div>
        {posts.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id}>
            <PostItem post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Posts;
