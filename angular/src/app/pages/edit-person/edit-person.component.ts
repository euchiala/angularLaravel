import { Component, OnInit } from '@angular/core';

import { PersonService } from '../../person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Person } from '../../person';
@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  id: number;
  person: Person;
  form: FormGroup;
  datareceived:any
  constructor(
    public personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      phone: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      cin: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
    });

    this.route.queryParams.subscribe((params) =>{
      this.datareceived=JSON.parse(params.data);
    this.form.controls["name"].setValue(this.datareceived.name);
    this.form.controls["email"].setValue(this.datareceived.email);
    this.form.controls["phone"].setValue(this.datareceived.phone);
    this.form.controls["cin"].setValue(this.datareceived.cin);
    this.id=this.datareceived.id
});

  
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.personService.update(this.id, this.form.value).subscribe(res => {
         this.router.navigateByUrl('listeclient');
    })
  }

}


