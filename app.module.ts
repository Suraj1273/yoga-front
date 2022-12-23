import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { YogaTeachingComponentComponent } from './yoga-teaching-component/yoga-teaching-component.component';
import { HomeComponent } from './home/home.component';
import { OnlineYogaComponent } from './online-yoga/online-yoga.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    YogaTeachingComponentComponent,
    HomeComponent,
    OnlineYogaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
