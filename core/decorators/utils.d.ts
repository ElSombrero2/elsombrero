import { Application, Request, Response } from "express";
import { HttpContext } from "./controller.decorator";
export interface RegisterArgs {
    controllers: Function[];
    services: Function[];
    context: Application;
    handlers: Function[];
}
export declare function createContext(req: Request, res: Response, next?: Function): HttpContext;
export declare function createMiddleWares(middlewares: any): any[];
