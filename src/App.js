import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPost from "./Pages/AllPost/AllPost";
import Article from "./Pages/Article/Article";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home></Home>
        <Routes>
          <Route path="/allPost" element={<AllPost />} />
          <Route path="/article" element={<Article />} />

          {/* <AllPost></AllPost> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
