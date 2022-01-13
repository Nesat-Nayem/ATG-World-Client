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
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Education from "./Pages/Education/Education";

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
          <Route path="/education" element={<Education />} />

          <Route path="/createPost" element={<PrivateRoute> <CreatePost /> </PrivateRoute> } />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
