import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Home } from "lucide-react"; // Importing icons

const Navbar = ({ onHomeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeTrigger, setHomeTrigger] = useState(false); // Trigger for re-running animations

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHomeClick = () => {
    scrollToTop();
    setHomeTrigger(prev => !prev); // Flip trigger to restart animations
    if (onHomeClick) onHomeClick(); // Optional: for rerender logic
    closeSidebar();
  };

  return (
    <>
      {/* Navbar */}
      <nav
        style={{ backgroundColor: "#0f172a" }}
        className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-2 z-50"
      >
        <div
          className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-700 transition"
          onClick={toggleSidebar}
        >
          <Menu className="text-blue-300 w-8 h-8" /> {/* Hamburger */}
          <h1 className="text-2xl font-middle text-white">SORTIFY</h1>
        </div>
      </nav>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-64 bg-black bg-opacity-95 shadow-lg z-50 overflow-y-auto p-4"
            >
              <div className="flex flex-col space-y-6 mt-8">
                {/* Home Button */}
                <button
                  onClick={handleHomeClick}
                  className="flex items-center space-x-3 text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-lg transition"
                >
                  <Home className="w-6 h-6 text-blue-300" />
                  <span className="text-lg">Home</span>
                </button>

                {/* Example Sort Links */}
                <h2 className="text-gray-500 text-sm">LOGARITHMIC</h2>
                <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-lg text-left">Quick Sort</button>
                <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-lg text-left">Merge Sort</button>
                <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-lg text-left">Heap Sort</button>

                <h2 className="text-gray-500 text-sm mt-4">QUADRATIC</h2>
                <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-lg text-left">Bubble Sort</button>
                <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-lg text-left">Selection Sort</button>
                <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-lg text-left">Insertion Sort</button>
                <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-lg text-left">Odd Even Sort</button>
              </div>
            </motion.div>

            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              onClick={closeSidebar}
            />
          </>
        )}
      </AnimatePresence>

      {/* Pass homeTrigger to your animation component(s) */}
      {/* Example: <SortingVisualizer key={homeTrigger} /> */}
    </>
  );
};

export default Navbar;
