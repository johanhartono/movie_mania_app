/* eslint-disable react/jsx-no-undef */
import React, { useContext } from "react";
import BannerSingle from "../BannerSingle/BannerSingle";
import { MasterContext } from "@/context/MasterContext";

const Banner = () => {
  const { movies } = useContext(MasterContext)
  console.log(movies)
  
  return (
    <>
      <div className="carousel w-full">
        {movies.map((movie)=> {
          return (
            <BannerSingle movie={movie} key={movie.id}/>
          )
        })}
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};

export default Banner;
