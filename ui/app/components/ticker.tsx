//import type { LoaderArgs } from "@remix-run/node";
import { Form, useLoaderData, NavLink } from '@remix-run/react';
import {useEffect, useState} from 'react';
  



export default function Ticker(props) {
    //const data = useLoaderData<typeof loader>();
    let [data, setData] = useState<any>([{title:""}])
    let [tickerData, setTickerData] = useState<string>("")
    let [category, setCategory] = useState<string>(props.topic);
    let [counter, setCounter] = useState<number>(0)
    const getTickerData = async(categoryName:string)=>{
        let url = `http://localhost:5173/api/ticker/${categoryName}`
        const response = await fetch(url)
        const result = await response.json();
        return JSON.parse(result.data)
    }
    /*
    useEffect(()=>{
        
        getTickerData(props.topic)
        .then(data=> {
            setData(data)
            console.log(data[counter].title)
            const id = setInterval(()=>{
                setCounter(counter += 1);
                if (counter >= data.length) {
                    setCounter(0)
                } else {
                    setTickerData(data[counter].title)
                }
                
            },3000);
            //count = data.length;
        })
        .catch(e=>console.log("error loading ticker data"))
    },[])
    */
    useEffect(()=>{
        setCounter(0)
        setData([{title:""}])
        setTickerData("")
        getTickerData(props.topic)
        .then(data=> {
            setData(data)
            setTickerData(data[counter].title)
            //count = data.length;
        })
        .catch(e=>console.log("error loading ticker data"))
    },[props.topic])
    /*
    useEffect(()=>{
      
        const id = setInterval(()=>{
            setCounter(counter += 1);
            if (counter >= data.length) {
                setCounter(0)
            } else {
                setTickerData(data[counter].title)
            }
            
        },3000);
        return () => {
            clearTimeout(id)
        }
    },[])
    */
   useEffect(()=>{
        if (counter < data.length-1){
            setTickerData(data[counter].title)
        } else {
            setCounter(0)
        }
        setTickerData(data[counter].title)
   },[counter])
   useEffect(()=>{
    getTickerData(props.topic)
    .then(data=> {
        setData(data)
        setTickerData(data[counter].title)
        //count = data.length;
    })
    .catch(e=>console.log("error loading ticker data"))
        const id = setInterval(()=>{
            
            setCounter(counter => counter + 1)
           
        },3000)
        return () => {
            clearTimeout(id)
        }
   },[])
    return (
        <div className="mt-12 h-16">
          
            <div className="flex justify-center mt-2">
              
                
            {data && 
                <span className="animate-fade-in-right">{tickerData}</span>
            }
            </div>
        </div>
    )
}