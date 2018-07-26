import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentEventCardComponent } from './recent-event-card.component';

describe('RecentEventCardComponent', () => {
  let component: RecentEventCardComponent;
  let fixture: ComponentFixture<RecentEventCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentEventCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
