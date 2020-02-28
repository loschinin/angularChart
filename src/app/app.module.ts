import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MainService } from './main.service';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { CombinedComponent } from './combined/combined.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    CombinedComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    HighchartsChartModule,
    MatSelectModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,    
    BrowserModule,   
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
