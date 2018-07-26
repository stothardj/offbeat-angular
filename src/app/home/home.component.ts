import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { EventInfo } from '../event-info';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    upcomingEvents: EventInfo[];
    recentEvents: EventInfo[];

    constructor(private eventService: EventService) { }

    ngOnInit() {
	this.getUpcomingEvents();
	this.getRecentEvents();
    }

    getUpcomingEvents(): void {
	this.eventService.getUpcomingEvents()
	    .subscribe(events => this.upcomingEvents = events);
    }

    getRecentEvents(): void {
	this.eventService.getRecentEvents()
	    .subscribe(events => this.recentEvents = events);
    }
}
