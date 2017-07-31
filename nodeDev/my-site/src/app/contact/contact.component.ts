import { Http,Response } from '@angular/http';
import { Component, OnInit, Injectable} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;
  
  constructor(fb: FormBuilder, public http: Http){
    this.contactForm = fb.group({
        'name': ['',Validators.compose([Validators.required, Validators.minLength(4)])],
        'email': ['',Validators.compose([Validators.required, Validators.pattern(/\w+@\w+/)])],
        'phone': ['',Validators.compose([Validators.required, Validators.minLength(10),Validators.pattern(/[[\D]?\d[\D]?/)])],
        'message': ['',Validators.compose([Validators.required, Validators.minLength(10)])],
    });



  }

  ngOnInit() {

  }
  
 
 

  onSubmit(x: FormGroup):void{

    this.http.post("/api/contact-form", x).subscribe();
     

  }

  
  /*optional custom validator
  phoneValidator(control: AbstractControl): {[s: string]: boolean}{
    if(control.value.match(/\d?\d/)){
      
      return {invalidPhone: true};
    }
  }*/
}