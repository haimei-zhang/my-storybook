import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryVideosComponent } from './story-videos.component';

describe('StoryVideosComponent', () => {
  let component: StoryVideosComponent;
  let fixture: ComponentFixture<StoryVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
