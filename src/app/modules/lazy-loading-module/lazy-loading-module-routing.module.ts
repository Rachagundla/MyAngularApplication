import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponetComponent } from '../chart-componet/chart-componet.component';

const routes: Routes = [
    {
      path: '', redirectTo:'chart', pathMatch:'full'
    },
    {
      path: 'chart', component: ChartComponetComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingModuleRoutingModule { }
