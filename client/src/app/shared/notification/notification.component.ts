import { Component, Input, OnInit } from '@angular/core';
import { Notification } from './notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() notification!: Notification;

  constructor() { }

  ngOnInit(): void {
  }

}
