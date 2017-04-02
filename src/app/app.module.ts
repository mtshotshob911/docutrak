import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'view',      component: ViewDetailComponent },
    { path: 'upload',      component: UpLoadDetailComponent },
    { path: 'review',      component: ReviewDetailComponent },
    { path: 'view',      component: viewDetailComponent },
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Docutrak - Login' }
    },
    { path: '',
        redirectTo: '/view',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
