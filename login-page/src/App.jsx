import Dashboard from "./dashboard";
import Signin from "./signin";
import Signup from "./Signup"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

import './style.css'

function App() {
  return (
    <div className="bg">
      <Router>
      <Dashboard></Dashboard>
      <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
       </Routes>
      </Router>
      {/* <Signin></Signin> */}
      {/* <Signup></Signup> */}
      </div>
  )
}

export default App
