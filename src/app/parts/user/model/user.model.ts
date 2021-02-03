export class User{
    username: string;
    email: string;
    password?: string;
    id?:number;
    roles?:Array<string>;
    accessToken?:string;
    tokenType?:string;
    klubId?:number;
}