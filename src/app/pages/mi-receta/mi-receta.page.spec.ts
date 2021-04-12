import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiRecetaPage } from './mi-receta.page';
import { UrlSerializer,UrlTree } from '@angular/router';
import { provideRoutes, Routes, RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('MiRecetaPage', () => {
  let component: MiRecetaPage;
  let fixture: ComponentFixture<MiRecetaPage>;

  const prueba = new MiRecetaPage();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MiRecetaPage ],
      imports: [RouterModule, RouterTestingModule,IonicModule.forRoot()],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(MiRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('PROBAMOS QUE NOS LLEGA PDF', () => {
    expect(prueba.pdfSrc).toMatch('.pdf');
  });
});
