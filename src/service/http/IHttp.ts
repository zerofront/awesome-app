export interface IHttp {
  Get(url: string): Promise<any>
  Post(url: string, params: any): Promise<boolean>
}
