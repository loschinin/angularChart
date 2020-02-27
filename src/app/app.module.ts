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


/* import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout'; */


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

    //BrowserAnimationsModule,
    //RouterModule,    
    //MatToolbarModule,
    //MatSidenavModule,
    ////FlexLayoutModule, 
    ////MatGridListModule,
   
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
