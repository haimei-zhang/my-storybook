import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '~view/home/home.component';
import { StoriesComponent } from '~view/stories/stories.component';
import { AchievementsComponent } from '~view/achievements/achievements.component';
import { IntroductionComponent } from '~view/introduction/introduction.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
