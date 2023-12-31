"use client"

import Heading from "@/components/Heading"
import axios from "axios"
import { MessageCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from 'zod'

import { formSchema } from "./constants"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ChatCompletionRequestMessage } from "openai"
import Empty from "@/components/Empty"
import Loader from "@/components/Loader"
import { cn } from "@/lib/utils"
import UserAvatar from "@/components/UserAvatar"
import BotAvatar from "@/components/BotAvatar"

const ChatXPage = () => {

    const router = useRouter();
    const [messages,setMessages] = useState<ChatCompletionRequestMessage[]>([])

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

        try {
            const userMsg: ChatCompletionRequestMessage = {
                role: "user",
                content: values.prompt, //whtever is teh input
            }
            const newMsg = [...messages,userMsg];
            const res = await axios.post("/api/chat",{
                messages: newMsg,
            })
            setMessages((c)=>[...c,userMsg,res.data]);

            form.reset(); //to clear  the input

            
        } catch (error:any) {
            //Open pro model to get hte premium one
            console.log(error)
        }finally{
            //recrash the ruter, server compoentsn are updated 
            router.refresh();
        }
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
                <FormField name="prompt" render={({field})=>(
                    <FormItem className="col-span-12 lg:col-span-10">
                        <FormControl className="m-0 p-0 ">
                            <Input className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent p-4" disabled={isLoading} placeholder="Start Your Conversation, Ask Anything" {...field}/>
                        </FormControl>
                    </FormItem>
                )} />
                <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
                    GenerateX
                </Button>
            </form>

            </Form>
        </div>

        <div className="space-y-4 mt-4 ">
            {isLoading && (
                <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                    <Loader />
                </div>
            )}

            {messages.length===0 && !isLoading && (
                <Empty label="No Converstations Yet, Start Chat With AI" />
            )}
            <div className="flex flex-col-reverse gap-y-4">
                {messages.map((m)=>{
                    return(
                        <div 
                        key={m.content}
                        className={cn("p-8 w-full flex items-start gap-x-8 rounded-xl",
                            m.role === "user"? "bg-white border border-black/10":"bg-muted"
                        )}
                        >
                            {m.role === "user" ? <UserAvatar /> : <BotAvatar />}
                            <p className="text-sm">
                            {m.content}
                            </p>
                            

                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ChatXPage