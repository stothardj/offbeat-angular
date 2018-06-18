import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { EventInfo } from './event-info';
import { EVENTS } from './mock-events';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {
    private upcomingEventsUrl = 'api/upcoming';

    constructor(private http: HttpClient) { }

    getEvents(): Observable<EventInfo[]> {
	return this.http.get<EventInfo[]>(this.upcomingEventsUrl);
	// return of(EVENTS);
    }
}
