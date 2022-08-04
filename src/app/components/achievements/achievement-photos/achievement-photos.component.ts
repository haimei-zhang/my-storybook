import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-storybook-achievement-photos',
  templateUrl: './achievement-photos.component.html',
  styleUrls: ['./achievement-photos.component.scss']
})
export class AchievementPhotosComponent implements OnInit {

  currentImgSrc: string = '';
  images = [
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
