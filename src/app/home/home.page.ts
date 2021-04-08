import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
//import { EmailValidator } from '../emailvalidator';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ionicForm: FormGroup;
  defaultDate = "1987-06-30";
  isSubmitted = false;
  usuario:string="";
  clave:number;
  checkeado:boolean=false;
  name:any;
  email:any;
  contrasena:any;
  map=new Map<string,string>();
  semana_santa=new Map<string,string>();
  ignatius:string="";
  arrayIgnatius:any[] =  [];

  constructor(private router: Router/*, private emailvalidator:EmailValidator*/,public formBuilder: FormBuilder) {}  

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
      //dob: [this.defaultDate],
      //mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]

    });

    this.semana_santa.set("Ignatius","Farray");
    this.semana_santa.set("LuisMiguel","Piedrahita");
    this.semana_santa.set("Ernesto","Sevilla");

    this.ignatius = this.semana_santa.get("Ignatius");

    //this.arrayIgnatius = Array.from(this.semana_santa.values());
    this.arrayIgnatius = [...this.semana_santa.keys()];
    //console.log("ARRAYIGNATIUS"+this.arrayIgnatius);

    //console.log("IGNATIUS "+this.ignatius);
  }  

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob').setValue(date, {
      onlyself: true
    })
  }

  get errorControl() {
    //console.log("errores");
    return this.ionicForm.controls;
    
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Tiene campos si rellenar')
      return false;
    } else {
      this.setStorage();
      this.map.set(this.ionicForm.value.email,this.ionicForm.value.name );
      console.log(this.ionicForm.value);
      console.log(this.ionicForm.value.name);
      console.log("OK. FORMULARIO CORRECTO");
      //console.log("MAP "+this.map.get());
      this.router.navigate(['/productos', this.ionicForm.value.name]);
    }
  }


nameChange(){
  //this.ionicForm.value.name="holachica";
  if(this.checkeado){
  this.contrasena="holachica";
  }
}  

aProductos(){
  this.setStorage();
  this.router.navigate(['/productos', this.usuario]);  
}

setStorage(){
  this.name = localStorage.setItem("name", this.ionicForm.value.name);
  this.email = localStorage.setItem("email", this.ionicForm.value.email);
}

getStorage(){
  localStorage.getItem("name");
  localStorage.getItem("email");
}


}
