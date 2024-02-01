import React, { useEffect, useState } from 'react'
import { Product } from '../payload-types';
import { Skeleton } from './Skeleton';
import Link from 'next/link';
import { cn, formatPrice } from '@/lib/utils';
import { PRODUCT_CATEGORIES } from '@/config';
import ImageContainer from './ImageContainer';



interface ProductListingProps {
  product: Product | null;
  index: number;
}

const ProductListing = ({product, index}: ProductListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 75)

    return () => clearTimeout(timer)
  }, [index])


  if(!product || !isVisible) return <ProductPlaceholder />

  const label = PRODUCT_CATEGORIES.find(({value}) => value === product.category)?.label

  const validUrls = product.images.map(({image}) => 
    typeof image === 'string' ? image : image.url
  ).filter(Boolean) as string[]


  
  if (isVisible && product) {
    return <Link className={cn(
     'invisible  mr-4 cursor-grab   group/main ',
          {
            'visible animate-in fade-in-5': isVisible,
          }
    )} href={`/track/${product.id}`}>
   
      <div className='p-4  bg-rose-500  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-100
           tablet:hover:bg-transparent mobile:hover:bg-transparent 
           rounded-md h-full mini-laptop:p-3 tablet:p-0 tablet:from-transparent tablet:to-transparent
           mobile:from-transparent mobile:to-transparent mobile:p-0'>
            <div  style={{
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          }}        className='w-[160px] h-[160px] relative rounded-md 
          mini-laptop:w-[140px] mini-laptop:h-[140px] 
          tablet:w-[130px] tablet:h-[130px] mobile:w-[100px] mobile:h-[100px]  hover:scale-105 hover:text-white/100 transition duration-200 ease-out group'>
              <ImageContainer urls={validUrls} />
            </div>
              <p className="line-clamp-2 mt-3 text-base mobile:text-sm tablet:text-sm">
            {product.name}
        </p>
        
        <p
          className="line-clamp-2 mt-0.5 text-sm text-black
            font-ProximaRegular mobile:text-xs tablet:text-xs"
        >
            {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  }

}
  const ProductPlaceholder = () => {
     return (
      <div className='flex flex-col w-full'>
        <div className='relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl'>
          <Skeleton className='h-full w-full' />
        </div>
        <Skeleton className='mt-4 w-2/3 h-4 rounded-lg' />
        <Skeleton className='mt-2 w-16 h-4 rounded-lg' />
        <Skeleton className='mt-2 w-12 rounded-lg' />
      </div>
     )
  }
  
export default ProductListing

/*
<Link className={cn(
     'invisible h-full w-full cursor-pointer group/main',
          {
            'visible animate-in fade-in-5': isVisible,
          }
    )} href={`/track/${product.id}`}>
   
 <div className='flex flex-col w-full'>
          <ImageContainer urls={validUrls} />
          <div className='inset-x-0 ml-4 flex flex-col bottom-4'>
            
          <h3 className='mt-1 font-medium text-sm text-gray-700'>
            {product.name}
          </h3>
          <p className='mt-1 text-sm text-gray-500'>
            {label}
          </p>
          <p className='mt-1 font-medium text-sm text-gray-900'>
            {formatPrice(product.price)}
          </p>
          </div>
        </div>
    </Link>

*/