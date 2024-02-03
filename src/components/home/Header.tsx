import React from 'react'
import Cart from '../Cart'
import Link from 'next/link'
import { buttonVariants } from '../Button'
import { getServerSideUser } from '@/lib/validators/payload-utils'
import { cookies } from 'next/headers'
import UserAccountNav from '../UserAccountNav'
import { UserRoundPlus } from 'lucide-react'


const Header = async () => {
  const nextCookies = cookies()
  const { user } = await getServerSideUser(nextCookies);


  return (
<>
<header className="flex items-center justify-between py-8">
    <div />
    <nav className="flex gap-6">
    {user ? null : (
                                        <Link href='/sign-in' className={buttonVariants({
                                            variant: 'ghost',
                                        })}>
                                            Sign in
                                        </Link>
                                    )}
                                    {user ? null : (
                                        <span className='h-6 w-px bg-black' aria-hidden='true' />
                                    )}
                                    {user ? (
                                        <UserAccountNav user={user} />
                                    ) : (
                                        <Link href='/sign-up' className={buttonVariants({ variant: 'ghost'})}> 
                                             <UserRoundPlus className="text-white" />
                                        </Link>
                                    )}
                                    {user  ? (
                                        <span className='h-6 w-px bg-black' aria-hidden='true' />
                                    ): null}
                                    {user ? null : (
                                        <div className='flex lg:ml-6'> 
                                            <span className='h-6 w-px bg-black' aria-hidden='true' />
                                        </div>
                                    )}
      <div className='ml-4 flow-root lg:ml-6'>
          <Cart />
      </div>
    </nav>
</header>
</>
  )
}

export default Header
