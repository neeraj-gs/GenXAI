import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function DashBoardPage() {
  return (
    <div>
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>Come, Explore the Power of AI</h2>
        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>Chat With the Smartest Gen-X-AI - Experience the Power of AI </p>
      </div>

      <div className='px-4 md:px-20 lg:px-32 space-y-4'>
        {/* TypeWriter  */}
      </div>
    </div>
  )
}
