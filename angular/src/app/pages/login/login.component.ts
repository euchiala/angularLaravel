import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import {HttpClientModule , HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';  

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  username:string;
  password:string;
  showModal: boolean;
//mailForm: FormGroup;

submitted = false;


  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router,private http: HttpClient) {
    this.username="";
    this.password="";
    this.angForm=fb.group({
      "username":[null, Validators.required],
      "password":[null,Validators.required]
    });
  }
  show()
{
  this.showModal = true; // Show-Hide Modal Check
  
}
//Bootstrap Modal Close event
hide()
{
  this.showModal = false;
}
onSubmit(mailForm: NgForm) {
  if (mailForm.valid) {
    const email = mailForm.value;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/xwkarnzj',
      { name: email.name, replyto: email.email, message: email.messages },
      { 'headers': headers }).subscribe(
        response => {
          mailForm.reset()
          return this.alertWithSuccess();
        }
      );
  }
}
erroalert()  
{  
  Swal.fire({  
    icon: 'error',  
    title: 'Erreur',  
    text: 'Nom d\'utilisateur ou mot de passe incorrecte' 
  })  
} 
alertWithSuccess(){  
  Swal.fire('Succès', 'Mail envoyé avec succès!', 'success')  
}
  ngOnInit() {
  }
  postdata(post)
  {   
    this.username=post.username;
    this.password=post.password;   
    this.dataService.userlogin(this.username,this.password)
    .pipe(first())
    .subscribe( (res: Response)  => {
      const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/DashCal';
      this.router.navigate([redirect]);
  },
  error => {
    this.erroalert();
     
    });
  }
  getusername() { return this.angForm.get('username'); }
  getpassword() { return this.angForm.get('password'); }
  ngOnDestroy(){}
}