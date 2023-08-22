import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";

import PostDetails from "./components/PostDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Posts />} />
        <Route exact path="/post/:postId" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
