import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { CombinedComponent } from './combined/combined.component'


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent    
  },
  {
    path: 'combined',
    component: CombinedComponent    
  },
  {
    path: 'about',
    component: AboutComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
