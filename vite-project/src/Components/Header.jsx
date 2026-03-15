function Header({ isdark, setdark }) {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm dark:bg-gray-950 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          MyApp
        </h1>

        <nav className="flex gap-6 text-gray-600 font-medium dark:text-gray-300">
          <a
            href="#"
            className="hover:text-black transition dark:hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-black transition dark:hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-black transition dark:hover:text-white"
          >
            Contact
          </a>
        </nav>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          onClick={() => setdark(!isdark)}
        >
          {isdark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}

export default Header;
