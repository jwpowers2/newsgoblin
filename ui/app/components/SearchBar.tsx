import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { useLoaderData, useNavigate } from '@remix-run/react';
import { useState, useEffect } from "react";
import { toast } from "~/components/ui/use-toast";
import { Combobox } from "./ComboBox";



export function SearchBar(props:any){

    const userId = useLoaderData();
    let navigate = useNavigate();
    const [queryString, setQueryString] = useState("")



      const renderToast = (title: string, description: string, color: string) => {
        switch(color){
          case "success":
            color = "grid gap-1 success group border-green-500 bg-green-500 text-neutral-50"
            break;
          case "fail":
            color = "grid gap-1 destructive group border-red-500 bg-red-500 text-neutral-50 dark:border-red-900 dark:bg-red-900 dark:text-neutral-50"
            break;
          case "default":
            color = "grid gap-1 border bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50"
            break;
          default:
            color = "grid gap-1 border bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50"
        }
        props.func(color)
        toast({
          title,
          description
        })
      }
      
      useEffect(()=>{
       
        if (queryString === ""){
          navigate(`/search/all`)
        } else {
          navigate(`/search/${queryString}`)
        }
        
      },[queryString])
      
    return (
      <div className="grid-flow-row auto-rows-max xs:w-[150px] sm:w-[200px] md:w-[300px] lg:w-[300px] xl:w-[300px] 2xl:w-[500px] mt-4 p-0 justify-right lg:pt-0 xl:pt-0 2xl:pt-0">
        <div className="grid grid-cols-6">
        
          <div className="col-span-6">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search"  value={queryString} onChange={(e)=>setQueryString(e.target.value)} className="block w-72 p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder={props.placeholder} required />
               
        </div>
              
          </div>
          
        </div>
          
      </div>
    )
}