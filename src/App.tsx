import { useState } from "react";
import './App.css'
import MainRouter from "./components/MainRouter";
import Navbar from "./components/Navbar";


const App = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  return (
    <>
			{/* Эти ссылки вы должны вынести в Navbar */}

      <Navbar isAuth={isAuth} authorize={setIsAuth}/>

      <MainRouter isAuth={isAuth}/>
    </>
  )
};

export default App;
