import { Application } from 'express'
import { IncomingHttpHeaders } from 'http2';

export class View{
  get view(): string
  get data(): any
  constructor(views: string, data?: any)
}

export interface HttpHandler{
  handle(context: HttpContext): void;
}

interface RegisterArgs{
  controllers: any[],
  services: any[],
  context: Application
}

export function Register(args: RegisterArgs)

export interface HttpContext{
  request: Request 
  response: Response,
  body: any, 
  params: any,
  query: any,
  file: any,
  files: any[],
  headers: IncomingHttpHeaders,
  next: Function
}

export function Controller(url?: string, ...arg: Function[]): ClassDecorator
export function Injectable(): ClassDecorator

export function Patch(url: string, ...args: Function[]): MethodDecorator
export function Get(url: string, ...args: Function[]): MethodDecorator
export function Post(url: string, ...args: Function[]): MethodDecorator
export function Put(url: string, ...args: Function[]): MethodDecorator
export function Delete(url: string, ...args: Function[]): MethodDecorator
