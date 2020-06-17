import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ParkingSchedulerComponent } from './shared/parking-scheduler/parking-scheduler.component';
import { BlogComponent } from './shared/blog/blog.component';
import { FooterComponent } from './shared/footer/footer.component';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng';
import {SelectItem} from 'primeng';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {RatingModule} from 'primeng/rating';
import {MultiSelectModule} from 'primeng/multiselect';
import { QAPageComponent } from './pages/qa-page/qa-page.component';
import {RouterModule, Routes} from '@angular/router';
import { PartnersComponent } from './pages/partners/partners.component';


const appRoutes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'questions', component: QAPageComponent},
  { path: 'partners', component: PartnersComponent}
  // { path: '**', component:  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    ParkingSchedulerComponent,
    BlogComponent,
    FooterComponent,
    QAPageComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SelectButtonModule,
    DropdownModule,
    TableModule,
    ToastModule,
    CalendarModule,
    CardModule,
    RatingModule,
    MultiSelectModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
