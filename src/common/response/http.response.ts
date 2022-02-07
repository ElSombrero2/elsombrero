export class HttpResponse<T>{
  private _data: T
  private _code: number

  public constructor(object?: T, code: number = 200){
    this._data = object ||undefined
    this._code = code
  }

  public get data(): T{ return this._data }
  public get code(): number{ return this._code }

  public setStatus(status: number): HttpResponse<T>{ 
    this._code = status
    return this 
  }

  public static StatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ContentDifferent: 210,
    IMUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    SwitchProxy: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    TooManyRedirects: 310
  }
  
}