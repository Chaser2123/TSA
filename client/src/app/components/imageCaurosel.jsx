'use client'

import { useState } from "react"
import { motion, rgba } from "motion/react";

export default function ImageCaurosel({ images, message }) {
    const imgList = images;
    const [index, setIndex] = useState(0);
    function handleClickDown() {
        if ((index - 1) < 0) {
            setIndex(imgList.length - 1)
        } else {
            setIndex(index - 1)
        }
    }
    function handleClickUp() {
        if ((index + 1) > imgList.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }
    return (
        <div className="w-full h-150 overflow-hidden flex justify-center items-center relative">
            <motion.h1 className="text-5xl absolute left-5 cursor-pointer px-2 font-semibold" initial={{ backgroundColor: "transparent" }} whileHover={{ backgroundColor: 'rgba(2, 2, 2, 0.45)' }} onClick={handleClickDown}>&lt;</motion.h1>
            <img className="w-full" src={imgList[index]} alt="" />
            <motion.div className="absolute h-60 w-230 text-6xl font-bold rounded-4xl flex justify-center items-center text-center bg-blue-50 opacity-60" style={{ boxShadow: '14px 10px 16px 0px black' }}>{message}</motion.div>
            <motion.h1 className="text-5xl absolute right-5 cursor-pointer px-2 font-semibold" initial={{ backgroundColor: "transparent" }} whileHover={{ backgroundColor: 'rgba(2, 2, 2, 0.45)' }} onClick={handleClickUp}>&gt;</motion.h1>
        </div>
    )
}