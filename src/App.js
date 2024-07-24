import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screen/home/Home";
import Header from "./components/header/Header";
import Course from "./screen/course/Course";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/c/:id" element={<Course />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
