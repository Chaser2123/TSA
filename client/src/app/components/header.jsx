'use client'

import { useEffect, useState } from "react"
import { motion, useScroll } from "motion/react"
import HeaderLink from "./headerLink.jsx";

export default function Header() {
    const { scrollY } = useScroll();

  const [direction, setDirection] = useState("up")

  useEffect(() => {
  return scrollY.on("change", (latest) => {
    const previous = scrollY.getPrevious();
    const diff = latest - previous;

    const newDir = diff > 0 ? "down" : "up";
    setDirection(newDir);
  });
}, [scrollY]);

    return(
        <motion.main className="header-bg h-28 w-full fixed origin-top flex items-center justify-between px-15" animate={direction === "up" ? { rotateX: 0 } : { rotateX: -90 }} transition={{ duration: 0.5, ease: "easeInOut"}}>
            <a href="/" className="text-5xl">LOGO</a>

            <ul className="flex justify-between w-160 space-x-3">
                <HeaderLink link='Resource' route='/resources' />
                <HeaderLink link='Request' route='/request' />
                <HeaderLink link='Contact' route='/contact' />
                <HeaderLink link='News' route='/news' />
                <HeaderLink link='Admin' route='/admin' />
            </ul>
        </motion.main>
    )
}