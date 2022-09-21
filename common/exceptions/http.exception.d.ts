export declare class HttpException<T> {
    private _object;
    private _code;
    private _message;
    get object(): T;
    get code(): number;
    get message(): string;
    constructor(object?: T, code?: number, message?: string);
    setStatus(status: number): HttpException<T>;
    setMessage(message: string): HttpException<T>;
}
