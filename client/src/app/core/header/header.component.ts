import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title!:string;
  email: string = 'dimitarvlahov24@gmail.com';
  hasUser: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
