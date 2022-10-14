import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
  affichage:boolean;
  notaffichage:boolean;
  constructor(private dataService: ApiService,private router:Router) {
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    const usertoken = this.dataService.getToken();
    
    if(this.dataService.isLoggedIn() && usertoken=='1' ) {
      this.affichage=true;
      this.notaffichage=false;
    }
    else if(this.dataService.isLoggedIn() && usertoken=='2'){
      this.affichage=true;
      this.notaffichage=false;
    }
    else{
      this.affichage=false;
      this.notaffichage=true;
    }
  }
  private changeName(name: boolean): void {
    this.affichage = name;
    this.notaffichage = !name;
  }
  logout() {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const routeurl: string = state.url;
      return this.isLogin(routeurl);
    }

  isLogin(routeurl: string) {
    if (this.dataService.isLoggedIn()) {
      return true;
    }
    this.dataService.redirectUrl = routeurl;
    this.router.navigate(['/login'], {queryParams: { returnUrl: routeurl }} );
  }
}