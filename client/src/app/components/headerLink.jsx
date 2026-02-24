'use client'

import { easeInOut, motion } from "motion/react"


export default function HeaderLink({ link, route }) {
    return(
        <motion.a initial={{ borderBottom: '3px solid transparent' }} whileHover={{ borderBottom: '3px solid black' }} transition={{ duration: 0.1, ease: 'easeInOut' }} className="headerLink px-4 py-2 font-semibold text-xl" href={route}>{link}</motion.a>
    )
}