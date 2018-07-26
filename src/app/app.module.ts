import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { DividerComponent } from './divider/divider.component';
import { AppRoutingModule } from './/app-routing.module';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { UpcomingEventCardComponent } from './upcoming-event-card/upcoming-event-card.component';
import { RecentEventCardComponent } from './recent-event-card/recent-event-card.component';

@NgModule({
    declarations: [
	AppComponent,
	BannerComponent,
	DividerComponent,
	EventsComponent,
	HomeComponent,
	UpcomingEventCardComponent,
	RecentEventCardComponent
    ],
    imports: [
	BrowserModule,
	BrowserAnimationsModule,
	AppRoutingModule,
	HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
