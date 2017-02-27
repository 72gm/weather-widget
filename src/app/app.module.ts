import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// bespoke components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// 3rd party
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// pipes
import { KelvinConvertPipe } from './shared/pipes/kelvin-convert.pipe';
// services
import { Weather5DayService } from './shared/services/weather-5day.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    KelvinConvertPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxChartsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [Weather5DayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
