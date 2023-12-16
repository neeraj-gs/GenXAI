import { UserButton } from '@clerk/nextjs'
import MobSideBar from './MobSideBar'

const NavBar = () => {
  return (
    <div className='flex items-center p-4 bg-pink-50'>
        <MobSideBar />

        <div className='flex w-full justify-end'>
            <UserButton afterSignOutUrl='/' />
        </div>

    </div>
  )
}

export default NavBar