import { HttpContext } from './controller.decorator';
import { HttpHandler } from './../handler.interface';
import 'reflect-metadata' 
import { DataHttpType } from './http.decorator'
import { Application, Request, Response } from 'express'
import { View } from '../views'
import Container from 'typedi'
import { createContext, createMiddleWares, RegisterArgs } from './utils';

export function Register(obj: RegisterArgs): ClassDecorator{
  obj.handlers.map((handler: any) => {
    obj.context.use((req, res, next) => {
      const m = new handler()
      m.handle(createContext(req, res, next))
    })
  })
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
        fun.apply(obj.context, [(path + data.url !== '') ? path + data.url : '/', 
          ...createMiddleWares(middlewares), ...createMiddleWares(data.middlewares), 
          async (req: Request, res: Response, next: Function) => {
          try{
            const result: any | View = await data.callback.apply(instance, [createContext(req, res, next)])
            if(result?.constructor.name === 'HttpResponse') res.status(result.code).json(result.data)
            else if(result instanceof View) res.render(result.view, result.data)
            else res.json(result)
          }catch(e){
            res.status(e.code || 500).json({
              status: e.code || 500,
              data:e.object,
              message: e.message || 'Internal Server Error.'
            }) 
          }
        }])
      })
      console.log(`\x1b[34m${'-'.repeat(msg.length)}\x1b[0m`)
    })
  }
}