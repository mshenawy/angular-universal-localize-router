import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { LazyUniversalModuleLoaderProvider } from 'localize-router-lazy-universal-module-loader';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  providers: [
    // Add universal-only providers here
    LazyUniversalModuleLoaderProvider
  ],
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}

