import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ionicForm: FormGroup;
  isSubmitted = false;
  name:any;
  email:any;
  contrasena:any;
  map=new Map<string,string>();
  validacion:boolean;
  valores:any={};
  correo:string;

  constructor(private router: Router, public formBuilder: FormBuilder) {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    });
    console.log("VALORES IONICFORM ngoninit");
    this.valores=this.ionicForm.value;
    console.log(this.valores);
  }  

  ngOnInit() {
    
  }  

  get errorControl() {
    return this.ionicForm.controls; 
  }

  submitForm() {
    this.isSubmitted = true;
    this.validacion=this.ionicForm.valid;
    this.valores=this.ionicForm.value;
    this.correo=this.ionicForm.value.email;
    console.log(this.valores);
    if (!this.validacion) {
      console.log('Tiene campos si rellenar')
      return false;
    } else {
      this.map.set(this.ionicForm.value.email,this.ionicForm.value.name );
      console.log(this.ionicForm.value);
      console.log("OK. FORMULARIO CORRECTO");
      this.router.navigate(['/panel-usuario', this.ionicForm.value.email]);
    }
  }

}

