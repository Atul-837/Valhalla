import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header/Header";
import Hindi from "./Components/Content/Genre/Hindi/Hindi";
import Homepage from "./Components/Content/Homepage/Homepage";
import Punjabi from "./Components/Content/Genre/Punjabi/Punjabi";
import International from "./Components/Content/Genre/International/International";
import Profile from "./Components/Content/Profile/Profile";
import NewReleases from "./Components/Content/New Release/NewReleases";

function App() {
  return (
    <Router>
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Hindi" element={<Hindi />} />
          <Route path="/Punjabi" element={<Punjabi />} />
          <Route path="/International" element={<International />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/New_Releases" element={<NewReleases />} />
        </Routes>
        <div>jsdfhkshfkklsd</div>
        
      </div>
    </Router>
  );
}

export default App;
