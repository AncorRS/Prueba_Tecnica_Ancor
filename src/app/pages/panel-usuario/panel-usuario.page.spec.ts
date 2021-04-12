import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PanelUsuarioPage } from './panel-usuario.page';

import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { provideRoutes, Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

describe('PanelUsuarioPage', () => {
  let component: PanelUsuarioPage;
  let fixture: ComponentFixture<PanelUsuarioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelUsuarioPage ],
      imports: [RouterModule, RouterTestingModule,IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PanelUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
