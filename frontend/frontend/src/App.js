import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Todo from "./components/todo/Todo";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route excat path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Login/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
