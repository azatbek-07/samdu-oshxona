import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Team } from "./pages/Team"
import { Food } from "./pages/Food"
import { Header } from "./components/Header"

function App() {

  return (
    <>

      <BrowserRouter>
      <Header/>

        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/food" element = {<Food />} />
          <Route path="/team" element = {<Team />} />
        </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App
