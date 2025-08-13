import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
      </Routes>
    </>
  )
}

export default App
