

import AddToCartButton from '@/components/AddToCartButton';
import Gradients from '@/components/Gradient';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import MouseFlowImage from '@/components/MouseFlowImage';
import PlayerTrack from '@/components/Player';
import { PRODUCT_CATEGORIES } from '@/config';
import { getPayloadClient } from '@/get-payload';
import { formatPrice } from '@/lib/utils';
import { Check, Shield } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';


interface PageProps {
    params: {
        trackId: string;
    }
}




const BREADCRUMB = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Track', href: '/track' },
]


const Page = async ({ params }: PageProps) => {


    const { trackId } = params;

    const payload = await getPayloadClient()
    
    const { docs: products } = await payload.find({
        collection: 'products',
        limit: 1,
        where: {
            id: {
                  equals: trackId
            },
            approvedForSale: {
                equals: 'approved'
            }
        }
    })
    
    const [product] = products;
    
    if (!product) return notFound()

   const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category
   )?.label;

    const validUrls = product.images.map(({image}) => 
    typeof image === 'string' ? image : image.url
  ).filter(Boolean) as string[]


    const validTrack = product.audio.map(({audio}) => 
    typeof audio === 'string' ? audio : audio.url
).filter(Boolean) as string[]





    return (
     <div style={{ position: 'relative', width: '100%', height: '100%' }} >
        <Gradients />
        <div className='relative z-1'>
           <MaxWidthWrapper>
            <div className=''>
                <div className='mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
                    <div className='lg:max-w-lg lg:self-end'>
                        <ol className='flex items-center space-x-2'>
                            {BREADCRUMB.map((breadcrumb, i) => (
                                <li key={breadcrumb.href}>
                                    <div className='flex items-center text-sm'>
                                        <Link 
                                        href={breadcrumb.href}
                                        className='font-medium text-sm text-muted-foreground hover:text-gray-900'>
                                            {breadcrumb.name}
                                        </Link>
                                        {i !== BREADCRUMB.length - 1 ? (
                                            <svg 
                                                viewBox='0 0 20 20'
                                                fill='currentColor'
                                                aria-hidden='true'
                                                className='ml-2 h-5 w-5 flex-shrink-0 text-gray-300'>
                                                <path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' /> 
                                                </svg>
                                        ) : null}
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className='mt-4'>
                            <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>{product.name}</h1>
                        </div>

                        <section className='mt-4'>
                                <div className='flex items-center'>
                                    <p className='font-medium text-gray-900'>
                                        {formatPrice(product.price)}
                                    </p>

                                    <div className='ml-4 border-1 text-muted-foreground border-gray-300 pl-4'>
                                                {label}
                                    </div>
                                </div>

                                <div className='mt-4 space-y-6'>
                                    <p className='text-base text-muted-foreground'>
                                        {product.description}
                                    </p>
                                </div>

                                <div className='mt-6 flex items-center'>
                                    <Check aria-hidden='true' className='h-5 w-5 flex-shrink-0 text-green-500' />
                                        <p className='ml-2 text-sm text-muted-foreground'>
                                            Eligible for instant delivery
                                        </p>
                                </div>
                                {/* ADD TO CART PART */}
                                <div className='mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start'>
                                    <div>
                                        <div className='mt-10'>
                                            <AddToCartButton product={product} />
                                        </div>
                                        <div className='mt-6'>
                                            <div className='group inline-flex text-sm text-medium'>
                                                <Shield 
                                                    aria-hidden='true'
                                                    className='mr-2 h-5 w-5 flex-shrink-0 text-gray-400'
                                                /> 
                                                <span className='text-black hover:text-gray-700'>
                                                    Secure payment
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </section>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>

            <div className='mt-0 lg:col-start-1 lg:self-center'>
                    <div className='flex flex-col items-center'>
                         <MouseFlowImage urls={validUrls} title={product.name}/>
                    </div>
                   <div className=''>
                         <PlayerTrack track={validTrack} />
                   </div>
            </div>
        </div>
     </div>
    )
}

export default Page;



/*                        <audio controls>
                            <source src={validTrack[0]} type='audio/mpeg' />
                            Your browser does not support the audio element.
                        </audio> */