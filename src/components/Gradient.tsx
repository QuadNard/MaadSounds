'use client'

import React, { useEffect } from 'react'


const Gradients = () => {
  useEffect(() => {
    const initializeGradient = async () => {
      // Dynamically import the Gradient class when needed
      const { Gradient } = await import('whatamesh');

      // Initialize the Gradient instance
      const gradient = new Gradient();
      gradient.initGradient("#gradient-canvas");
    };

    // Call the initialization function when the component is mounted
    initializeGradient();
  }, []);
  return (
  <>
  <canvas id="gradient-canvas" ></canvas>
  </>
  )
}

export default Gradients
