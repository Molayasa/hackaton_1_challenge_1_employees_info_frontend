import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Challenge1Component } from './components/challenges/challenge1/challenge1.component';

// Components
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  { path: 'challenge1', component: Challenge1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
