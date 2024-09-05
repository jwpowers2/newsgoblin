import type { LoaderArgs } from "@remix-run/node";
import { Form, useLoaderData, NavLink } from '@remix-run/react';
import Ticker from "~/components/ticker";
import { CarouselPage } from "~/components/Carousel";

type Result = {
    topic: string,
    data: any
}

export async function loader({ request,params }: LoaderArgs) {
    const query = params?.query;
    let url = `http://localhost:5173/api/ticker/${query}`
    const response = await fetch(url)
    
    const result = await response.json();
    const parsed = JSON.parse(result.data)
    let out:Result = {data:parsed, topic: query}
    console.log(out);
    return out;
}

export default function Results() {
    const data = useLoaderData<typeof loader>();
    return (
        <div className="mt-10">
            
            <Ticker topic={data.topic}/>
            <div className="flex justify-center mt-2">
            <p>{data.data != null && <CarouselPage data={data.data} />}</p>
              
            </div>
        </div>
    )
}