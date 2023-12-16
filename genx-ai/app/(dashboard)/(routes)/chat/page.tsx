"use client"

import Heading from "@/components/Heading"
import { MessageCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from 'zod'

import { formSchema } from "./constants"
import { zodResolver } from "@hookform/resolvers/zod"

const ChatXPage = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            prompt:""
        }
    })


  return (
    <div className="bg-gradient-to-r min-h-screen grainy from-rose-50 to-slate-100">
        <Heading
            title="ChatX-AI"
            description="Most Advanced AI Chatting conversation model"
            icon={MessageCircle}
            iconColor="text-violet-500"
            bgColor="bg-violet-500/10"
        />

        <div className="px-4 lg:px-8">

        </div>
    </div>
  )
}

export default ChatXPage