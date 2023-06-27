import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import ShowBooks from "./components/ShowBooks.js";
import CreateBook from "./components/CreateBook.js";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/books`);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/showbook"} element={<ShowBooks />}></Route>
        <Route path={"/createbook"} element={<CreateBook />}></Route>
      </Routes>
    </>
  );
}

export default App;
