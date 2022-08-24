import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { TeamPageComponent } from './Team/team-page/team-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: GridLayoutComponent },
  { path: 'team/:id', component: TeamPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
