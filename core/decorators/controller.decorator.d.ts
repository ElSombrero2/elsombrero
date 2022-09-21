/// <reference types="node" />
import { IncomingHttpHeaders } from 'http2';
import 'reflect-metadata';
import { Request, Response } from 'express';
export interface HttpContext {
    request: Request;
    response: Response;
    body: any;
    params: any;
    query: any;
    file: any;
    files: any[];
    headers: IncomingHttpHeaders;
    next?: Function;
}
export declare function Controller(url?: string, ...arg: Function[]): ClassDecorator;
