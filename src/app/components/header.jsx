'use client'

import { useEffect, useState } from "react"
import { motion, useScroll } from "motion/react"
import HeaderLink from "./headerLink.jsx"
import '../atMedia.css'

export default function Header() {
    const { scrollY } = useScroll();

  const [direction, setDirection] = useState("up")

  const [show, setShow] = useState(false)
  function handleClick() {
    setShow(!show)
  }

  useEffect(() => {
  return scrollY.on("change", (latest) => {
    const previous = scrollY.getPrevious();
    const diff = latest - previous;

    const newDir = diff > 0 ? "down" : "up";
    
    if (Math.abs(diff) > 15 || newDir == "up") {
      setDirection(newDir);
    }
  });
}, [scrollY]);

    return(
        <motion.main className="headerMain header-bg h-28 w-full fixed z-1 top-0 origin-top flex items-center justify-around px-15 text-center" animate={direction === "up" ? { rotateX: 0 } : { rotateX: -90 }} transition={{ duration: 0.5, ease: "easeInOut"}}>
            <a href="/" className="flex items-center text-3xl font-extrabold headerTitle"><img src="logo.svg" alt="" className="w-25" /><span className="flex flex-col text-left">Saratoga Springs<span className="text-xl">Community Hub</span></span></a>

            <span className={`flex justify-between w-160 space-x-3 linksMediaClass ${show ? "showMediaClass" : ""}`}>
                <HeaderLink link='Resources' route='/resources' />
                <HeaderLink link='Request' route='/request' />
                <HeaderLink link='Contact' route='/contact' />
            </span>

            <button className="menuButton" onClick={handleClick}>///</button>
        </motion.main>
    )
}