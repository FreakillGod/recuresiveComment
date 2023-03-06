import PostList from "./components/PostList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostList />} />
      </Routes>
    </div>
  );
}

export default App;
