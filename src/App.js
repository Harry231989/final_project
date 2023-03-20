import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Register, Error, Dashboard,  } from "./pages";




function App() {
  return  (
   <BrowserRouter>
      <Routes >
          <Route path="/" element={<Dashboard />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App;
