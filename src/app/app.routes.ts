import { Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { CrudOperationsComponent } from './components/crud-operations/crud-operations.component';
import { HomeComponent } from './components/home/home.component';
import { ChildOneSubMenuComponent } from './components/child-one-sub-menu/child-one-sub-menu.component';
import { ChildTwoSubMenuComponent } from './components/child-two-sub-menu/child-two-sub-menu.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


export const routes: Routes = [

  { path: '', redirectTo: 'homeComponent', pathMatch: 'full' },
  { path: 'homeComponent', component: HomeComponent },
  { path: 'fistComponent', component: FirstComponentComponent },
  { path: 'secondComponent', component: SecondComponentComponent },
  { path: 'thirdComponent', component: CrudOperationsComponent },
    {
      path:'menuComponet' , component: MenuComponent,
        children:[
            {
                path:'', redirectTo:'childOneSubMenu', pathMatch:'full',
            } ,
            {
                path:'childOneSubMenu', component:ChildOneSubMenuComponent
            },
            {
                path:'childTwoSubMenu', component:ChildTwoSubMenuComponent
            }
        ]
    },
    {  // This is for creating the lazyloading using the module folder
        path: 'analytics',loadChildren: () => import('./modules/lazy-loading-module/lazy-loading-module.module').then(m => m.LazyLoadingModuleModule)
    },
    {
      path: '**', component: PageNotFoundComponent
    }
];
