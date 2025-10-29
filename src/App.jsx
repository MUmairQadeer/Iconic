import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialTasks = [
  { id: 1, title: "Brush walls and tile line", description: "Prevents algae buildup and staining.", property: "Our Home" },
  { id: 2, title: "Check and adjust chlorine/bromine levels", description: "Maintain sanitizer levels to prevent algae and bacteria.", property: "Our Home" },
  { id: 3, title: "Skim debris from surface", "description": "Remove leaves and floating debris to keep pool clean.", property: "Our Home" },
  { id: 4, title: "Test and balance pH/alkalinity", "description": "Keeps water safe, prevents scaling/corrosion.", property: "Our Home" },
  { id: 5, title: "Vacuum pool floor", "description": "Removes dirt and sediment from bottom.", property: "Our Home" },
  { id: 6, title: "Inspect roof for damaged shingles", "description": "Find and fix damaged shingles to avoid leaks under snow load.", property: "Our Home" },
  { id: 7, title: "Winterize sprinklers", "description": "Shut off water and blowout to prevent frozen pipe bursts.", property: "Our Home" },
  { id: 8, title: "Test and clean the furnace", "description": "Tune-up and safety check to prevent breakdowns and CO risk.", property: "Our Home" },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [animating, setAnimating] = useState([]);

  const handleCheck = (id) => {
    if (animating.includes(id)) return;
    setAnimating((prev) => [...prev, id]);

    // Total time before removal (2000ms)
    setTimeout(() => {
      setTasks((prev) => prev.filter((t) => t.id !== id));
      // Remove id from animating after removal to clean up state
      setAnimating((prev) => prev.filter((animId) => animId !== id));
    }, 2000); 
  };

  return (
    <div className="min-h-screen bg-[#f2f4f7] flex flex-col items-center py-10 overflow-hidden">
      <div className="w-full max-w-2xl px-4">
        <AnimatePresence>
          {tasks.map((task) => {
            const isAnimating = animating.includes(task.id);

            // Define the box shadow to simulate a press-in effect on check
            const shadowEffect = isAnimating 
              ? "inset 0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 2px 4px -2px rgba(0, 0, 0, 0.05)" // Pressed look
              : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06)"; // Normal shadow

            return (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: isAnimating ? [1, 1.15] : 1, 
                  backgroundColor: isAnimating ? ["#e8ebf7", "#8ebd9cff"] : "#e8ebf7",
                  // 🟢 NEW: Add 3D box shadow animation
                  boxShadow: shadowEffect,
                  transition: {
                    scale: { delay: 1, duration: 0.4, ease: "easeOut" }, 
                    backgroundColor: { delay: 1, duration: 0.4, ease: "easeOut" },
                    boxShadow: { duration: 0.4, ease: "easeOut" } // Shadow animates quickly on press
                  },
                }}
                exit={{
                  y: "100vh",
                  opacity: 0,
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
                // Removed the default Tailwind shadow class since we animate it dynamically
                className="mb-4 flex items-center justify-between p-5 rounded-xl border border-gray-300" 
              >
                {/* ✅ Left section: Checkbox + Text */}
                <div className="flex items-start space-x-3 flex-1">
                  <motion.div
                    className="relative mt-1 flex items-center justify-center cursor-pointer"
                    onClick={() => handleCheck(task.id)}
                    initial={false}
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* 1. Define the Gaussian Blur filter for the shadow trace effect */}
                      <defs>
                        <filter id="shadowTrace">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                            <feComposite operator="in" in2="SourceAlpha" />
                        </filter>
                      </defs>

                      {/* Static Checkbox (20x20 at x=2, y=2) */}
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="4"
                        ry="4"
                        fill="#fff"
                        stroke="#000"
                        strokeWidth="2.2"
                      />

                      {/* 🟢 Animated Outer Shadow Trace Rectangle and Tick */}
                      {isAnimating && (
                        <>
                          <motion.rect
                            x="0" 
                            y="0"
                            width="24"
                            height="24"
                            rx="6" 
                            ry="6" 
                            fill="none" 
                            filter="url(#shadowTrace)" 
                            stroke="#3c6e71" 
                            strokeWidth="4"
                            initial={{ pathLength: 0, opacity: 1 }}
                            animate={{ 
                              pathLength: [0, 1], 
                              opacity: [1, 0]     
                            }}
                            transition={{ 
                              pathLength: { duration: 0.8, ease: "easeInOut" },
                              opacity: { delay: 0.8, duration: 0.3 }
                            }}
                          />
                          <motion.path
                            d="M6 12.5 L10 16.5 L18 7.5"
                            stroke="#5b8f73" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ 
                              pathLength: 1,
                              opacity: 1 
                            }}
                            transition={{ delay: 0.1, duration: .6, ease: "easeInOut" }}
                          />
                        </>
                      )}
                    </svg>
                  </motion.div>

                  {/* Text content */}
                  <div className="flex-1">
                    <motion.div
                      className="relative inline-block"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        color: isAnimating ? "#ffffff" : "#1f2937", 
                        fontWeight: 600,
                        fontSize: "1rem",
                        transition: "color 0.3s ease 0.7s", 
                      }}
                    >
                      {task.title}
                      {/* Strikethrough line */}
                      <motion.span
                        className="absolute left-0 top-1/2 h-[2px]"
                        style={{
                          backgroundColor: isAnimating ? "#ffffff" : "#5b8f73", 
                        }}
                        initial={{ width: "0%" }}
                        animate={{
                          width: isAnimating ? "100%" : "0%",
                        }}
                        transition={{
                          delay: 0.7,
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>

                    <p
                      className={`text-sm mt-1 transition-colors duration-300`}
                      style={{
                        color: isAnimating ? "#ffffff" : "#4b5563",
                        transition: "color 0.3s ease 0.7s",
                      }}
                    >
                      {task.description}
                    </p>
                    <p
                      className={`text-xs mt-1`}
                      style={{
                        color: isAnimating ? "#ffffff" : "#6b7280",
                        transition: "color 0.3s ease 0.7s",
                      }}
                    >
                      Property: <span className="font-medium">{task.property}</span>
                    </p>
                  </div>
                </div>

                {/* ✅ Right section: Logo (Restored) */}
                <motion.img
                  src="https://static.vecteezy.com/system/resources/previews/005/005/788/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
                  alt="Logo"
                  className="w-4 h-4 rounded-full ml-4 object-cover opacity-25"
                  animate={{
                    scale: isAnimating ? 1.4 : 1,
                    opacity: isAnimating ? 1 : 0.85,
                  }}
                  transition={{ delay: 0.7, duration: 0.4 }} 
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}