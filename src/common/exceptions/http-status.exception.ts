import { HttpException } from './http.exception';

export class BadRequestException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 400, message || 'Bad Request')
  }
}

export class UnauthorizedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 401, message || 'Unauthorized')
  }
}

export class PaymentRequiredException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 402, message || 'Payment Required')
  }
}

export class ForbiddenException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 403, message || 'Forbidden')
  }
}

export class NotFoundException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 404, message || 'Not Found')
  }
}

export class MethodNotAllowedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 405, message || 'Method Not Allowed')
  }
}

export class NotAcceptableException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 406, message || 'Not Acceptable')
  }
}

export class ProxyAuthenticationRequiredException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 407, message || 'Proxy Authentication Required')
  }
}

export class RequestTimeoutException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 408, message || 'Request Time-out')
  }
}

export class ConflictException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 409, message || 'Conflict')
  }
}

export class GoneException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 410, message || 'Gone')
  }
}

export class LengthRequiredException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 411, message || 'Length Required')
  }
}

export class PreconditionFailedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 412, message || 'Precondition Failed')
  }
}

export class RequestEntityTooLargeException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 413, message || 'Request Entity Too Large')
  }
}

export class RequestURITooLongException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 414, message || 'Request-URI Too Long')
  }
}

export class UnsupportedMediaTypeException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 415, message || 'Unsupported Media Type')
  }
}

export class RequestedRangeUnsatisfiableException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 416, message || 'Requested range unsatisfiable')
  }
}

export class ExpectationFailedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 417, message || 'Expectation failed')
  }
}

export class ImATeapotException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 418, message || 'I’m a teapot')
  }
}

export class MisdirectedRequestException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 421, message || 'Bad mapping / Misdirected Request')
  }
}

export class UnprocessableEntityException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 422, message || 'Unprocessable entity')
  }
}

export class LockedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 423, message || 'Locked')
  }
}

export class MethodFailureException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 424, message || 'Method failure')
  }
}

export class TooEarlyException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 425, message || 'Too Early')
  }
}

export class 	UpgradeRequiredException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 426, message || 'Upgrade Required')
  }
}

export class PreconditionRequiredException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 428, message || 'Precondition Required')
  }
}

export class TooManyRequestsException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 429, message || 'Too Many Requests')
  }
}

export class RequestHeaderFieldsTooLargeException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 431, message ||'Request Header Fields Too Large')
  }
}

export class RetryWithException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 449, message || 'Retry With')
  }
}
export class BlockedByWindowsParentalControlsException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 450, message || 'Blocked by Windows Parental Controls')
  }
}

export class UnavailableForLegalReasonsException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 451, message || 'Unavailable For Legal Reasons')
  }
}

export class UnrecoverableErrorException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 456, message || 'Unrecoverable Error')
  }
}

export class NoResponseException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 444, message || 'No Response')
  }
}

export class SSLCertificateErrorException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 495, message || 'SSL Certificate Error')
  }
}

export class SSLCertificateRequiredException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 496, message || 'SSL Certificate Required')
  }
}

export class HTTPRequestSentToHTTPSPortException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 497, message || 'HTTP Request Sent to HTTPS Port')
  }
}

export class TokenExpiredOrInvalidException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 498, message || 'Token expired or invalid')
  }
}


export class 	ClientClosedRequestException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 499, message || 'Client Closed Request')
  }
}


export class InternalServerErrorException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 500, message || 'Internal Server Error')
  }
}

export class 	NotImplementedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 501, message || 'Not Implemented')
  }
}

export class BadGatewayException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 502, message || 'Bad Gateway')
  }
}

export class 	ServiceUnavailableException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 503, message || 'Service Unavailable')
  }
}

export class GatewayTimeoutException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 504, message || 'Gateway Time-out')
  }
}

export class 	HTTPVersionNotSupportedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 505, message || 'HTTP Version not supported')
  }
}

export class VariantAlsoNegotiatesException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 506, message || 'Variant Also Negotiates')
  }
}

export class 	InsufficientStorageException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 507, message || 'Insufficient storage')
  }
}

export class 	LoopDetectedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 508, message || 'Loop detected')
  }
}

export class BandwidthLimitExceededException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 509, message || 'Bandwidth Limit Exceeded')
  }
}

export class NotExtendedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 510, message || 'Not extended')
  }
}


export class 	NetworkAuthenticationRequiredException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 511, message || 'Network authentication required')
  }
}

export class 	UnknownErrorException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 520, message || 'Unknown Error')
  }
}


export class WebServerIsDownException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 521, message || 'Web Server Is Down')
  }
}

export class ConnectionTimedOutException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 522, message || 'Connection Timed Out')
  }
}


export class 	OriginIsUnreachableException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 523, message || 'Origin Is Unreachable')
  }
}

export class ATimeoutOccurredException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 524, message || 'A Timeout Occurred')
  }
}


export class 	SSLHandshakeFailedException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 525, message || 'SSL Handshake Failed')
  }
}

export class 	InvalidSSLCertificateException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 526, message || 'Invalid SSL Certificate')
  }
}

export class 	RailgunErrorException<T> extends HttpException<T>{
  constructor(object?: T, message?: string){
    super(object, 527, message  || 'Railgun Error')
  }
}