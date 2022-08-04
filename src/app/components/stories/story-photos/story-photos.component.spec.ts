import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPhotosComponent } from './story-photos.component';

describe('StoryPhotosComponent', () => {
  let component: StoryPhotosComponent;
  let fixture: ComponentFixture<StoryPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
