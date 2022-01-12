import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPost from "./Pages/AllPost/AllPost";
import Article from "./Pages/Article/Article";
import Event from "./Pages/Event/Event";
import Job from "./Pages/Job/Job";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home></Home>
        <Routes>
          <Route path="/allPost" element={<AllPost />} />
          <Route path="/article" element={<Article />} />
          <Route path="/event" element={<Event />} />
          <Route path="/job" element={<Job />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
