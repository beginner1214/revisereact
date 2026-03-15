import { useState, useEffect } from "react";
import Header from "./Components/Header";

function App() {
  const [isdark, setdark] = useState(
    JSON.parse(localStorage.getItem("isdarks")) || false
  );

  useEffect(() => {
    if (isdark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("isdarks", JSON.stringify(isdark));
  }, [isdark]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Header isdark={isdark} setdark={setdark} />

      <div className="p-10 text-gray-800 dark:text-gray-200">
        Dark mode enabled with Tailwind 🌙
      </div>
    </div>
  );
}

export default App;