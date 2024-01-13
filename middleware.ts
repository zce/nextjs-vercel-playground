import type { NextMiddleware } from 'next/server'

export const middleware: NextMiddleware = async request => {
  return Response.json(process.env)
}
