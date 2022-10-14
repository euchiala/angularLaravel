import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../products.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  form: FormGroup;

  constructor(
    public productService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      productname:  new FormControl('', [ Validators.required]),
      description: new FormControl('', [ Validators.required]),
      category: new FormControl('',[ Validators.required] ),
      quantite: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      punitaire: new FormControl('',[ Validators.required] ),
    });
  }

  get f(){
    return this.form.controls;
  }


  submit(){
    console.log(this.form.value);
    this.productService.create(this.form.value).subscribe(res => {
         console.log('Person created successfully!');
         this.router.navigateByUrl('listeproduit');
    })
  }

}
