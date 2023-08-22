import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";

import PostDetails from "./components/PostDetails";
import PostForm from "./components/PostForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar />}></Route>
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/add" element={<PostForm />}></Route>
        <Route exact path="/post/:postId" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
