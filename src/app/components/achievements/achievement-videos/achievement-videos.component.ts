import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-storybook-achievement-videos',
  templateUrl: './achievement-videos.component.html',
  styleUrls: ['./achievement-videos.component.scss']
})
export class AchievementVideosComponent implements OnInit {

  currentVideoSrc: string = '';
  videos = [
    {id: 1, name: 'Some More AP', src: '//player.bilibili.com/player.html?aid=471706662&bvid=BV1tT411L7KV&cid=793681359&page=1'},
    {id: 2, name: 'Ring Ding Dong AP', src: '//player.bilibili.com/player.html?aid=899244885&bvid=BV1PN4y157iS&cid=793687633&page=1'},
    {id: 3, name: '爱河 AP', src: '//player.bilibili.com/player.html?aid=856630342&bvid=BV1wV4y177JU&cid=793720951&page=1'},
    {id: 4, name: '冰河时代 差点AP', src: '//player.bilibili.com/player.html?aid=344201258&bvid=BV1nd4y1N78T&cid=793729784&page=1'},
    {id: 5, name: '冰河时代 又差点AP', src: '//player.bilibili.com/player.html?aid=686657132&bvid=BV1oU4y1Y7TH&cid=793736597&page=1'},
    {id: 6, name: '团队自制逆风碾压', src: '//player.bilibili.com/player.html?aid=514242295&bvid=BV1Hg411y7xd&cid=793753522&page=1'}
  ];

  constructor() { }

  ngOnInit(): void {
    this.currentVideoSrc = this.videos[0].src;
  }

  selectVideo(video: any): void {
    this.currentVideoSrc = video.src;
  }

}
