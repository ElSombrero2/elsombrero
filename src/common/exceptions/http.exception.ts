export class HttpException<T>{

  private _object: T

  private _code: number
  private _message: string

  public get object(): T{ return this._object || undefined}
  public get code(): number{ return this._code }
  public get message(): string{ return this._message }

  public constructor(object?: T, code: number = 500, message: string = 'Internal Server Error'){
    this._object = object
    this._code = code
    this._message = message
  }

  public setStatus(status: number): HttpException<T>{ 
    this._code = status
    return this 
  }

  public setMessage(message: string): HttpException<T>{ 
    this._message = message
    return this 
  }
}