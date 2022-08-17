import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/Home'

const App = () => {
    return (
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            
          </Routes>
        </Router>
      </div>
    );
}

export default App;
