import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { EventInfo } from './event-info';
import { RECENT_EVENTS, UPCOMING_EVENTS } from './mock-events';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {
    private upcomingEventsUrl = 'api/upcoming';
    private recentEventsUrl = 'api/recent';

    constructor(private http: HttpClient) { }

    getUpcomingEvents(): Observable<EventInfo[]> {
	return this.http.get<EventInfo[]>(this.upcomingEventsUrl);
	// return of(UPCOMING_EVENTS);
    }

    getRecentEvents(): Observable<EventInfo[]> {
	return this.http.get<EventInfo[]>(this.recentEventsUrl);
	// return of(RECENT_EVENTS);
    }
}
