import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '~view/home/home.component';
import { StoriesComponent } from '~view/stories/stories.component';
import { AchievementsComponent } from '~view/achievements/achievements.component';
import { IntroductionComponent } from '~view/introduction/introduction.component';

import { StoryPhotosComponent } from '~components/stories/story-photos/story-photos.component';
import { StoryVideosComponent } from '~components/stories/story-videos/story-videos.component';
import { AchievementPhotosComponent } from '~components/achievements/achievement-photos/achievement-photos.component';
import { AchievementVideosComponent } from '~components/achievements/achievement-videos/achievement-videos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'stories/photos', component: StoryPhotosComponent },
  { path: 'stories/videos', component: StoryVideosComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'achievements/photos', component: AchievementPhotosComponent },
  { path: 'achievements/videos', component: AchievementVideosComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
