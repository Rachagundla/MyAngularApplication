import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { FirstComponentComponent } from './app/components/first-component/first-component.component';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/components/login/login.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
