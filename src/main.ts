import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { FirstComponentComponent } from './app/components/first-component/first-component.component';
import { CrudOperationsComponent } from './app/components/crud-operations/crud-operations.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
