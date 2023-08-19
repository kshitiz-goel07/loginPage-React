import Dashboard from "./dashboard";
import Signin from "./signin";
import Signup from "./Signup"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

import './style.css'

function App() {
  return (
    <div className="bg">
      <Dashboard></Dashboard>
      <Router>
      <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
       </Routes>
      </Router>
      {/* <Signin></Signin> */}
      {/* <Signup></Signup> */}
      </div>
  )
}

export default App
