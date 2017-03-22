import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './Contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes =[
{path: '', component:HomeComponent},
{path: 'about', 
loadChildren: 'app/about/about.module#AboutModule'
},
{path: 'contact', component:ContactComponent},
{path: '**', component:NotFoundComponent} //order of placement is very importamt always place it at the buttom
];

export const appRouting:ModuleWithProviders = RouterModule.forRoot(appRoutes); 