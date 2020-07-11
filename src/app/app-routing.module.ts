import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FagComponent } from './components/fag/fag.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { SoftwareComponent } from './components/software/software.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'services', component: ServicesComponent},
  {path:'about', component: AboutComponent},
  { path:'products', component: ProductsComponent},
  { path: 'solutions', component:SolutionsComponent},
  { path: 'fag', component: FagComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'software', component: SoftwareComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
