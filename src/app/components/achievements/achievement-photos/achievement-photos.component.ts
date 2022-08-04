import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-storybook-achievement-photos',
  templateUrl: './achievement-photos.component.html',
  styleUrls: ['./achievement-photos.component.scss']
})
export class AchievementPhotosComponent implements OnInit {

  currentImgSrc: string = '';
  images = [
    {id: 1, src: 'assets/images/achievements/achievement1.png'},
    {id: 2, src: 'assets/images/achievements/achievement2.png'},
    {id: 3, src: 'assets/images/achievements/achievement3.png'},
    {id: 4, src: 'assets/images/achievements/achievement4.png'},
    {id: 5, src: 'assets/images/achievements/achievement5.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
    this.currentImgSrc = this.images[0].src;
  }

  selectPhoto(image: any): void {
    this.currentImgSrc = image.src;
  }

}
