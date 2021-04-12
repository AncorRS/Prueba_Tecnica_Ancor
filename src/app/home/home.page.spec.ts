import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { provideRoutes, Routes, RouterModule, Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let e;
  let r;

  const prueba = new HomePage(e, new FormBuilder());

  beforeEach(waitForAsync(() => {

    prueba.submitForm();

    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [RouterModule, RouterTestingModule,IonicModule.forRoot()],
      providers: [FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('COMPROBAMOS QUE FORMULARIO DEVULEVE UN OBJETO CON 2 VALORES', () => {
    expect(prueba.valores).toHaveSize(2);
  });

  it('SUBMITFORM DE TIPO BOOLEANO', () => {
    expect(typeof(prueba.validacion)).toBe('boolean');
  });

  it('COMPROBAMOS CREA UN FORMULARIO CON DOS CAMPOS ', () => {
    expect(prueba.ionicForm.contains('email')).toBeTruthy();
    expect(prueba.ionicForm.contains('name')).toBeTruthy();
  });
});
