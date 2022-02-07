export class View{
  public get view(): string{ return this._view }
  public get data(): any{ return this._data }

  constructor(private _view: string, private _data?: any){
  }
}