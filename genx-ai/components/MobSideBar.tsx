"use client"

import { Menu } from "lucide-react"
import SideBar from "./SideBar"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

const MobSideBar = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Button variant='ghost' size='icon' className='md:hidden'>
                <Menu />
            </Button>
        </SheetTrigger>
        <SheetContent side='left' className="p-0">
            <SideBar />

        </SheetContent>
        
    </Sheet>
    
  )
}

export default MobSideBar