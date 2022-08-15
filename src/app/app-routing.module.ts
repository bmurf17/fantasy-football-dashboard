import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { TeamPageComponent } from './team-page/team-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: GridLayoutComponent },
  { path: 'tyler', component: TeamPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
