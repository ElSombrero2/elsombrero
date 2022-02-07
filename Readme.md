## ElSombrero Typescript Http Decorator Library
It's a simple library easy to use that allow you to create HttpController on **Express.js** Node Typescript project.

## Installation

You can install elsombrero library with npm
``` bash
npm install --save elsombrero
```
Or with yarn
``` bash
yarn add elsombrero
```
## Example

First create your **Express.js** app

``` Typescript
 import express from 'express'

 const app = express()
```

Create your Main class that take the **Register** decorator and pass your controllers, services and your **Express.js** app in your context.


``` Typescript
import { Register } from 'elsombrero/core'

@Register({
  controllers: [],
  services: [],
  context: app
})
class Main{
  public async static main(){
    app.listen(8080, () => console.log('Servier is running!'))
  }
}

Main.main()
```

Create Your first Controller on **index.controller.ts**.
You can pass on your controller parameter your base url string.
If you pass nothing, your controller's base url is on the root (/).
You can use the Methods Decorators to specify your HTTP Method and take url on argument. Like controller if you pass nothing, your url is on the root(/).
You can use **Express.js dynamic routing expression on your Method**
- @Get : Get HTTP
- @Post : Post HTTP
- @Put : Put HTTP
- @Patch : Patch HTTP
- @Delete : Delete HTTP

``` Typescript
import { Controller, Get } from 'elsombrero/core'

@Controller()
export class Index{
  @Get()
  public index(): any{
    return { message: 'Hello World' }
  } 

  @Get('/article'): any{
    return { title: 'My Article' }
  }
}

```

Then Register your Controller on your Main class

``` Typescript
import { Register } from 'elsombrero/core'
import { Index } from './index.controller.ts'

@Register({
  controllers: [Index],
  services: [],
  context: app
})
class Main{
  public async static main(){
    app.listen(8080, () => console.log('Servier is running!'))
  }
}

Main.main()

```

You can get your HttpContext on your controller method by specifying the HttpContext argument on your Method.

``` Ts
import { Controller, Post, HttpContext } from 'elsombrero/core'

@Controller('/article')
export class Article{
  @Get('/:id')
  public index({params, query}): any{
    return { message: 'Hello World' }
  } 

  @Post()
  public create({body}: HttpContext): any{
    return { body }
  }

  @Post('/not-found')
  public create({request, response}: HttpContext): any{
    // Do something
    response.status(404).json({message: 'Not Found'})
  }
}
```

Here is the HttpContext interface declaration

``` Ts
export interface HttpContext{
  request: Request 
  response: Response,
  body: any, 
  params: any,
  query: any,
  file: any,
  files: any[],
  headers: IncomingHttpHeaders
}
```
## Create Middleware

You can create Middleware by implementing HttpHandler in your class which take **HttpContext** argument. You can pass it in your Method Decorator on second argument or on your controller second argument.
You can pass as much middlewares as you want on your Controller or method decorator.

### Example

``` Ts
import { Controller, Post, HttpContext, HttpHandler } from 'elsombrero/core'

class FirstHandler implements HttpHandler{
  public handle(context: HttpContext): void{
    console.log('First Middleware')
    context.next()
  }
}

class SecondHandler implements HttpHandler{
  public handle(context: HttpContext): void{
    console.log('Second Middleware')
    context.next()
  }
}

@Controller('/article', FirstHandler, SecondHandler)
export class Article{
  @Get('/:id', FirstHandler, SecondHandler)
  public index({params, query}): any{
    return { message: 'Hello World' }
  } 

  @Post(null, FirstHandler, SecondHandler)
  public create({body}: HttpContext): any{
    return { body }
  }

  @Post('/not-found', FirstHandler, SecondHandler)
  public create({request, response}: HttpContext): any{
    // Do something
    response.status(404).json({message: 'Not Found'})
  }
}
```

## Change Http Response Status

You can create a custom response by using **response.status** or by using an instance of HttpResponse\<T\>. By default, data response is undefined and Http Status is 200.
You can find all HttpStatus on **HttpResponse.StatusCode**.

### Example

``` Ts
import { Controller, Post, HttpContext } from 'elsombrero/core'
import { HttpResponse } from 'elsombrero/common/response'

@Controller('/article')
export class Article{
  @Get('/:id')
  public index({params, query}): HttpResponse<any>{
    return new HttpResponse<any>({name: 'John Doe'}, 200);
  } 

  @Post('/not-found')
  public create({request, response}: HttpContext): HttpResponse<any>{
    // Do something
    return new HttpResponse<any>({name: 'John Doe'}, HttpResponse.StatusCode.Created);
  }
}
```
## Exception

New Feature, You can know Handle Exception directly from ElSombrero Library,
All you have to do is **throwing a new exception** on your method. HttpException is the base class and you can pass your own Exception or use all implemented Exception.
By default **HttpException** class send code 500 and Internal Server Error message.
### Example

``` Ts
import { Controller, Get, HttpContext } from 'elsombrero/core'
import { NotFoundException, HttpException } from 'elsombrero/common/exceptions'

@Controller('/article')
export class Article{
  @Get('/:id')
  public index({params, query}: HttpContext): any{
    const data = {my: 'custom data'}
    throw new NotFoundException<any>(data, 'Ressource Not Found')
  } 

  @Get('all/')
  public index({params, query}: HttpContext): any[]{
    throw new HttpException<any>({my: 'custom data'}, 400, 'Forbidden')
  }
  
  @Get('collection/:id')
  public index({params, query}: HttpContext): any[]{
    throw new NotFoundException<any>()
  }
}
```

You can throw Exception direclty on your HttpHandler.

### Example

``` Ts
import { Controller, Get, HttpContext, HttpHandler } from 'elsombrero/core'
import { UnauthorizedException } from 'elsombrero/common/exceptions'

class AuthHandler implements HttpHandler{
  handle(context: HttpContext): void{
    throw new UnauthorizedException()
  }
}

@Controller('/article', AuthHandler)
export class Article{
  @Get('/:id')
  public index({params, query}: HttpContext): any{
    const data = {my: 'custom data'}
    return data
  } 
}
```

## View Engine

By default ElSombrero Support Templating by returning **View** object on your controller method.
You can put your views on your express view directory and use your favorite view engine.
Second Optionnal Parameter is the data you to pass to your view.

``` Ts
import { Controller, View, Get, HttpContext } from 'elsombrero/core'

@Controller('/article')
export class Article{
  @Get('/:id')
  public index({query}: HttpContext): View{
    return new View('index', {query})
  } 
}
```

## Injectable and Services (Dependencies Injection)

You can Inject dependencies on your class by using the @Injectable decorator then you can access to your dependencies by
adding them on your constructor argument

## Example

Create a file article.service.ts

``` Ts
import { Injectable } from 'elsombrero/core'

@Injectable()
export class Article{

  public findOne(id: string){
    return {id, name: 'My Article'}
  }
  
}
```

On Your article.controller.ts : 

``` Ts
import { Controller, View, Get, HttpContext } from 'elsombrero/core'
import { ArticleService } from './article.service.ts'

@Controller('/article')
export class Article{

  public constructor(public article: ArticleService){}

  @Get('/:id')
  public index({params}: HttpContext): any{
    return this.article.findOne(params.id)
  } 
}
```

And don't forget to register your Services and Controllers

``` Typescript
import { Register } from 'elsombrero/core'
import { Index } from './index.controller.ts'
import { ArticleService } from './article.service.ts'

@Register({
  controllers: [Article],
  services: [ArticleService],
  context: app
})
class Main{
  public async static main(){
    app.listen(8080, () => console.log('Servier is running!'))
  }
}

Main.main()

```


# Enjoy ❤👌
