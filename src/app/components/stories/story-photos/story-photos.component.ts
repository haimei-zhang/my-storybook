import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-storybook-story-photos',
  templateUrl: './story-photos.component.html',
  styleUrls: ['./story-photos.component.scss']
})
export class StoryPhotosComponent implements OnInit {

  currentImgSrc: string = '';
  images = [
    {id: 8, src: 'assets/images/stories/story8.png'},
    {id: 9, src: 'assets/images/stories/story9.png'},
    {id: 10, src: 'assets/images/stories/story10.png'},
    {id: 1, src: 'assets/images/stories/story1.png'},
    {id: 2, src: 'assets/images/stories/story2.png'},
    {id: 3, src: 'assets/images/stories/story3.png'},
    {id: 4, src: 'assets/images/stories/story4.png'},
    {id: 5, src: 'assets/images/stories/story5.png'},
    {id: 6, src: 'assets/images/stories/story6.png'},
    {id: 7, src: 'assets/images/stories/story7.png'},
    {id: 11, src: 'assets/images/stories/story11.png'},
    {id: 12, src: 'assets/images/stories/story12.png'},
    {id: 13, src: 'assets/images/stories/story13.png'},
    {id: 14, src: 'assets/images/stories/story14.png'},
    {id: 15, src: 'assets/images/stories/story15.png'},
    {id: 16, src: 'assets/images/stories/story16.png'},
    {id: 17, src: 'assets/images/stories/story17.png'},
    {id: 18, src: 'assets/images/stories/story18.png'},
    {id: 19, src: 'assets/images/stories/story19.png'},
    {id: 20, src: 'assets/images/stories/story20.png'},
    {id: 21, src: 'assets/images/stories/story21.png'},
    {id: 22, src: 'assets/images/stories/story22.png'},
    {id: 23, src: 'assets/images/stories/story23.png'},
    {id: 24, src: 'assets/images/stories/story24.png'},
    {id: 25, src: 'assets/images/stories/story25.png'},
    {id: 26, src: 'assets/images/stories/story26.png'},
    {id: 27, src: 'assets/images/stories/story27.png'},
    {id: 28, src: 'assets/images/stories/story28.png'}
  ];

  constructor() { }

  ngOnInit(): void {
    this.currentImgSrc = this.images[0].src;
  }

  selectPhoto(image: any): void {
    this.currentImgSrc = image.src;
  }

}
