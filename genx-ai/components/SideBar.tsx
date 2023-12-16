"use client"

import { cn } from "@/lib/utils"
import { LayoutDashboard } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const routes = [
    {
        label:"Dashboard",
        icon:LayoutDashboard,
        href:"/dashboard",
        color:"text-sky-500"

    }
]

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
            <div className="space-y-2">
                {routes.map((r)=>{
                    return(
                        <Link href={r.href} key={r.href} className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-xl transition-all">
                            <div className="flex items-center flex-1">
                                <r.icon className={cn("h-5 w-5 mr-3",r.color)} />
                                {r.label}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default SideBar