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

## Exception
Now the library does not support exception catching except 500 status code.
You can do it by throwing new Exception on your Controller.
Http Exceptions are coming on the next version of the library but you can use
[@curveball/http-errors](https://www.npmjs.com/package/@curveball/http-errors) for catching exception

### First install @curveball/http-errors
``` bash
npm install --save @curveball/http-errors
# or yarn
yarn add @curveball/http-errors
```

### The import it on your code

``` ts
import { NotFound } from '@curveball/http-errors'
```
now you can catch your exceptions by using throw
``` Ts
import { Controller, Get, HttpContext } from 'elsombrero/core'

@Controller('/article')
export class Article{
  @Get('/:id')
  public index({params, query}: HttpContext): any{
    throw new NotFound()
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
