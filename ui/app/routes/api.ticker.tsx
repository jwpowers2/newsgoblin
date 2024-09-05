import { json } from '@remix-run/node';
import { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node';
import redisClient from "../redis-config.server";
import {RedisKey} from 'ioredis';
// need method to fetch from the redis DB


async function tickerData():Promise<any> {

}


export async function loader({
  }: LoaderFunctionArgs) {
    let ticker = await redisClient.get('ticker')
    console.log(ticker)
    return json({data:ticker})
  }