import { Component, OnInit, Input } from '@angular/core';
import { EventInfo } from '../event-info';

@Component({
  selector: 'upcoming-event-card',
  templateUrl: './upcoming-event-card.component.html',
  styleUrls: ['./upcoming-event-card.component.css']
})
export class UpcomingEventCardComponent implements OnInit {
    @Input() event: EventInfo;
    @Input() index: number;
    @Input() mini; boolean;
    
    picUrl: string
    formattedStart: string;
    dayOfWeek: string;
    shortDate: string;
    startTime: string;
    shortDesc: string;
    style: string;

    constructor() { }

    ngOnInit() {
	const d = new Date(this.event.time);
	this.formattedStart = d.toLocaleDateString(undefined, {
	    weekday: 'long',
	    month: 'long',
	    day: 'numeric',
	    hour: 'numeric',
	    minute: '2-digit'});
	this.dayOfWeek = d.toLocaleDateString(undefined, {weekday: 'short'});
	this.shortDate = d.toLocaleDateString(undefined, {month: 'short', day: 'numeric'});
	this.startTime = d.toLocaleTimeString(undefined, {hour: 'numeric', minute: '2-digit'});
	if (this.event.featured_photo) {
	    this.picUrl = `url(${this.event.featured_photo.photo_link})`;
	} else {
	    this.picUrl = '';
	}
	const el = document.createElement('div');
	el.innerHTML = this.event.description;
	this.shortDesc = el.textContent;
	this.style = "style" + (this.index % 4);
	if (this.mini) {
	    this.style += " mini";
	}
    }
}
