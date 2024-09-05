import { json } from '@remix-run/node';
import { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node';
import redisClient from "../redis-config.server";
import {RedisKey} from 'ioredis';
// need method to fetch from the redis DB


async function tickerData():Promise<any> {

}


export async function loader({
    params,
  }: LoaderFunctionArgs) {
    console.log(params.media)
    let param = "all"
    if (params.media !== undefined) param = params.media;
    let ticker = await redisClient.get(param)
    console.log(ticker)
    const response = {"data":"good"}
    return json({data:ticker})
  }
