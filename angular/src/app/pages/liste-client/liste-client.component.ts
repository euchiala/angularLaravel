import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../person.service';
import { Person } from '../../person';
import { Router,ActivatedRoute } from '@angular/router';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.scss']
})
export class ListeClientComponent implements OnInit {
  persons: Person[] = [];
  data:any
  searchedKeyword:string
  constructor(config: NgbPopoverConfig,public personService: PersonService,private router:Router,private route :ActivatedRoute) { 
  config.placement = 'top';
  config.triggers = 'hover'; 
}


  ngOnInit(): void {
    this.personService.getAll().subscribe((data: Person[])=>{
      this.persons = data;
      console.log(this.persons);
    })
  }
  editclient(id){
    var myFormData = new FormData();
    myFormData.append('', id);
  
    this.personService.getAll().subscribe((data: Person[])=>{
    let idx_user = data.findIndex(data => data.id === id);
    this.data = data[idx_user];
  this.router.navigate(['/editclient'], {queryParams :{data:JSON.stringify(this.data)} 
  });
  });
  }
  addorder(id){
    var myFormData = new FormData();
    myFormData.append('', id);
  
    this.personService.getAll().subscribe((data: Person[])=>{
    let idx_user = data.findIndex(data => data.id === id);
    this.data = data[idx_user];
  this.router.navigate(['/addorder'], {queryParams :{data:JSON.stringify(this.data)} 
  });
  });
  }

  deletePerson(id){
    this.personService.delete(id).subscribe(res => {
         this.persons = this.persons.filter(item => item.id !== id);
         console.log('Person deleted successfully!');
    })
  }

}
