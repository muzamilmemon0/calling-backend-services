import Berries from "./components/Berries";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Berries />}></Route> */}

          <Route exact path="/" element={<Posts />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
