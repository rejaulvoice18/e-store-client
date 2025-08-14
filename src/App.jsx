import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);

  // console.log(countryList)

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries")
  },[])

  const getCountry = async(url)=>{
    const response = await axios.get(url).then((res)=>{
      setCountryList(res.data.data)
      console.log(res.data.data)
    })
  }

  const values = {
    countryList
  }

  return (
    <>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </>
  )
}

export default App;

export {MyContext}
