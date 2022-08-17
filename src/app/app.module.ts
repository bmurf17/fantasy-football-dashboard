import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';

import { TeamTileComponent } from './team-tile/team-tile.component';
import { AppRoutingModule } from './app-routing.module';
import { TeamPageComponent } from './team-page/team-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GridLayoutComponent,
    TeamTileComponent,
    TeamPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    AppRoutingModule,
    MatListModule,
    MatTableModule,
    MatSidenavModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
