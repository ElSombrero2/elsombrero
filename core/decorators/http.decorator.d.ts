import 'reflect-metadata';
export interface DataHttpType {
    url: string;
    callback: Function;
    method: string;
    middlewares: Function[];
}
export declare function Get(url: string, ...args: Function[]): MethodDecorator;
export declare function Post(url: string, ...args: Function[]): MethodDecorator;
export declare function Put(url: string, ...args: Function[]): MethodDecorator;
export declare function Patch(url: string, ...args: Function[]): MethodDecorator;
export declare function Delete(url: string, ...args: Function[]): MethodDecorator;
