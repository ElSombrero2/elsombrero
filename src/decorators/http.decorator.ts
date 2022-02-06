import 'reflect-metadata'

export interface DataHttpType{
  url: string
  callback: Function
  method: string
  middlewares: Function[]
}

const value = (url: string, callback: Function, method: string, middlewares: Function[]) => {
  return { url, callback, method, middlewares: [...middlewares] }
}

export function Get(url: string, ...args: Function[]): MethodDecorator{
  return function(target: Object, key: string | symbol){
    Reflect.defineMetadata(`router:${key.toString()}`, 
    value(url, target[key], 'get', args), 
    target.constructor)
  }
}

export function Post(url: string, ...args: Function[]): MethodDecorator{
  return function(target: any, key: string | symbol){
    Reflect.defineMetadata(`router:${key.toString()}`, 
    value(url, target[key], 'post', args), 
    target.constructor)
  }
}

export function Put(url: string, ...args: Function[]): MethodDecorator{
  return function(target: any, key: string | symbol){
    Reflect.defineMetadata(`router:${key.toString()}`, 
    value(url, target[key], 'put', args), 
    target.constructor)
  }
}

export function Patch(url: string, ...args: Function[]): MethodDecorator{
  return function(target: any, key: string | symbol){
    Reflect.defineMetadata(`router:${key.toString()}`, 
    value(url, target[key], 'patch', args), 
    target.constructor)
  }
}

export function Delete(url: string, ...args: Function[]): MethodDecorator{
  return function(target: any, key: string | symbol){
    Reflect.defineMetadata(`router:${key.toString()}`, 
    value(url, target[key], 'delete', args), 
    target.constructor)
  }
}