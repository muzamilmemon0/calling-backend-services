import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";

import PostDetails from "./components/PostDetails";
import PostForm from "./components/PostForm";
import Navbar from "./components/Navbar";
import PostComments from "./components/PostComments";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/add" element={<PostForm />} />
        <Route exact path="/post/:postId" element={<PostDetails />} />
        <Route
          exact
          path="/posts/:postId/comments"
          element={<PostComments />}
        />
      </Routes>
    </Router>
  );
}

export default App;
