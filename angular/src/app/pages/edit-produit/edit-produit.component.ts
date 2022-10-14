
import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Product } from '../../product';
@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.scss']
})
export class EditProduitComponent implements OnInit {
  id: number;
  product: Product;
  form: FormGroup;
  datareceived:any
  constructor(public productsService: ProductsService,private route: ActivatedRoute,private router: Router) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      productname:  new FormControl('', [ Validators.required]),
      description: new FormControl('', [ Validators.required]),
      category: new FormControl('',[ Validators.required] ),
      quantite: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      punitaire: new FormControl('',[ Validators.required] ),
    });

    this.route.queryParams.subscribe((params) =>{
      this.datareceived=JSON.parse(params.data);
    this.form.controls["productname"].setValue(this.datareceived.productname);
    this.form.controls["description"].setValue(this.datareceived.description);
    this.form.controls["category"].setValue(this.datareceived.category);
    this.form.controls["quantite"].setValue(this.datareceived.quantite);
    this.form.controls["punitaire"].setValue(this.datareceived.punitaire);
    this.id=this.datareceived.id
});

  
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.productsService.update(this.id, this.form.value).subscribe(res => {
         this.router.navigateByUrl('listeproduit');
    })
  }

}


