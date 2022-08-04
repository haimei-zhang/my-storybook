import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from '~view/home/home.component';
import { IntroductionComponent } from '~view/introduction/introduction.component';
import { AchievementsComponent } from '~view/achievements/achievements.component';
import { StoriesComponent } from '~view/stories/stories.component';

import { IconsComponent } from '~components/icons/icons.component';
import { AchievementPhotosComponent } from '~components/achievements/achievement-photos/achievement-photos.component';
import { AchievementVideosComponent } from '~components/achievements/achievement-videos/achievement-videos.component';
import { StoryPhotosComponent } from '~components/stories/story-photos/story-photos.component';
import { StoryVideosComponent } from '~components/stories/story-videos/story-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroductionComponent,
    AchievementsComponent,
    StoriesComponent,
    IconsComponent,
    AchievementPhotosComponent,
    AchievementVideosComponent,
    StoryPhotosComponent,
    StoryVideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
