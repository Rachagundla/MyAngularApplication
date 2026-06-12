import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { FirstComponentComponent } from './app/components/first-component/first-component.component';

bootstrapApplication(FirstComponentComponent, appConfig)
  .catch((err) => console.error(err));
