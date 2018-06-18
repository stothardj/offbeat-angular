import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { EventInfo } from '../event-info';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    events: EventInfo[];

    constructor(private eventService: EventService) { }

    ngOnInit() {
	this.getEvents();
    }

    getEvents(): void {
	this.eventService.getEvents()
	    .subscribe(events => this.events = events);
    }
}
