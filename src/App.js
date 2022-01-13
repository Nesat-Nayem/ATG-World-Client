import logo from "./logo.svg";
import "./App.css";

import AuthProvider from './context/AuthProvider'
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllPost from "./Pages/AllPost/AllPost";
import Article from "./Pages/Article/Article";
import Event from "./Pages/Event/Event";
import Job from "./Pages/Job/Job";
import CreatePost from "./Pages/CreatePost/CreatePost";

function App() {
  return (
    <div className="App">
       <AuthProvider>
      <BrowserRouter>
        <Home></Home>
        <Routes>
          <Route path="/allPost" element={<AllPost />} />
          <Route path="/article" element={<Article />} />
          <Route path="/event" element={<Event />} />
          <Route path="/job" element={<Job />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
