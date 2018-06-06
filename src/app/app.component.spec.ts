import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ContratoBandejaComponent } from './mantenimiento/contrato/bandeja.component';
import { ConfigVariableBandejaComponent } from './mantenimiento/configvariable/bandeja.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    console.log("a");
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContratoBandejaComponent,
        ConfigVariableBandejaComponent
      ],
    }).compileComponents();
  }));
});

describe('ContratoBandejaComponent', () => {
  beforeEach(async(() => {
    console.log("b");
    TestBed.configureTestingModule({
      declarations: [
        ContratoBandejaComponent
      ],
    }).compileComponents();
  }));
});

describe('ConfigVariableBandejaComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConfigVariableBandejaComponent
      ],
    }).compileComponents();
  }));
});