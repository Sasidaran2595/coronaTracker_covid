import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryWiseComponent } from './components/country-wise/country-wise.component';
import { WorldWideComponent } from './components/world-wide/world-wide.component';


const routes: Routes = [
  { path: 'world', component: WorldWideComponent },
  { path: 'country', component: CountryWiseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
