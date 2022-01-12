import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarComponent } from './usuarios/listar/listar.component';
import { NuevoComponent } from './usuarios/nuevo/nuevo.component';
import { EditarComponent } from './usuarios/editar/editar.component';
import { DominiosComponent } from './dominios/dominios.component';
import { AplicacionesComponent } from './aplicaciones/aplicaciones.component';

@NgModule({
  declarations: [
    ListarComponent,
    NuevoComponent,
    EditarComponent,
    DominiosComponent,
    AplicacionesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListarComponent,
    NuevoComponent,
    EditarComponent,
    DominiosComponent,
    AplicacionesComponent
  ]
})
export class ParametrosModule { }
