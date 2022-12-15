import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { Notification } from './shared/notification/notification.model';
import { NotificationService } from './shared/notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  notifications!: Notification[];
  notificationsSub!: Subscription;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.authService.autoLogin();
    this.notificationsSub = this.notificationService.notificationsChanged
      .subscribe(data => {
        this.notifications = this.notificationService.getNotifications()
      });
  }

  remove(index:number) {
    this.notificationService.removeNotification(index)
  }

  ngOnDestroy(): void {
    this.notificationsSub.unsubscribe();
  }

}
