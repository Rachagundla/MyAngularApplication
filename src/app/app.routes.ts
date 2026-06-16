import { Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { CrudOperationsComponent } from './components/crud-operations/crud-operations.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'homeComponent', pathMatch: 'full' },
    { path: 'homeComponent', component: HomeComponent },
    { path: 'fistComponent', component: FirstComponentComponent },
    { path: 'secondComponent', component: SecondComponentComponent },
    { path: 'thirdComponent', component: CrudOperationsComponent }
];
