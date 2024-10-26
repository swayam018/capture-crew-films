import Image from 'next/image'
import React from 'react'
import Header from './Header'
import coupleimage from '../public/images/ranveer-alia.jpg';
import { CarouselImage } from './Carousel'
import agami from '../public/images/agami.jpg';

function HeroSection() {
  return (
    <div className=' w-full max-h-screen'>
      <Header />
      <div className=' w-full h-screen max-h-screen'>
      <Image src={coupleimage} alt='Couple image' style={{objectFit:"contain"}}   /> 
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-25" />
      <div
        className="absolute inset-0 opacity-50 mix-blend-overlay">
        <svg viewBox="0 0 460 200">
          <filter id='noiseFilter'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='2.9' >
              <animate
                attributeName='seed'
                dur='5s'
                values='0;25;0'
                repeatCount='indefinite'
              />
            </feTurbulence>
          </filter>
          <rect width='100%' height='100%' filter='url(#noiseFilter)' />
        </svg>
      </div>
    </div>
  )
}

export default HeroSection