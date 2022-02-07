"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkAuthenticationRequiredException = exports.NotExtendedException = exports.BandwidthLimitExceededException = exports.LoopDetectedException = exports.InsufficientStorageException = exports.VariantAlsoNegotiatesException = exports.HTTPVersionNotSupportedException = exports.GatewayTimeoutException = exports.ServiceUnavailableException = exports.BadGatewayException = exports.NotImplementedException = exports.InternalServerErrorException = exports.ClientClosedRequestException = exports.TokenExpiredOrInvalidException = exports.HTTPRequestSentToHTTPSPortException = exports.SSLCertificateRequiredException = exports.SSLCertificateErrorException = exports.NoResponseException = exports.UnrecoverableErrorException = exports.UnavailableForLegalReasonsException = exports.BlockedByWindowsParentalControlsException = exports.RetryWithException = exports.RequestHeaderFieldsTooLargeException = exports.TooManyRequestsException = exports.PreconditionRequiredException = exports.UpgradeRequiredException = exports.TooEarlyException = exports.MethodFailureException = exports.LockedException = exports.UnprocessableEntityException = exports.MisdirectedRequestException = exports.ImATeapotException = exports.ExpectationFailedException = exports.RequestedRangeUnsatisfiableException = exports.UnsupportedMediaTypeException = exports.RequestURITooLongException = exports.RequestEntityTooLargeException = exports.PreconditionFailedException = exports.LengthRequiredException = exports.GoneException = exports.ConflictException = exports.RequestTimeoutException = exports.ProxyAuthenticationRequiredException = exports.NotAcceptableException = exports.MethodNotAllowedException = exports.NotFoundException = exports.ForbiddenException = exports.PaymentRequiredException = exports.UnauthorizedException = exports.BadRequestException = void 0;
exports.RailgunErrorException = exports.InvalidSSLCertificateException = exports.SSLHandshakeFailedException = exports.ATimeoutOccurredException = exports.OriginIsUnreachableException = exports.ConnectionTimedOutException = exports.WebServerIsDownException = exports.UnknownErrorException = void 0;
var http_exception_1 = require("./http.exception");
var BadRequestException = /** @class */ (function (_super) {
    __extends(BadRequestException, _super);
    function BadRequestException(object, message) {
        return _super.call(this, object, 400, message || 'Bad Request') || this;
    }
    return BadRequestException;
}(http_exception_1.HttpException));
exports.BadRequestException = BadRequestException;
var UnauthorizedException = /** @class */ (function (_super) {
    __extends(UnauthorizedException, _super);
    function UnauthorizedException(object, message) {
        return _super.call(this, object, 401, message || 'Unauthorized') || this;
    }
    return UnauthorizedException;
}(http_exception_1.HttpException));
exports.UnauthorizedException = UnauthorizedException;
var PaymentRequiredException = /** @class */ (function (_super) {
    __extends(PaymentRequiredException, _super);
    function PaymentRequiredException(object, message) {
        return _super.call(this, object, 402, message || 'Payment Required') || this;
    }
    return PaymentRequiredException;
}(http_exception_1.HttpException));
exports.PaymentRequiredException = PaymentRequiredException;
var ForbiddenException = /** @class */ (function (_super) {
    __extends(ForbiddenException, _super);
    function ForbiddenException(object, message) {
        return _super.call(this, object, 403, message || 'Forbidden') || this;
    }
    return ForbiddenException;
}(http_exception_1.HttpException));
exports.ForbiddenException = ForbiddenException;
var NotFoundException = /** @class */ (function (_super) {
    __extends(NotFoundException, _super);
    function NotFoundException(object, message) {
        return _super.call(this, object, 404, message || 'Not Found') || this;
    }
    return NotFoundException;
}(http_exception_1.HttpException));
exports.NotFoundException = NotFoundException;
var MethodNotAllowedException = /** @class */ (function (_super) {
    __extends(MethodNotAllowedException, _super);
    function MethodNotAllowedException(object, message) {
        return _super.call(this, object, 405, message || 'Method Not Allowed') || this;
    }
    return MethodNotAllowedException;
}(http_exception_1.HttpException));
exports.MethodNotAllowedException = MethodNotAllowedException;
var NotAcceptableException = /** @class */ (function (_super) {
    __extends(NotAcceptableException, _super);
    function NotAcceptableException(object, message) {
        return _super.call(this, object, 406, message || 'Not Acceptable') || this;
    }
    return NotAcceptableException;
}(http_exception_1.HttpException));
exports.NotAcceptableException = NotAcceptableException;
var ProxyAuthenticationRequiredException = /** @class */ (function (_super) {
    __extends(ProxyAuthenticationRequiredException, _super);
    function ProxyAuthenticationRequiredException(object, message) {
        return _super.call(this, object, 407, message || 'Proxy Authentication Required') || this;
    }
    return ProxyAuthenticationRequiredException;
}(http_exception_1.HttpException));
exports.ProxyAuthenticationRequiredException = ProxyAuthenticationRequiredException;
var RequestTimeoutException = /** @class */ (function (_super) {
    __extends(RequestTimeoutException, _super);
    function RequestTimeoutException(object, message) {
        return _super.call(this, object, 408, message || 'Request Time-out') || this;
    }
    return RequestTimeoutException;
}(http_exception_1.HttpException));
exports.RequestTimeoutException = RequestTimeoutException;
var ConflictException = /** @class */ (function (_super) {
    __extends(ConflictException, _super);
    function ConflictException(object, message) {
        return _super.call(this, object, 409, message || 'Conflict') || this;
    }
    return ConflictException;
}(http_exception_1.HttpException));
exports.ConflictException = ConflictException;
var GoneException = /** @class */ (function (_super) {
    __extends(GoneException, _super);
    function GoneException(object, message) {
        return _super.call(this, object, 410, message || 'Gone') || this;
    }
    return GoneException;
}(http_exception_1.HttpException));
exports.GoneException = GoneException;
var LengthRequiredException = /** @class */ (function (_super) {
    __extends(LengthRequiredException, _super);
    function LengthRequiredException(object, message) {
        return _super.call(this, object, 411, message || 'Length Required') || this;
    }
    return LengthRequiredException;
}(http_exception_1.HttpException));
exports.LengthRequiredException = LengthRequiredException;
var PreconditionFailedException = /** @class */ (function (_super) {
    __extends(PreconditionFailedException, _super);
    function PreconditionFailedException(object, message) {
        return _super.call(this, object, 412, message || 'Precondition Failed') || this;
    }
    return PreconditionFailedException;
}(http_exception_1.HttpException));
exports.PreconditionFailedException = PreconditionFailedException;
var RequestEntityTooLargeException = /** @class */ (function (_super) {
    __extends(RequestEntityTooLargeException, _super);
    function RequestEntityTooLargeException(object, message) {
        return _super.call(this, object, 413, message || 'Request Entity Too Large') || this;
    }
    return RequestEntityTooLargeException;
}(http_exception_1.HttpException));
exports.RequestEntityTooLargeException = RequestEntityTooLargeException;
var RequestURITooLongException = /** @class */ (function (_super) {
    __extends(RequestURITooLongException, _super);
    function RequestURITooLongException(object, message) {
        return _super.call(this, object, 414, message || 'Request-URI Too Long') || this;
    }
    return RequestURITooLongException;
}(http_exception_1.HttpException));
exports.RequestURITooLongException = RequestURITooLongException;
var UnsupportedMediaTypeException = /** @class */ (function (_super) {
    __extends(UnsupportedMediaTypeException, _super);
    function UnsupportedMediaTypeException(object, message) {
        return _super.call(this, object, 415, message || 'Unsupported Media Type') || this;
    }
    return UnsupportedMediaTypeException;
}(http_exception_1.HttpException));
exports.UnsupportedMediaTypeException = UnsupportedMediaTypeException;
var RequestedRangeUnsatisfiableException = /** @class */ (function (_super) {
    __extends(RequestedRangeUnsatisfiableException, _super);
    function RequestedRangeUnsatisfiableException(object, message) {
        return _super.call(this, object, 416, message || 'Requested range unsatisfiable') || this;
    }
    return RequestedRangeUnsatisfiableException;
}(http_exception_1.HttpException));
exports.RequestedRangeUnsatisfiableException = RequestedRangeUnsatisfiableException;
var ExpectationFailedException = /** @class */ (function (_super) {
    __extends(ExpectationFailedException, _super);
    function ExpectationFailedException(object, message) {
        return _super.call(this, object, 417, message || 'Expectation failed') || this;
    }
    return ExpectationFailedException;
}(http_exception_1.HttpException));
exports.ExpectationFailedException = ExpectationFailedException;
var ImATeapotException = /** @class */ (function (_super) {
    __extends(ImATeapotException, _super);
    function ImATeapotException(object, message) {
        return _super.call(this, object, 418, message || 'I’m a teapot') || this;
    }
    return ImATeapotException;
}(http_exception_1.HttpException));
exports.ImATeapotException = ImATeapotException;
var MisdirectedRequestException = /** @class */ (function (_super) {
    __extends(MisdirectedRequestException, _super);
    function MisdirectedRequestException(object, message) {
        return _super.call(this, object, 421, message || 'Bad mapping / Misdirected Request') || this;
    }
    return MisdirectedRequestException;
}(http_exception_1.HttpException));
exports.MisdirectedRequestException = MisdirectedRequestException;
var UnprocessableEntityException = /** @class */ (function (_super) {
    __extends(UnprocessableEntityException, _super);
    function UnprocessableEntityException(object, message) {
        return _super.call(this, object, 422, message || 'Unprocessable entity') || this;
    }
    return UnprocessableEntityException;
}(http_exception_1.HttpException));
exports.UnprocessableEntityException = UnprocessableEntityException;
var LockedException = /** @class */ (function (_super) {
    __extends(LockedException, _super);
    function LockedException(object, message) {
        return _super.call(this, object, 423, message || 'Locked') || this;
    }
    return LockedException;
}(http_exception_1.HttpException));
exports.LockedException = LockedException;
var MethodFailureException = /** @class */ (function (_super) {
    __extends(MethodFailureException, _super);
    function MethodFailureException(object, message) {
        return _super.call(this, object, 424, message || 'Method failure') || this;
    }
    return MethodFailureException;
}(http_exception_1.HttpException));
exports.MethodFailureException = MethodFailureException;
var TooEarlyException = /** @class */ (function (_super) {
    __extends(TooEarlyException, _super);
    function TooEarlyException(object, message) {
        return _super.call(this, object, 425, message || 'Too Early') || this;
    }
    return TooEarlyException;
}(http_exception_1.HttpException));
exports.TooEarlyException = TooEarlyException;
var UpgradeRequiredException = /** @class */ (function (_super) {
    __extends(UpgradeRequiredException, _super);
    function UpgradeRequiredException(object, message) {
        return _super.call(this, object, 426, message || 'Upgrade Required') || this;
    }
    return UpgradeRequiredException;
}(http_exception_1.HttpException));
exports.UpgradeRequiredException = UpgradeRequiredException;
var PreconditionRequiredException = /** @class */ (function (_super) {
    __extends(PreconditionRequiredException, _super);
    function PreconditionRequiredException(object, message) {
        return _super.call(this, object, 428, message || 'Precondition Required') || this;
    }
    return PreconditionRequiredException;
}(http_exception_1.HttpException));
exports.PreconditionRequiredException = PreconditionRequiredException;
var TooManyRequestsException = /** @class */ (function (_super) {
    __extends(TooManyRequestsException, _super);
    function TooManyRequestsException(object, message) {
        return _super.call(this, object, 429, message || 'Too Many Requests') || this;
    }
    return TooManyRequestsException;
}(http_exception_1.HttpException));
exports.TooManyRequestsException = TooManyRequestsException;
var RequestHeaderFieldsTooLargeException = /** @class */ (function (_super) {
    __extends(RequestHeaderFieldsTooLargeException, _super);
    function RequestHeaderFieldsTooLargeException(object, message) {
        return _super.call(this, object, 431, message || 'Request Header Fields Too Large') || this;
    }
    return RequestHeaderFieldsTooLargeException;
}(http_exception_1.HttpException));
exports.RequestHeaderFieldsTooLargeException = RequestHeaderFieldsTooLargeException;
var RetryWithException = /** @class */ (function (_super) {
    __extends(RetryWithException, _super);
    function RetryWithException(object, message) {
        return _super.call(this, object, 449, message || 'Retry With') || this;
    }
    return RetryWithException;
}(http_exception_1.HttpException));
exports.RetryWithException = RetryWithException;
var BlockedByWindowsParentalControlsException = /** @class */ (function (_super) {
    __extends(BlockedByWindowsParentalControlsException, _super);
    function BlockedByWindowsParentalControlsException(object, message) {
        return _super.call(this, object, 450, message || 'Blocked by Windows Parental Controls') || this;
    }
    return BlockedByWindowsParentalControlsException;
}(http_exception_1.HttpException));
exports.BlockedByWindowsParentalControlsException = BlockedByWindowsParentalControlsException;
var UnavailableForLegalReasonsException = /** @class */ (function (_super) {
    __extends(UnavailableForLegalReasonsException, _super);
    function UnavailableForLegalReasonsException(object, message) {
        return _super.call(this, object, 451, message || 'Unavailable For Legal Reasons') || this;
    }
    return UnavailableForLegalReasonsException;
}(http_exception_1.HttpException));
exports.UnavailableForLegalReasonsException = UnavailableForLegalReasonsException;
var UnrecoverableErrorException = /** @class */ (function (_super) {
    __extends(UnrecoverableErrorException, _super);
    function UnrecoverableErrorException(object, message) {
        return _super.call(this, object, 456, message || 'Unrecoverable Error') || this;
    }
    return UnrecoverableErrorException;
}(http_exception_1.HttpException));
exports.UnrecoverableErrorException = UnrecoverableErrorException;
var NoResponseException = /** @class */ (function (_super) {
    __extends(NoResponseException, _super);
    function NoResponseException(object, message) {
        return _super.call(this, object, 444, message || 'No Response') || this;
    }
    return NoResponseException;
}(http_exception_1.HttpException));
exports.NoResponseException = NoResponseException;
var SSLCertificateErrorException = /** @class */ (function (_super) {
    __extends(SSLCertificateErrorException, _super);
    function SSLCertificateErrorException(object, message) {
        return _super.call(this, object, 495, message || 'SSL Certificate Error') || this;
    }
    return SSLCertificateErrorException;
}(http_exception_1.HttpException));
exports.SSLCertificateErrorException = SSLCertificateErrorException;
var SSLCertificateRequiredException = /** @class */ (function (_super) {
    __extends(SSLCertificateRequiredException, _super);
    function SSLCertificateRequiredException(object, message) {
        return _super.call(this, object, 496, message || 'SSL Certificate Required') || this;
    }
    return SSLCertificateRequiredException;
}(http_exception_1.HttpException));
exports.SSLCertificateRequiredException = SSLCertificateRequiredException;
var HTTPRequestSentToHTTPSPortException = /** @class */ (function (_super) {
    __extends(HTTPRequestSentToHTTPSPortException, _super);
    function HTTPRequestSentToHTTPSPortException(object, message) {
        return _super.call(this, object, 497, message || 'HTTP Request Sent to HTTPS Port') || this;
    }
    return HTTPRequestSentToHTTPSPortException;
}(http_exception_1.HttpException));
exports.HTTPRequestSentToHTTPSPortException = HTTPRequestSentToHTTPSPortException;
var TokenExpiredOrInvalidException = /** @class */ (function (_super) {
    __extends(TokenExpiredOrInvalidException, _super);
    function TokenExpiredOrInvalidException(object, message) {
        return _super.call(this, object, 498, message || 'Token expired or invalid') || this;
    }
    return TokenExpiredOrInvalidException;
}(http_exception_1.HttpException));
exports.TokenExpiredOrInvalidException = TokenExpiredOrInvalidException;
var ClientClosedRequestException = /** @class */ (function (_super) {
    __extends(ClientClosedRequestException, _super);
    function ClientClosedRequestException(object, message) {
        return _super.call(this, object, 499, message || 'Client Closed Request') || this;
    }
    return ClientClosedRequestException;
}(http_exception_1.HttpException));
exports.ClientClosedRequestException = ClientClosedRequestException;
var InternalServerErrorException = /** @class */ (function (_super) {
    __extends(InternalServerErrorException, _super);
    function InternalServerErrorException(object, message) {
        return _super.call(this, object, 500, message || 'Internal Server Error') || this;
    }
    return InternalServerErrorException;
}(http_exception_1.HttpException));
exports.InternalServerErrorException = InternalServerErrorException;
var NotImplementedException = /** @class */ (function (_super) {
    __extends(NotImplementedException, _super);
    function NotImplementedException(object, message) {
        return _super.call(this, object, 501, message || 'Not Implemented') || this;
    }
    return NotImplementedException;
}(http_exception_1.HttpException));
exports.NotImplementedException = NotImplementedException;
var BadGatewayException = /** @class */ (function (_super) {
    __extends(BadGatewayException, _super);
    function BadGatewayException(object, message) {
        return _super.call(this, object, 502, message || 'Bad Gateway') || this;
    }
    return BadGatewayException;
}(http_exception_1.HttpException));
exports.BadGatewayException = BadGatewayException;
var ServiceUnavailableException = /** @class */ (function (_super) {
    __extends(ServiceUnavailableException, _super);
    function ServiceUnavailableException(object, message) {
        return _super.call(this, object, 503, message || 'Service Unavailable') || this;
    }
    return ServiceUnavailableException;
}(http_exception_1.HttpException));
exports.ServiceUnavailableException = ServiceUnavailableException;
var GatewayTimeoutException = /** @class */ (function (_super) {
    __extends(GatewayTimeoutException, _super);
    function GatewayTimeoutException(object, message) {
        return _super.call(this, object, 504, message || 'Gateway Time-out') || this;
    }
    return GatewayTimeoutException;
}(http_exception_1.HttpException));
exports.GatewayTimeoutException = GatewayTimeoutException;
var HTTPVersionNotSupportedException = /** @class */ (function (_super) {
    __extends(HTTPVersionNotSupportedException, _super);
    function HTTPVersionNotSupportedException(object, message) {
        return _super.call(this, object, 505, message || 'HTTP Version not supported') || this;
    }
    return HTTPVersionNotSupportedException;
}(http_exception_1.HttpException));
exports.HTTPVersionNotSupportedException = HTTPVersionNotSupportedException;
var VariantAlsoNegotiatesException = /** @class */ (function (_super) {
    __extends(VariantAlsoNegotiatesException, _super);
    function VariantAlsoNegotiatesException(object, message) {
        return _super.call(this, object, 506, message || 'Variant Also Negotiates') || this;
    }
    return VariantAlsoNegotiatesException;
}(http_exception_1.HttpException));
exports.VariantAlsoNegotiatesException = VariantAlsoNegotiatesException;
var InsufficientStorageException = /** @class */ (function (_super) {
    __extends(InsufficientStorageException, _super);
    function InsufficientStorageException(object, message) {
        return _super.call(this, object, 507, message || 'Insufficient storage') || this;
    }
    return InsufficientStorageException;
}(http_exception_1.HttpException));
exports.InsufficientStorageException = InsufficientStorageException;
var LoopDetectedException = /** @class */ (function (_super) {
    __extends(LoopDetectedException, _super);
    function LoopDetectedException(object, message) {
        return _super.call(this, object, 508, message || 'Loop detected') || this;
    }
    return LoopDetectedException;
}(http_exception_1.HttpException));
exports.LoopDetectedException = LoopDetectedException;
var BandwidthLimitExceededException = /** @class */ (function (_super) {
    __extends(BandwidthLimitExceededException, _super);
    function BandwidthLimitExceededException(object, message) {
        return _super.call(this, object, 509, message || 'Bandwidth Limit Exceeded') || this;
    }
    return BandwidthLimitExceededException;
}(http_exception_1.HttpException));
exports.BandwidthLimitExceededException = BandwidthLimitExceededException;
var NotExtendedException = /** @class */ (function (_super) {
    __extends(NotExtendedException, _super);
    function NotExtendedException(object, message) {
        return _super.call(this, object, 510, message || 'Not extended') || this;
    }
    return NotExtendedException;
}(http_exception_1.HttpException));
exports.NotExtendedException = NotExtendedException;
var NetworkAuthenticationRequiredException = /** @class */ (function (_super) {
    __extends(NetworkAuthenticationRequiredException, _super);
    function NetworkAuthenticationRequiredException(object, message) {
        return _super.call(this, object, 511, message || 'Network authentication required') || this;
    }
    return NetworkAuthenticationRequiredException;
}(http_exception_1.HttpException));
exports.NetworkAuthenticationRequiredException = NetworkAuthenticationRequiredException;
var UnknownErrorException = /** @class */ (function (_super) {
    __extends(UnknownErrorException, _super);
    function UnknownErrorException(object, message) {
        return _super.call(this, object, 520, message || 'Unknown Error') || this;
    }
    return UnknownErrorException;
}(http_exception_1.HttpException));
exports.UnknownErrorException = UnknownErrorException;
var WebServerIsDownException = /** @class */ (function (_super) {
    __extends(WebServerIsDownException, _super);
    function WebServerIsDownException(object, message) {
        return _super.call(this, object, 521, message || 'Web Server Is Down') || this;
    }
    return WebServerIsDownException;
}(http_exception_1.HttpException));
exports.WebServerIsDownException = WebServerIsDownException;
var ConnectionTimedOutException = /** @class */ (function (_super) {
    __extends(ConnectionTimedOutException, _super);
    function ConnectionTimedOutException(object, message) {
        return _super.call(this, object, 522, message || 'Connection Timed Out') || this;
    }
    return ConnectionTimedOutException;
}(http_exception_1.HttpException));
exports.ConnectionTimedOutException = ConnectionTimedOutException;
var OriginIsUnreachableException = /** @class */ (function (_super) {
    __extends(OriginIsUnreachableException, _super);
    function OriginIsUnreachableException(object, message) {
        return _super.call(this, object, 523, message || 'Origin Is Unreachable') || this;
    }
    return OriginIsUnreachableException;
}(http_exception_1.HttpException));
exports.OriginIsUnreachableException = OriginIsUnreachableException;
var ATimeoutOccurredException = /** @class */ (function (_super) {
    __extends(ATimeoutOccurredException, _super);
    function ATimeoutOccurredException(object, message) {
        return _super.call(this, object, 524, message || 'A Timeout Occurred') || this;
    }
    return ATimeoutOccurredException;
}(http_exception_1.HttpException));
exports.ATimeoutOccurredException = ATimeoutOccurredException;
var SSLHandshakeFailedException = /** @class */ (function (_super) {
    __extends(SSLHandshakeFailedException, _super);
    function SSLHandshakeFailedException(object, message) {
        return _super.call(this, object, 525, message || 'SSL Handshake Failed') || this;
    }
    return SSLHandshakeFailedException;
}(http_exception_1.HttpException));
exports.SSLHandshakeFailedException = SSLHandshakeFailedException;
var InvalidSSLCertificateException = /** @class */ (function (_super) {
    __extends(InvalidSSLCertificateException, _super);
    function InvalidSSLCertificateException(object, message) {
        return _super.call(this, object, 526, message || 'Invalid SSL Certificate') || this;
    }
    return InvalidSSLCertificateException;
}(http_exception_1.HttpException));
exports.InvalidSSLCertificateException = InvalidSSLCertificateException;
var RailgunErrorException = /** @class */ (function (_super) {
    __extends(RailgunErrorException, _super);
    function RailgunErrorException(object, message) {
        return _super.call(this, object, 527, message || 'Railgun Error') || this;
    }
    return RailgunErrorException;
}(http_exception_1.HttpException));
exports.RailgunErrorException = RailgunErrorException;
