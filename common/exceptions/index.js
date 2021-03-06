"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkAuthenticationRequiredException = exports.NotExtendedException = exports.BandwidthLimitExceededException = exports.LoopDetectedException = exports.InsufficientStorageException = exports.VariantAlsoNegotiatesException = exports.HTTPVersionNotSupportedException = exports.GatewayTimeoutException = exports.ServiceUnavailableException = exports.BadGatewayException = exports.NotImplementedException = exports.InternalServerErrorException = exports.ClientClosedRequestException = exports.TokenExpiredOrInvalidException = exports.HTTPRequestSentToHTTPSPortException = exports.SSLCertificateRequiredException = exports.SSLCertificateErrorException = exports.NoResponseException = exports.UnrecoverableErrorException = exports.UnavailableForLegalReasonsException = exports.BlockedByWindowsParentalControlsException = exports.RetryWithException = exports.RequestHeaderFieldsTooLargeException = exports.TooManyRequestsException = exports.PreconditionRequiredException = exports.UpgradeRequiredException = exports.TooEarlyException = exports.MethodFailureException = exports.LockedException = exports.UnprocessableEntityException = exports.MisdirectedRequestException = exports.ImATeapotException = exports.ExpectationFailedException = exports.RequestedRangeUnsatisfiableException = exports.UnsupportedMediaTypeException = exports.RequestURITooLongException = exports.RequestEntityTooLargeException = exports.PreconditionFailedException = exports.LengthRequiredException = exports.GoneException = exports.ConflictException = exports.RequestTimeoutException = exports.ProxyAuthenticationRequiredException = exports.MethodNotAllowedException = exports.NotFoundException = exports.ForbiddenException = exports.PaymentRequiredException = exports.UnauthorizedException = exports.BadRequestException = exports.NotAcceptableException = void 0;
exports.HttpException = exports.RailgunErrorException = exports.InvalidSSLCertificateException = exports.SSLHandshakeFailedException = exports.ATimeoutOccurredException = exports.OriginIsUnreachableException = exports.ConnectionTimedOutException = exports.WebServerIsDownException = exports.UnknownErrorException = void 0;
var http_status_exception_1 = require("./http-status.exception");
Object.defineProperty(exports, "NotAcceptableException", { enumerable: true, get: function () { return http_status_exception_1.NotAcceptableException; } });
Object.defineProperty(exports, "BadRequestException", { enumerable: true, get: function () { return http_status_exception_1.BadRequestException; } });
Object.defineProperty(exports, "UnauthorizedException", { enumerable: true, get: function () { return http_status_exception_1.UnauthorizedException; } });
Object.defineProperty(exports, "PaymentRequiredException", { enumerable: true, get: function () { return http_status_exception_1.PaymentRequiredException; } });
Object.defineProperty(exports, "ForbiddenException", { enumerable: true, get: function () { return http_status_exception_1.ForbiddenException; } });
Object.defineProperty(exports, "NotFoundException", { enumerable: true, get: function () { return http_status_exception_1.NotFoundException; } });
Object.defineProperty(exports, "MethodNotAllowedException", { enumerable: true, get: function () { return http_status_exception_1.MethodNotAllowedException; } });
Object.defineProperty(exports, "ProxyAuthenticationRequiredException", { enumerable: true, get: function () { return http_status_exception_1.ProxyAuthenticationRequiredException; } });
Object.defineProperty(exports, "RequestTimeoutException", { enumerable: true, get: function () { return http_status_exception_1.RequestTimeoutException; } });
Object.defineProperty(exports, "ConflictException", { enumerable: true, get: function () { return http_status_exception_1.ConflictException; } });
Object.defineProperty(exports, "GoneException", { enumerable: true, get: function () { return http_status_exception_1.GoneException; } });
Object.defineProperty(exports, "LengthRequiredException", { enumerable: true, get: function () { return http_status_exception_1.LengthRequiredException; } });
Object.defineProperty(exports, "PreconditionFailedException", { enumerable: true, get: function () { return http_status_exception_1.PreconditionFailedException; } });
Object.defineProperty(exports, "RequestEntityTooLargeException", { enumerable: true, get: function () { return http_status_exception_1.RequestEntityTooLargeException; } });
Object.defineProperty(exports, "RequestURITooLongException", { enumerable: true, get: function () { return http_status_exception_1.RequestURITooLongException; } });
Object.defineProperty(exports, "UnsupportedMediaTypeException", { enumerable: true, get: function () { return http_status_exception_1.UnsupportedMediaTypeException; } });
Object.defineProperty(exports, "RequestedRangeUnsatisfiableException", { enumerable: true, get: function () { return http_status_exception_1.RequestedRangeUnsatisfiableException; } });
Object.defineProperty(exports, "ExpectationFailedException", { enumerable: true, get: function () { return http_status_exception_1.ExpectationFailedException; } });
Object.defineProperty(exports, "ImATeapotException", { enumerable: true, get: function () { return http_status_exception_1.ImATeapotException; } });
Object.defineProperty(exports, "MisdirectedRequestException", { enumerable: true, get: function () { return http_status_exception_1.MisdirectedRequestException; } });
Object.defineProperty(exports, "UnprocessableEntityException", { enumerable: true, get: function () { return http_status_exception_1.UnprocessableEntityException; } });
Object.defineProperty(exports, "LockedException", { enumerable: true, get: function () { return http_status_exception_1.LockedException; } });
Object.defineProperty(exports, "MethodFailureException", { enumerable: true, get: function () { return http_status_exception_1.MethodFailureException; } });
Object.defineProperty(exports, "TooEarlyException", { enumerable: true, get: function () { return http_status_exception_1.TooEarlyException; } });
Object.defineProperty(exports, "UpgradeRequiredException", { enumerable: true, get: function () { return http_status_exception_1.UpgradeRequiredException; } });
Object.defineProperty(exports, "PreconditionRequiredException", { enumerable: true, get: function () { return http_status_exception_1.PreconditionRequiredException; } });
Object.defineProperty(exports, "TooManyRequestsException", { enumerable: true, get: function () { return http_status_exception_1.TooManyRequestsException; } });
Object.defineProperty(exports, "RequestHeaderFieldsTooLargeException", { enumerable: true, get: function () { return http_status_exception_1.RequestHeaderFieldsTooLargeException; } });
Object.defineProperty(exports, "RetryWithException", { enumerable: true, get: function () { return http_status_exception_1.RetryWithException; } });
Object.defineProperty(exports, "BlockedByWindowsParentalControlsException", { enumerable: true, get: function () { return http_status_exception_1.BlockedByWindowsParentalControlsException; } });
Object.defineProperty(exports, "UnavailableForLegalReasonsException", { enumerable: true, get: function () { return http_status_exception_1.UnavailableForLegalReasonsException; } });
Object.defineProperty(exports, "UnrecoverableErrorException", { enumerable: true, get: function () { return http_status_exception_1.UnrecoverableErrorException; } });
Object.defineProperty(exports, "NoResponseException", { enumerable: true, get: function () { return http_status_exception_1.NoResponseException; } });
Object.defineProperty(exports, "SSLCertificateErrorException", { enumerable: true, get: function () { return http_status_exception_1.SSLCertificateErrorException; } });
Object.defineProperty(exports, "SSLCertificateRequiredException", { enumerable: true, get: function () { return http_status_exception_1.SSLCertificateRequiredException; } });
Object.defineProperty(exports, "HTTPRequestSentToHTTPSPortException", { enumerable: true, get: function () { return http_status_exception_1.HTTPRequestSentToHTTPSPortException; } });
Object.defineProperty(exports, "TokenExpiredOrInvalidException", { enumerable: true, get: function () { return http_status_exception_1.TokenExpiredOrInvalidException; } });
Object.defineProperty(exports, "ClientClosedRequestException", { enumerable: true, get: function () { return http_status_exception_1.ClientClosedRequestException; } });
Object.defineProperty(exports, "InternalServerErrorException", { enumerable: true, get: function () { return http_status_exception_1.InternalServerErrorException; } });
Object.defineProperty(exports, "NotImplementedException", { enumerable: true, get: function () { return http_status_exception_1.NotImplementedException; } });
Object.defineProperty(exports, "BadGatewayException", { enumerable: true, get: function () { return http_status_exception_1.BadGatewayException; } });
Object.defineProperty(exports, "ServiceUnavailableException", { enumerable: true, get: function () { return http_status_exception_1.ServiceUnavailableException; } });
Object.defineProperty(exports, "GatewayTimeoutException", { enumerable: true, get: function () { return http_status_exception_1.GatewayTimeoutException; } });
Object.defineProperty(exports, "HTTPVersionNotSupportedException", { enumerable: true, get: function () { return http_status_exception_1.HTTPVersionNotSupportedException; } });
Object.defineProperty(exports, "VariantAlsoNegotiatesException", { enumerable: true, get: function () { return http_status_exception_1.VariantAlsoNegotiatesException; } });
Object.defineProperty(exports, "InsufficientStorageException", { enumerable: true, get: function () { return http_status_exception_1.InsufficientStorageException; } });
Object.defineProperty(exports, "LoopDetectedException", { enumerable: true, get: function () { return http_status_exception_1.LoopDetectedException; } });
Object.defineProperty(exports, "BandwidthLimitExceededException", { enumerable: true, get: function () { return http_status_exception_1.BandwidthLimitExceededException; } });
Object.defineProperty(exports, "NotExtendedException", { enumerable: true, get: function () { return http_status_exception_1.NotExtendedException; } });
Object.defineProperty(exports, "NetworkAuthenticationRequiredException", { enumerable: true, get: function () { return http_status_exception_1.NetworkAuthenticationRequiredException; } });
Object.defineProperty(exports, "UnknownErrorException", { enumerable: true, get: function () { return http_status_exception_1.UnknownErrorException; } });
Object.defineProperty(exports, "WebServerIsDownException", { enumerable: true, get: function () { return http_status_exception_1.WebServerIsDownException; } });
Object.defineProperty(exports, "ConnectionTimedOutException", { enumerable: true, get: function () { return http_status_exception_1.ConnectionTimedOutException; } });
Object.defineProperty(exports, "OriginIsUnreachableException", { enumerable: true, get: function () { return http_status_exception_1.OriginIsUnreachableException; } });
Object.defineProperty(exports, "ATimeoutOccurredException", { enumerable: true, get: function () { return http_status_exception_1.ATimeoutOccurredException; } });
Object.defineProperty(exports, "SSLHandshakeFailedException", { enumerable: true, get: function () { return http_status_exception_1.SSLHandshakeFailedException; } });
Object.defineProperty(exports, "InvalidSSLCertificateException", { enumerable: true, get: function () { return http_status_exception_1.InvalidSSLCertificateException; } });
Object.defineProperty(exports, "RailgunErrorException", { enumerable: true, get: function () { return http_status_exception_1.RailgunErrorException; } });
var http_exception_1 = require("./http.exception");
Object.defineProperty(exports, "HttpException", { enumerable: true, get: function () { return http_exception_1.HttpException; } });
