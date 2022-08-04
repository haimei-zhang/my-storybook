import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-storybook-achievement-videos',
  templateUrl: './achievement-videos.component.html',
  styleUrls: ['./achievement-videos.component.scss']
})
export class AchievementVideosComponent implements OnInit {

  currentVideoSrc: string = '';
  videos = [
    {id: 1, name: '梦想海岸', src: '//player.bilibili.com/player.html?aid=471580612&bvid=BV18T41177HD&cid=790178126&page=1'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectVideo(video: any): void {
    this.currentVideoSrc = video.src;
  }

}
