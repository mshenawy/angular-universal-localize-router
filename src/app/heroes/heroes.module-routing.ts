import { LocalizeRouterModule } from "localize-router";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HeroesComponent } from "./heroes.component";

  const routes: Routes = [
    { path: '', component: HeroesComponent }
  ];
  
  @NgModule({
    imports: [ 
      RouterModule.forChild(routes),
      LocalizeRouterModule.forChild(routes)
    ],
    exports: [ RouterModule, LocalizeRouterModule ]
  })
  export class HeroesRoutingModule {}
