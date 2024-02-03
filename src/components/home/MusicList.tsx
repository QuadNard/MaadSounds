"use client";

import React, { Suspense } from 'react'
import ProductReel from '../ProductReel';

const MusicList: React.FC = () => {
  return (
    <div className="overflow-hidden px-4 pb-20 pt-52 md:px-10">
      <section className="mx-auto max-w-1180">
        <div>
          <Suspense fallback={<div>Loading...</div>}>
          <ProductReel query={{ sort: 'desc', limit: 4 }} href='/products' title='brand new' />
          </Suspense>
        </div>
      </section>
    </div>
  )
}

export default MusicList
