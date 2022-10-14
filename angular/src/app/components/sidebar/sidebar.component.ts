import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [  //manager
  { path: '/addperson', title: 'Ajoute Client',  icon: 'ni-bullet-list-67 text-blue', class: '' },   
  { path: '/listeclient', title: 'Liste des clients',  icon: 'ni-single-copy-04 text-blue', class: ''},
  { path: '/addproduct', title: 'Ajoute Produit',  icon: 'ni-badge text-blue', class: ''},
  { path: '/listeproduit', title: 'Liste des produits',  icon: 'ni-bullet-list-67 text-blue', class: ''},

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  constructor(private router: Router,private dataService : ApiService) {
  }
  ngOnInit() {
    const usertoken = this.dataService.getToken();
    
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });
    
  }
}
