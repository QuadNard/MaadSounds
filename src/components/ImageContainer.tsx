
import Image from 'next/image';
import CustomImage from './CustomImage';

interface ImageSliderProps {
    urls: string[];
}



const ImageContainer = ({ urls }: ImageSliderProps) => {
  
  
return (
<>
  {urls.map((url, i) => (
    <CustomImage key={i} 
      src={url }
      className='rounded-md'
    />
  ))}
</>
  )
}

export default ImageContainer


/* 
    <span className='group aspect-square  w-[90px] h-[142px] sm:w-[160px] sm:h-[200px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group'>
        {urls.map((url, i) => (
          <div className='-z-10 relative h-full w-full' key={i}>
            
            <Image
            fill
            src={url}   
            loading='eager'
            className='-z-10 h-full w-full object-cover inset-0 rounded-[50px] opacity-80 group-hover:opacity-100 p-2'
            alt='Product Image' 
            />
          </div>
        ))}
    </span>

*/