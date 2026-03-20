import React from 'react'
import Image from "next/image";
import { Movie } from '@/types/MovieType';

interface BannerSingleProps{
  movie: Movie
}
const BannerSingle: React.FC<BannerSingleProps> = () => {
  return (
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <Image
            width={500}
            height={100}
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full"
            alt=""
          />
          </div>
    </div>
  )
}

export default BannerSingle