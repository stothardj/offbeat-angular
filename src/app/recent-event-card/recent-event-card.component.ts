import { Component, OnInit, Input } from '@angular/core';
import { EventInfo } from '../event-info';

@Component({
  selector: 'recent-event-card',
  templateUrl: './recent-event-card.component.html',
  styleUrls: ['./recent-event-card.component.css']
})
export class RecentEventCardComponent implements OnInit {
    @Input() event: EventInfo;
    @Input() index: number;
    picUrl: string;
    style: string;

    constructor() { }

    ngOnInit() {
	if (this.event.featured_photo) {
	    this.picUrl = `url(${this.event.featured_photo.photo_link})`;
	} else {
	    this.picUrl = '';
	}
	this.style = "style" + (this.index % 4);
    }
}
