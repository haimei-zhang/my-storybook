import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-storybook-story-videos',
  templateUrl: './story-videos.component.html',
  styleUrls: ['./story-videos.component.scss']
})
export class StoryVideosComponent implements OnInit {

  currentVideoSrc: string = '';
  videos = [
    {id: 1, src: ''},
    {id: 2, src: ''},
    {id: 3, src: ''},
    {id: 4, src: ''},
    {id: 5, src: ''},
    {id: 6, src: ''},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
