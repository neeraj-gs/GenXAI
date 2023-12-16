import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function DashBoardPage() {
  return (
    <div>
      Hii
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}
