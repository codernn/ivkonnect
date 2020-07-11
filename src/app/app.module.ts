import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SectorsComponent } from './components/sectors/sectors.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { Cards1Component } from './components/cards1/cards1.component';
import { Cards2Component } from './components/cards2/cards2.component';
import { Cards3Component } from './components/cards3/cards3.component';
import { CounterComponent } from './components/counter/counter.component';
import {CounterModule} from 'ngx-counter';
import { PartnersComponent } from './components/partners/partners.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NewsComponent } from './components/news/news.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { HomeComponent } from './components/home/home.component';
import { FagComponent } from './components/fag/fag.component';
import { SolcardsComponent } from './components/solcards/solcards.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { Parallax1Component } from './components/parallax1/parallax1.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
// import { RouterModule } from '@angular/router';
// For MDB Angular Free// For MDB Angular Pro
import { FagcollapseComponent } from './components/fagcollapse/fagcollapse.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SoftwareComponent } from './components/software/software.component';
import { CardcarouselComponent } from './components/cardcarousel/cardcarousel.component';
import { Parallax2Component } from './components/parallax2/parallax2.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectorsComponent,
    CarouselComponent,
    Cards1Component,
    Cards2Component,
    Cards3Component,
    CounterComponent,
    PartnersComponent,
    ProjectsComponent,
    NewsComponent,
    SolutionsComponent,
    HomeComponent,
    FagComponent,
    ParallaxComponent,
    Parallax1Component,
    ServicesComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    SolcardsComponent,
    FagcollapseComponent,
    DropdownComponent,
    SoftwareComponent,
    CardcarouselComponent,
    Parallax2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CounterModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
