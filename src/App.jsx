import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full bg-gray-200">
      <div className="bg-gray-100 h-screen"></div>
    </div>
  );
}

export default App;
