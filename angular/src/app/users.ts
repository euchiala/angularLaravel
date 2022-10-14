import { accesslevel } from './role';
export class Users {
    public Id: number;
    public username: string;
    public password:string;
    public email:string;
    public accesslevel: accesslevel;
    
    constructor(Id:number,username: string,password:string,email:string,accesslevel:accesslevel) {
        this.Id = Id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.accesslevel = accesslevel;
    }
    }