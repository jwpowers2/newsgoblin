import Redis from 'ioredis'

const redisClient = new Redis(`redis://localhost:6379`)

export default redisClient