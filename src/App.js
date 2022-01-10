import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <Routes>
        <Route path="home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
