export declare class HttpResponse<T> {
    private _data;
    private _code;
    constructor(object?: T, code?: number);
    get data(): T;
    get code(): number;
    setStatus(status: number): HttpResponse<T>;
    static StatusCode: {
        Continue: number;
        SwitchingProtocols: number;
        Processing: number;
        EarlyHints: number;
        Ok: number;
        Created: number;
        Accepted: number;
        NonAuthoritativeInformation: number;
        NoContent: number;
        ResetContent: number;
        PartialContent: number;
        MultiStatus: number;
        AlreadyReported: number;
        ContentDifferent: number;
        IMUsed: number;
        MultipleChoices: number;
        MovedPermanently: number;
        Found: number;
        SeeOther: number;
        NotModified: number;
        UseProxy: number;
        SwitchProxy: number;
        TemporaryRedirect: number;
        PermanentRedirect: number;
        TooManyRedirects: number;
    };
}
