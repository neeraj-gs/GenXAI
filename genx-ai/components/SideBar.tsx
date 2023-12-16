"use client"

import Image from "next/image"
import Link from "next/link"

const SideBar = () => {
  return (
    <div className="space-y-4 flex flex-col h-full bg-[#111827] text-white">
        <div className="px-3 py-2 flex-1">
            <Link href='/dashboard' className="flex items-center pl-3 mb-14">
                <div className="relative w-10 h-10 mr-4">
                    <Image fill alt="logo" src='/ai.png' />
                </div>

                <h1 className="text-2xl font-extrabold font-serif">GenX-AI</h1>
            </Link>
        </div>
    </div>
  )
}

export default SideBar