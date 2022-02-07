import { HttpContext } from './decorators/controller.decorator';

export interface HttpHandler{
  handle(context: HttpContext): void;
}