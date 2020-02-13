import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SharedModule } from './shared/shared.module';

import { MatGridListModule } from '@angular/material/grid-list';
import { MainService } from './main.service';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { CombinedComponent } from './combined/combined.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    CombinedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    HighchartsChartModule,
    MatGridListModule,
    MatSelectModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    FlexLayoutModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
