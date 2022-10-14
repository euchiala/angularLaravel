import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
providedIn: 'root'
})
export class ApiService {
    redirectUrl: string;

    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    constructor(private httpClient : HttpClient) { }
    public userlogin(username, password) {
        var sp=window.location.href.split("/",3)
        let link=sp[2].split(":",1)
        var url=sp[0]+"//"+link[0]+"/sport/php/login.php";
        return this.httpClient.post<any>(url, { username, password })
        .pipe(map(Users => {
            this.setToken(Users[0].accesslevel);
            const usertoken = this.getToken();
            this.getLoggedInName.emit(true);
            return Users;
        }));
    }
    setToken(token: string) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    deleteToken() {
        localStorage.removeItem('token');
    }
    isLoggedIn() {
        const usertoken = this.getToken();
        if (usertoken != null) {
            return true
        }
        return false;
    }   
}