"use client";

import React, { useEffect, useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from './Button';
import LinkTree from './LinkTree';
import ProductReel from './ProductReel';
import { Typewriter } from './TypeWriter';
import { setTimeout } from 'timers';

const HomePage: React.FC = () => {
  const [showProducts, setShowProducts] = useState(true);

  const handleButtonClick = () => {
    setShowProducts(false);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  
  
return (
    <>
     <MaxWidthWrapper>
        <div className='py-20 mx-auto  text-center flex flex-col items-center max-w-3xl'>
           <h1 className="text-4xl  font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-[#9442FE] to-[#3378FF] bg-clip-text text-transparent">
         A Radically original composition
      </h1>
      {showProducts ? (
        <AnimatePresence>
          <motion.div
            transition={{ duration: 3 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            <div className="mt-6 flex flex-col  text-lg max-w-prose text-muted-foreground text-[#383732]">
              <strong className="text-white">
                {" "}
                Producer/ Beat Maker from US,{" "}
              </strong>{" "}
              <Typewriter
                strings={"Check out my latest Beats and recent releases. "}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button onClick={handleButtonClick} variant="lavender">
                Our quality &rarr;
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          {isVisible && (
            <>
              <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LinkTree />
            </motion.section>
            </>
          )}
        </AnimatePresence>
      )}
        </div>
        {isVisible && !showProducts && <ProductReel query={{ sort: 'desc', limit: 4 }} href='/products' title='brand new' />}
     </MaxWidthWrapper>
     <MaxWidthWrapper>
    <footer>
      hello
    </footer>
     </MaxWidthWrapper>
    </>
  )
}

export default HomePage;


