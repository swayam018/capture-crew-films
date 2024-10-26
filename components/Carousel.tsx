'use client'

import * as React from "react"
import { useEffect, useState, useCallback } from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Image from "next/image"
import coupleimage from '../public/images/ranveer-alia.jpg'


export function CarouselImage() {
  const [api, setApi] = React.useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index)
  }, [api])

  useEffect(() => {
    const timer = setInterval(() => {
      if (api) {
        const nextIndex = (current + 1) % count
        api.scrollTo(nextIndex)
      }
    }, 5000)

    return () => clearInterval(timer)
  }, [api, current, count])

  return (
    <Carousel
      setApi={setApi}
      className="w-full relative"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="border-none">
              <CardContent className="flex aspect-video items-center justify-center p-6">
                <Image
                  src={coupleimage}  // Add ?v=index to force unique src
                  fill
                  alt={`Couple image ${index + 1}`}
                  style={{ objectFit: 'cover' }} // Use style or Tailwind CSS
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors duration-200",
              current === index ? "bg-white" : "bg-gray-300"
            )}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </Carousel>
  )
}