import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardcarousel',
  templateUrl: './cardcarousel.component.html',
  styleUrls: ['./cardcarousel.component.css']
})
export class CardcarouselComponent implements OnInit {
  images = ['../../../assets/Chris Marison.jpg','../../../assets/Chris Marison.jpg','../../../assets/Chris Marison.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}
