import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidenavButtonListComponent } from './sidenav-button-list.component';

describe('SidenavButtonListComponent', () => {
  let component: SidenavButtonListComponent;
  let fixture: ComponentFixture<SidenavButtonListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavButtonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
