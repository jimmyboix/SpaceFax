import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HomeService } from './services/home.service';
import { PastService } from './services/past.service';
import { CountdownModule } from 'ngx-countdown';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appReducers } from './app.reducers';
import { HomeEffects } from './components/home/home.effects';
import { PastEffects } from './components/past/past.effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faWikipediaW, faReddit } from '@fortawesome/free-brands-svg-icons';
import { DatePipe } from '@angular/common';
import { PastComponent } from './components/past/past.component';
import { PastCardComponent } from './components/past-card/past-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PastComponent,
    PastCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    HttpClientModule,
    CountdownModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([HomeEffects, PastEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument(),
    FontAwesomeModule
  ],
  providers: [HomeService, DatePipe, PastService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas);
    library.add(faYoutube);
    library.add(faReddit);
    library.add(faWikipediaW);
  }
}
