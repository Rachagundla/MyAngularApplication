import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { FirstComponentComponent } from './app/components/first-component/first-component.component';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(FirstComponentComponent, config, context);

export default bootstrap;
