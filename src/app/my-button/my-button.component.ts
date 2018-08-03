import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-button-component',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {
  public defaultText = 'Button';

  constructor() { }

  ngOnInit() {
  }

}
