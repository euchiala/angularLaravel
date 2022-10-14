import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Product } from '../../product';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-products',
  templateUrl: './liste-products.component.html',
  styleUrls: ['./liste-products.component.scss']
})
export class ListeProductsComponent implements OnInit {
  products: Product[] = [];
  data:any
  constructor(public productsService: ProductsService,private router:Router,private route :ActivatedRoute) { }


  ngOnInit(): void {
    this.productsService.getAll().subscribe((data: Product[])=>{
      this.products = data;
    })
  }
  editProduct(id){
    var myFormData = new FormData();
    myFormData.append('', id);
  
    this.productsService.getAll().subscribe((data: Product[])=>{
    let idx_user = data.findIndex(data => data.id === id);
    this.data = data[idx_user];
  this.router.navigate(['/editproduct'], {queryParams :{data:JSON.stringify(this.data)} 
  });
  });
  }

  deleteProduct(id){
    this.productsService.delete(id).subscribe(res => {
         this.products = this.products.filter(item => item.id !== id);
         console.log('Person deleted successfully!');
    })
  }

}
