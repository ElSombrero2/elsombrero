import { HttpHandler } from './../handler.interface';
import { Service } from 'typedi';
import { IncomingHttpHeaders } from 'http2';
import 'reflect-metadata'
import { Request, Response } from 'express'

export interface HttpContext{
  request: Request 
  response: Response,
  body: any, 
  params: any,
  query: any,
  file: any,
  files: any[],
  headers: IncomingHttpHeaders,
  next?: Function
}


export function Controller(url?: string, ...arg: Function[]): ClassDecorator{
  const service = Service()
  return function(constructor: any){
    service(constructor)
    let path = url || ''
    Reflect.defineMetadata('custom:baseurl', path, constructor)
    Reflect.defineMetadata('custom:middlewares', arg, constructor)
  }
}