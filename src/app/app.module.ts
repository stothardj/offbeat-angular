import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { DividerComponent } from './divider/divider.component';
import { AppRoutingModule } from './/app-routing.module';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
	AppComponent,
	BannerComponent,
	DividerComponent,
	EventsComponent,
	HomeComponent
    ],
    imports: [
	BrowserModule,
	AppRoutingModule,
	HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
