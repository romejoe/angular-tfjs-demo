import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template:  `
      <img src="/assets/nyan.png">
    `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
