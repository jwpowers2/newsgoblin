import * as React from "react"

import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import { Link, useNavigate } from "@remix-run/react";

export function CarouselPage(props:any) {
  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {props.data.length > 0 &&
        <>
        {props.data.map((article:any, index:any) => (
          <CarouselItem key={index}>
            <div className="p-1">
                <Link to={article.url} target="_blank">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="grid grid-rows-2">
                        <div>
                            <img src={article.urlToImage}/>
                            <span className=" font-semibold">{article.title}</span>
                        </div>
                        <div className="mt-1">
                            <span>{article.description}</span>
                        </div>
                    </div>
                </CardContent>
              </Card>
              </Link>
            </div>
          </CarouselItem>
        ))}
        </>
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
