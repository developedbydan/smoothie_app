import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-banana min-h-screen">
      <Nav />
      <Home />
    </div>
  );
};

export default App;
