"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MasterDataContext } from '@/types/MasterContextType';
import React, { ReactNode, useState,createContext, Children,useEffect } from 'react'

//Context = cara share data ke banyak komponen tanpa props
  const defaultContextValue: MasterDataContext = {
    movies: [],

  }
export const MasterContext = createContext<MasterDataContext>(defaultContextValue);

interface MasterContextProp {
  children: ReactNode;
}

const API_KEY = "c7cf1258a5aa723e8a98f08f639e86b6";
const BASE_URL = "https://api.themoviedb.org/3";

const MainContext: React.FC<MasterContextProp>= ({ children }) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const [movieOrTv, setMovieOrTv] = useState<string>("movie");
  const [trendingOptions, setTrendingOptions] = useState<string>("top_rated");

  useEffect( () => {
      const fetchData = async () => {
        setLoading(true)
        try {
          const response = await fetch(`${BASE_URL}/${movieOrTv}/${trendingOptions}?api_key=${API_KEY}`)
          if (!response.ok) {
            const errorText = await response.text();
            console.error("Response Error:", errorText)
            throw new Error(`Network response was not ok: ${response.statusText}`)
          }
        

          const data = await response.json()
          setMovies(data.results)
        }
        catch (error) {
          setError(error as Error)  
        }
        finally {
          setLoading(false)
        }
        
      };
    }, [movieOrTv, trendingOptions]);
  
  //const response = await fetch(`${BASE_URL}/${movieOrTv}/${trendingOptions}?api_key=${API_KEY}`)
  const contextValue: MasterDataContext = {
    movies,
  }

  return (
      <MasterContext.Provider value={defaultContextValue}>
          {children}
      </MasterContext.Provider>
     
  )
}

export default MainContext