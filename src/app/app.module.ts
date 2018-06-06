import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { ContratoBandejaComponent } from './mantenimiento/contrato/bandeja.component';
import { ConfigVariableBandejaComponent } from './mantenimiento/configvariable/bandeja.component';


const rutaApp: Routes = [
  { path: 'backoffice/mantenimiento/xxxxx', component: ContratoBandejaComponent},
  { path: 'backoffice/mantenimiento/variable', component: ConfigVariableBandejaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContratoBandejaComponent,
    ConfigVariableBandejaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutaApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
