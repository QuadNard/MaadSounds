'use client';

import { useEffect, useState } from 'react';
import React from 'react'
import { Button } from './Button';
import { useCart } from '@/hooks/use-cart';
import { Product } from '@/payload-types';



const AddToCartButton = ({product}: {product: Product}) => {
  const { addItem } = useCart();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);

    return () => clearTimeout(timeout);

  }, [isSuccess]);

  return (
    <Button  size='lg' className='w-full text-black' variant={'lavender'}>
   

  <h1>Purchasing rights is in development</h1>
    </Button>
  )
}

export default AddToCartButton;


/* 
onClick={() => {
      addItem(product);
      setIsSuccess(true);
    }}

*/

  /* {isSuccess ? 'Added!' : 'Add to Cart'} */