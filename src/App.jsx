import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
Install once:
npm install framer-motion
*/

const initialTasks = [
  {
    id: 1,
    title: "Brush walls and tile line",
    description: "Prevents algae buildup and staining.",
    property: "Our Home",
  },
  {
    id: 2,
    title: "Check and adjust chlorine/bromine levels",
    description: "Maintain sanitizer levels to prevent algae and bacteria.",
    property: "Our Home",
  },
  {
    id: 3,
    title: "Skim debris from surface",
    description: "Remove leaves and floating debris to keep pool clean.",
    property: "Our Home",
  },
  {
    id: 4,
    title: "Vacuum pool floor",
    description: "Removes dirt and sediment from bottom.",
    property: "Our Home",
  },
  {
    id: 5,
    title: "Inspect roof for damaged shingles",
    description: "Find and fix damaged shingles to avoid leaks under snow load.",
    property: "Our Home",
  },
  {
    id: 6,
    title: "Winterize sprinklers",
    description: "Shut off water and blowout to prevent frozen pipe bursts.",
    property: "Our Home",
  },
  {
    id: 7,
    title: "Test and clean the furnace",
    description: "Tune-up and safety check to prevent breakdowns and CO risk.",
    property: "Our Home",
  },
  {
    id: 8,
    title: "Inspect roof for damaged shingles",
    description: "Find and fix damaged shingles to avoid leaks under snow load.",
    property: "Our Home",
  },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [animating, setAnimating] = useState([]);

  const handleCheck = (id) => {
    if (animating.includes(id)) return;
    setAnimating((prev) => [...prev, id]);

    // Remove task after animation finishes
    setTimeout(() => {
      setTasks((prev) => prev.filter((t) => t.id !== id));
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 overflow-hidden">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        🏡 Home Maintenance Checklist
      </h1>

      <div className="w-full max-w-2xl px-4">
        <AnimatePresence>
          {tasks.map((task) => {
            const isAnimating = animating.includes(task.id);

            return (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: isAnimating ? [1, 1.08, 1.05] : 1,
                  transition: { duration: 0.5 },
                }}
                exit={{
                  y: "150vh",
                  transition: {
                    duration: 2,
                    ease: [0.17, 0.67, 0.83, 0.97],
                  },
                }}
                className={`mb-4 flex items-start space-x-3 p-5 rounded-xl border shadow-sm transition-colors duration-500 ${
                  isAnimating
                    ? "bg-green-50 border-green-400"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* Custom animated checkbox */}
                <motion.div
                  className="relative mt-1 flex items-center justify-center cursor-pointer"
                  onClick={() => handleCheck(task.id)}
                  initial={false}
                  animate={{
                    scale: isAnimating ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Base checkbox border */}
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Static border */}
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="4"
                      ry="4"
                      fill="#fff"
                      stroke="#9ca3af"
                      strokeWidth="2.6"
                    />

                    {/* Animated tracing border */}
                    {isAnimating && (
                      <motion.rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="4"
                        ry="4"
                        fill="none"
                        stroke="#16a34a"
                        strokeWidth="2.6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      />
                    )}

                    {/* Tick animation */}
                    {isAnimating && (
                      <motion.path
                        d="M6 12.5 L10 16.5 L18 7.5"
                        stroke="#16a34a"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          delay: 1.05,
                          duration: 0.55,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </svg>
                </motion.div>

                {/* Text and animation */}
                <div className="flex-1">
                  <motion.div
                    className="relative inline-block"
                    animate={{
                      "--strike-width": isAnimating ? "100%" : "0%",
                    }}
                    transition={{
                      delay: 1,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: "relative",
                      display: "inline-block",
                      color: isAnimating ? "#15803d" : "#111827",
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                  >
                    {task.title}
                    {/* Animated strike line */}
                    <motion.span
                      className="absolute left-0 top-1/2 h-[2px] bg-green-600"
                      initial={{ width: "0%" }}
                      animate={{
                        width: isAnimating ? "100%" : "0%",
                      }}
                      transition={{
                        delay: 1,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  <p
                    className={`text-sm mt-1 transition-colors duration-300 ${
                      isAnimating ? "text-green-600" : "text-gray-600"
                    }`}
                  >
                    {task.description}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Property:{" "}
                    <span className="font-medium">{task.property}</span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
