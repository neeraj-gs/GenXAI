"use client"

import Heading from "@/components/Heading"
import { MessageCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from 'zod'

import { formSchema } from "./constants"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField } from "@/components/ui/form"

const ChatXPage = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            prompt:""
        }
    });
    //zod resolverxontrols the validation of teh form

    //usef orm has its own laoding state

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) =>{
        console.log(values) //as no api so just use this
    }

    


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
            <Form {...form}> 
            {/* we pass all fucntions form contstnat has that uses reac thhok forms  */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
                <FormField name="prompt" />
            </form>

            </Form>

        </div>
    </div>
  )
}

export default ChatXPage