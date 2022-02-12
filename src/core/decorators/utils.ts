import { Application, Request, Response } from "express"
import { HttpContext } from "./controller.decorator"

export interface RegisterArgs{
  controllers: Function[]
  services: Function[]
  context: Application
  handlers: Function[]
}

export function createContext(req: Request, res: Response, next?: Function): HttpContext{
  return {
    request: req, 
    response: res,
    body: req.body, 
    params: req.params,
    query: req.query,
    file: (req as any)?.file,
    files: (req as any)?.files,
    headers: req.headers,
    next: next
  }
} 

export function createMiddleWares(middlewares): any[]{
  const arr = []
  middlewares.map((Handler) => {
    arr.push(async (req: Request, res: Response, next: Function) => {
      try{
        const m = new Handler()
        await m.handle(createContext(req, res, next))
      }catch(e){
        res.status(e.code || 500).json({
          status: e.code || 500,
          data:e.object,
          message: e.message || 'Internal Server Error.'
        }) 
      }
    })
  })
  return arr
}