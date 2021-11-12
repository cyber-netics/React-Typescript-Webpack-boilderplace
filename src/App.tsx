import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./Pages/Main";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
