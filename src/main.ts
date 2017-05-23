// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/module/app.module';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
