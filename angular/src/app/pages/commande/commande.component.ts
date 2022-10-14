import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import { Order } from '../../order';
import { ProductsService } from '../../products.service';
import { Product } from '../../Product';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
  OrderForm: FormGroup;
  idPerson:any;
  form: FormGroup;
  Order: Order[] = [];
  products: Product[] = [];
  displayColumns = [
    { name: "produit", value: "produit" },
    { name: "quantite", value: "quantite" },
];
datareceived:any
  constructor(private formBuilder: FormBuilder,public OrderService: OrderService,private router: Router,private route: ActivatedRoute,public ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      namee:  new FormControl('', [ Validators.required])
    });
    this.OrderForm = new FormGroup({
      produit:  new FormControl('', [ Validators.required]),
      quantite: new FormControl('', [ Validators.required]),
    });
    this.route.queryParams.subscribe((params) =>{
      this.datareceived=JSON.parse(params.data);
    this.form.controls["namee"].setValue(this.datareceived.name);
    this.idPerson = this.datareceived.id

});
this.ProductsService.getAll().subscribe((data: Product[])=>{
  this.products = data;
})
  
  this.OrderForm = this.formBuilder.group({ //Rows
    Rows: this.formBuilder.array([this.initRows()])
  });
}
  initRows() {
    return this.formBuilder.group({
      produit: ["- Sélectionner un produit -"],
      quantite: [""]
    });
  }
  get formArr() {
    return this.OrderForm.get("Rows") as FormArray;
  }
  addNewRow() {
    this.formArr.push(this.initRows());
     }
  get f(){
    return this.OrderForm.controls;
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }
  submit(){
    var myFormData = new FormData();
    var leng=this.OrderForm.value.Rows.length;
    for(var i=0;i<leng;i++){
    var produit=this.OrderForm.value.Rows.map(x => x.produit)
    var quantite= this.OrderForm.value.Rows.map(x => x.quantite)
      myFormData.append('idPerson', this.idPerson);
      myFormData.append('produit', produit[i]);
      myFormData.append('quantite', quantite[i]);
  
    this.OrderService.create(this.OrderForm.value.Rows[i]).subscribe(res => {
         console.log('Person created successfully!');
         this.router.navigateByUrl('listeclient');
    })
   }
 }
 submhit(){
  console.log(this.form.value);
  this.OrderService.create(this.form.value).subscribe(res => {
       console.log('Person created successfully!');
       this.router.navigateByUrl('listeproduit');
  })
}

}
