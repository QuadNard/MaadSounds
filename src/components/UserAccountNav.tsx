'use client';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { Button } from './Button'
import { User } from '../payload-types'
import { useAuth } from '@/hooks/use-auth'

const UserAccountNav = ({user}: {user: User}) => {
  const { signOut } = useAuth() 
  


  return (
  <DropdownMenu>
    <DropdownMenuTrigger 
      asChild 
      className='overflow-visible'>
        <Button variant='ghost' size='sm' className='relative'>
           My Account 
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='bg-white w-60' align='end'>
          <div className='flex items-center justify-start gap-2 p-2'>
            <div className='flex flex-col space-y-0.5 leading-none'>
                <p className='font-medium text-sm text-white'>{user.email}</p>
            </div>
          </div>
        <DropdownMenuSeparator />

        <DropdownMenuItem 
         onClick={signOut}
        className='cursor-pointer text-white'>
              Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default UserAccountNav
