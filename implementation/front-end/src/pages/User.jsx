// Package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Asd from "../components/Asd";
// ==>
const User = () => {
  return (
    <div>
      <p>this is user</p>
      <Routes>
        <Route path="/asd" element={<Asd />} />
      </Routes>
    </div>
  );
};

export default User;
