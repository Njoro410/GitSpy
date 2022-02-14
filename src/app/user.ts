export class User {
    constructor(
    public login:string, 
    public url: string,
    public avatar:string,
    public company:string,
    public bio:string, 
    public public_repos:number, 
    public followers:number, 
    public following:number, 
    public gist:number,
    public location:string, 
    public email:string,
    public blog:string, 
    public created_at:Date,
    ) 
    {}
}
