import { RouterModule, Routes } from '@angular/router';

import { AboutComponent, PortfolioComponent, ItemComponent, SearchComponent } from "./components/index.paginas";

const app_routes: Routes = [
  { path: 'home', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
    { path: 'search/:termino', component: SearchComponent },
  { path: 'item/:cod', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });
