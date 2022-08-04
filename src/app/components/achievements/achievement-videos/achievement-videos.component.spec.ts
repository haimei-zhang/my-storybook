import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementVideosComponent } from './achievement-videos.component';

describe('AchievementVideosComponent', () => {
  let component: AchievementVideosComponent;
  let fixture: ComponentFixture<AchievementVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
