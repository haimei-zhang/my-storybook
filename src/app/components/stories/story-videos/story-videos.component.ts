import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-storybook-story-videos',
  templateUrl: './story-videos.component.html',
  styleUrls: ['./story-videos.component.scss']
})
export class StoryVideosComponent implements OnInit {

  currentVideoSrc: string = '';
  videos = [
    {id: 1, name: '梦想海岸', src: '//player.bilibili.com/player.html?aid=471580612&bvid=BV18T41177HD&cid=790178126&page=1'},
    {id: 1, name: '梦想海岸2', src: ''},
  ];

  constructor() { }

  ngOnInit(): void {
    this.currentVideoSrc = this.videos[0].src;
  }

  selectVideo(video: any): void {
    this.currentVideoSrc = video.src;
  }

}
