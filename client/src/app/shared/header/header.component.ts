import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { NotificationService } from '../notification/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  email: string = '';
  hasUser: boolean = false;
  private userSub!: Subscription;

  constructor(private authService: AuthService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (user) => {
        this.email = user?.email || '';
        this.hasUser = !!user;
      },
    );
  }

  onTest() {
    // this.authService.test();
    this.notificationService.createNotification('Fuck you', 'alert')
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
