import { Service } from "typedi"

export function Injectable(): ClassDecorator{
  const service = Service()
  return function(constructor: Function){
    service(constructor)
  }
}