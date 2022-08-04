import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from '~view/home/home.component';
import { IntroductionComponent } from '~view/introduction/introduction.component';
import { AchievementsComponent } from '~view/achievements/achievements.component';
import { StoriesComponent } from '~view/stories/stories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroductionComponent,
    AchievementsComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
