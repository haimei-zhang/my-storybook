import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-storybook-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAvatar1Active = false;
  isAvatar2Active = false;
  isAvatar3Active = false;

  constructor() { }

  ngOnInit(): void {
  }

}
