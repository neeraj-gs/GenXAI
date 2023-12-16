import Heading from "@/components/Heading"
import { MessageCircle } from "lucide-react"

const ChatXPage = () => {
  return (
    <div className="bg-gradient-to-r min-h-screen grainy from-rose-50 to-slate-100">
        <Heading
            title="ChatX-AI"
            description="Most Advanced AI Chatting conversation model"
            icon={MessageCircle}
            iconColor="text-violet-500"
            bgColor="bg-violet-500/10"
        />
    </div>
  )
}

export default ChatXPage