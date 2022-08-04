import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementPhotosComponent } from './achievement-photos.component';

describe('AchievementPhotosComponent', () => {
  let component: AchievementPhotosComponent;
  let fixture: ComponentFixture<AchievementPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
