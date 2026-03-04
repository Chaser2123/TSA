'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function HomepageCarousel() {
  const slides = [
    {
      img: "myPhotos/1.jpg",
      title: "View Resources",
      text: "Discover my projects, skills, and experience in web development. Explore my work and get in touch!",
      link: "/resources",
      linkText: "Go to Resources"
    },
    {
      img: "myPhotos/9.jpg",
      title: "View Events",
      text: "Discover my projects, skills, and experience in web development. Explore my work and get in touch!",
      link: "/events",
      linkText: "Go to Events"
    },
    {
      img: "myPhotos/3.jpg",
      title: "View New & Upcoming",
      text: "Discover my projects, skills, and experience in web development. Explore my work and get in touch!",
      link: "/request",
      linkText: "Go to New and upcoming"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  function next() {
    setDirection(1);
    setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  function prev() {
    setDirection(-1);
    setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  return (
    <div className="w-full h-150 flex items-center justify-center overflow-hidden relative">
      <motion.h1 className="absolute left-10 z-10 text-5xl cursor-pointer px-4 py-2 rounded-2xl" onClick={prev} initial={{ backgroundColor: "transparent" }} whileHover={{ backgroundColor: "gray" }} transition={{ duration: 0.3 }}>
        &lt;
      </motion.h1>

      <div className="w-full h-full relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[current].img}
              className="w-full h-full object-cover"
            />

            <div className="absolute top-1/2 left-40 -translate-y-1/2">
              <h1 className="text-4xl">{slides[current].title}</h1>
              <h2 className="text-xl">{slides[current].text}</h2>
              <br />
              <a className="bg-blue-900 px-5 py-3 rounded-xl text-white text-2xl" href={slides[current].link}>
                {slides[current].linkText}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.h1  className="absolute right-10 z-10 text-5xl cursor-pointer px-4 py-2 rounded-2xl" onClick={next} initial={{ backgroundColor: "transparent" }} whileHover={{ backgroundColor: "gray" }} transition={{ duration: 0.3 }}>
        &gt;
      </motion.h1>
    </div>
  );
}