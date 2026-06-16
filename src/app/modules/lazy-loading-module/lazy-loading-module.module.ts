import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingModuleRoutingModule } from './lazy-loading-module-routing.module';
import { ChartComponetComponent } from '../chart-componet/chart-componet.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LazyLoadingModuleRoutingModule,
    ChartComponetComponent
  ]
})
export class LazyLoadingModuleModule { }
