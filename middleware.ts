import { NextResponse } from 'next/server'
import type { NextMiddleware } from 'next/server'

export const middleware: NextMiddleware = async request => {
  if (request.nextUrl.pathname.startsWith('/mw-env')) {
    return Response.json(process.env)
  }
  return NextResponse.next()
}
