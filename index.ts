import { HttpException } from "./common/exceptions"

const e = new HttpException<any>(null, 85, 'Hello World')

console.log(e.object)