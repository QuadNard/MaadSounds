import React from 'react'

import Link from 'next/link'
import { cookies } from 'next/headers'
import { getServerSideUser } from '@/lib/validators/payload-utils'
import { buttonVariants } from './Button'
import UserAccountNav from './UserAccountNav'
import Cart from './Cart'

const Nav = async () => {
   const nextCookies = cookies()
    const { user } = await getServerSideUser(nextCookies);


  return (
    <div className='sticky top-0 z-40 w-full  h-[65px] bg-white/95 transition-colors duration-500 supports-backdrop-blur:bg-white/95   inset-x-0 shadow-[0_3px_2px_-2px_rgba(0,0,0,0.1)] text-center lg:z-50  flex-none backdrop-blur lg:border-b lg:border-slate-900/10 px-[1.5em]'>
        <div className='max-w-8xl mx-auto'>
          <div className='py-2 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0'>
            <div className='relative flex items-center '>
                    <Link href={'/'} className='focusable aspect-square w-12 h-12  cursor-pointer rounded-md bg-rose-500/10 text-rose-500 transition hover:bg-rose-500/20 focus:ring-rose-500/40 '>
                       <svg className="h-full w-full" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M14 43V28.09L33 13v7.148L42 13v14.727L23 43v-7.234L14 43Z" fill="currentColor" fillRule="evenodd"></path></svg>
                    </Link>
                  <div className='relative'>
                    <div className='flex items-center pl-4 font-bold text-[#383732]'>
                      MAADSOUNDS
                    </div>
                  </div>
                  <div className='relative hidden lg:flex items-center ml-auto'>
                      <div className=' hidden lg:flex lg:items-center lg:justify-end space-x-4 lg:space-x-6'>
                             {user ? null : (
                                        <Link href='/' className={buttonVariants({
                                            variant: 'default',
                                        })}>
                                            Sign in
                                        </Link>
                                    )}
                                     {user ? null : (
                                        <span className='h-6 w-px bg-[#a4a09d]' aria-hidden='true' />
                                    )}
                                    {user ? (
                                        <UserAccountNav user={user} />
                                    ) : (
                                        <Link href='/sign-up' className={buttonVariants({ variant: 'default'})}> 
                                            Create account
                                        </Link>
                                    )}
                                     {user  ? (
                                        <span className='h-6 w-px bg-[#a4a09d]' aria-hidden='true' />
                                    ): null}
                                    {user ? null : (
                                        <div className='flex lg:ml-6'> 
                                            <span className='h-6 w-px bg-[#a4a09d]' aria-hidden='true' />
                                        </div>
                                    )}
                                    <div className='ml-4 flow-root lg:ml-6'>
                                        <Cart />
                                    </div>
                      </div>
                  </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Nav

