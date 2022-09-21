import { HttpException } from './http.exception';
export declare class BadRequestException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class UnauthorizedException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class PaymentRequiredException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class ForbiddenException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class NotFoundException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class MethodNotAllowedException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class NotAcceptableException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class ProxyAuthenticationRequiredException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class RequestTimeoutException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class ConflictException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class GoneException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class LengthRequiredException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class PreconditionFailedException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class RequestEntityTooLargeException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class RequestURITooLongException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class UnsupportedMediaTypeException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class RequestedRangeUnsatisfiableException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class ExpectationFailedException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class ImATeapotException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class MisdirectedRequestException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class UnprocessableEntityException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class LockedException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class MethodFailureException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class TooEarlyException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class UpgradeRequiredException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class PreconditionRequiredException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class TooManyRequestsException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class RequestHeaderFieldsTooLargeException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class RetryWithException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class BlockedByWindowsParentalControlsException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class UnavailableForLegalReasonsException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class UnrecoverableErrorException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class NoResponseException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class SSLCertificateErrorException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class SSLCertificateRequiredException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class HTTPRequestSentToHTTPSPortException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class TokenExpiredOrInvalidException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class ClientClosedRequestException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class InternalServerErrorException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class NotImplementedException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class BadGatewayException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class ServiceUnavailableException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class GatewayTimeoutException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class HTTPVersionNotSupportedException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class VariantAlsoNegotiatesException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class InsufficientStorageException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class LoopDetectedException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class BandwidthLimitExceededException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class NotExtendedException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class NetworkAuthenticationRequiredException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class UnknownErrorException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class WebServerIsDownException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class ConnectionTimedOutException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class OriginIsUnreachableException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class ATimeoutOccurredException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class SSLHandshakeFailedException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class InvalidSSLCertificateException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
export declare class RailgunErrorException<T> extends HttpException<T> {
    constructor(object?: T, message?: string);
}
