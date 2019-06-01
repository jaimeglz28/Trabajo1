import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from "@angular/forms";
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { VistaComponent } from './vista/vista.component'; 
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TablaUsuariosComponent,
    VistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
