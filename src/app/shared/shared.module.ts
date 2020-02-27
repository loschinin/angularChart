import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { HighchartsChartModule } from 'highcharts-angular'
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';

/* import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common'; */

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ChartComponent,
    SidenavComponent    
  ],
  imports: [
    RouterModule,    
    BrowserAnimationsModule,    
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,    
    HighchartsChartModule,
    MatSelectModule,    
    FlexLayoutModule,
    MatSidenavModule,

    //MatGridListModule,
    //CommonModule,
    //BrowserModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ChartComponent,
    SidenavComponent
  ]
})
export class SharedModule { }
