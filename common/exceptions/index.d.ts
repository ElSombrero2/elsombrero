export class HttpException<T>{

  private _object: T | unknown

  private _code: number
  private _message: string

  public get object(): T
  public get code(): number
  public get message(): string

  public constructor(object: T, code: number, message: string)
  public setStatus(status: number): HttpException<T>

  public setMessage(message: string): HttpException<T>
}

export class BadRequestException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class UnauthorizedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class PaymentRequiredException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class ForbiddenException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class NotFoundException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class MethodNotAllowedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class NotAcceptableException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class ProxyAuthenticationRequiredException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class RequestTimeoutException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class ConflictException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class GoneException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class LengthRequiredException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class PreconditionFailedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class RequestEntityTooLargeException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class RequestURITooLongException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class UnsupportedMediaTypeException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class RequestedRangeUnsatisfiableException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class ExpectationFailedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class ImATeapotException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class MisdirectedRequestException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class UnprocessableEntityException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class LockedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class MethodFailureException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class TooEarlyException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class 	UpgradeRequiredException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class PreconditionRequiredException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class TooManyRequestsException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class RequestHeaderFieldsTooLargeException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class RetryWithException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}
export class BlockedByWindowsParentalControlsException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class UnavailableForLegalReasonsException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class UnrecoverableErrorException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class NoResponseException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class SSLCertificateErrorException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class SSLCertificateRequiredException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class HTTPRequestSentToHTTPSPortException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class TokenExpiredOrInvalidException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}


export class 	ClientClosedRequestException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}


export class InternalServerErrorException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class 	NotImplementedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class BadGatewayException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class 	ServiceUnavailableException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class GatewayTimeoutException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class 	HTTPVersionNotSupportedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class VariantAlsoNegotiatesException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class 	InsufficientStorageException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class 	LoopDetectedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class BandwidthLimitExceededException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class NotExtendedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}


export class 	NetworkAuthenticationRequiredException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class 	UnknownErrorException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}


export class WebServerIsDownException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class ConnectionTimedOutException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}


export class 	OriginIsUnreachableException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class ATimeoutOccurredException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}


export class 	SSLHandshakeFailedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class 	InvalidSSLCertificateException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}

export class 	RailgunErrorException<T> extends HttpException<T>{
  constructor(object?: T, message?: string)
}