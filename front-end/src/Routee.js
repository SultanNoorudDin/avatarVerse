import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MergeSearch from "./Pages/Search/MergeSearch";
import Test from './Pages/ChatPage/ChatPageMerge'

const Routee = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<MergeSearch/>}></Route>
          <Route path="/test" element = {<Test/>}></Route>
        </Routes>
    </Router>
  );
};
export default Routee