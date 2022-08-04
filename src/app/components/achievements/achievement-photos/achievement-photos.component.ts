import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-storybook-achievement-photos',
  templateUrl: './achievement-photos.component.html',
  styleUrls: ['./achievement-photos.component.scss']
})
export class AchievementPhotosComponent implements OnInit {

  currentImgSrc: string = '';
  images = [
    {id: 1, src: ''}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
