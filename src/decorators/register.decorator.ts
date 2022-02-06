import 'reflect-metadata' 
import { DataHttpType } from './http.decorator'
import { Application, Request, Response } from 'express'
import { View } from '../views'
import Container from 'typedi'

interface RegisterArgs{
  controllers: any[],
  services: any[],
  context: Application
}

export function Register(obj: RegisterArgs): ClassDecorator{

  return function(target: Function){
    obj.services.map((s) => Container.get(s))
    obj.controllers.map((constructor) => {
      const keys = Reflect.getMetadataKeys(constructor)
      .filter((key: string) => {
        if(key.startsWith('router:')) 
          return key
      })
      const path = Reflect.getMetadata('custom:baseurl', constructor)
      const middlewares = Reflect.getMetadata('custom:middlewares', constructor)
      const instance = Container.get(constructor)
      const msg = `----------------[Controller: ${constructor.name}]----------------`
      console.log(`\x1b[34m${msg}\x1b[0m`)
      keys.map(async (key) => {
        const data: DataHttpType = Reflect.getMetadata(key, constructor)
        const fun = obj.context[data.method] as Function
        console.log(`\x1b[33m${data.method.toUpperCase()} ${path + data.url}\x1b[0m`)
        fun.apply(obj.context, [path + data.url, ...middlewares, ...data.middlewares, async (req: Request, res: Response) => {
          try{
            const result: any | View = await data.callback.apply(instance, [{
              request: (req as Request), 
              response: res,
              body: req.body, 
              params: req.params,
              query: req.query,
              file: (req as any)?.file,
              files: (req as any)?.files,
              headers: req.headers
            }])
            if(result instanceof View) res.render(result.view, result.data)
            else if(result) res.json(result)
          }catch(e){
            res.status(e.httpStatus || 500).json({
              status: e.httpStatus || 500,
              title: e.title,
              message: e.detail || 'Internal Server Error.'
            }) 
          }
        }])
      })
      console.log(`\x1b[34m${'-'.repeat(msg.length)}\x1b[0m`)
    })
  }
}