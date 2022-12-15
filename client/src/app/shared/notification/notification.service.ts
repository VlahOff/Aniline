import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Notification } from "./notification.model";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notificationsChanged = new Subject<Notification[]>();

  private notifications: Notification[] = [];

  createNotification(message: string, type: string) {
    this.notifications.push(new Notification(message, type));
    this.notificationsChanged.next(this.notifications);
  }

  getNotifications() {
    return this.notifications;
  }

  removeNotification(index: number) {
    this.notifications.splice(index, 1);
    this.notificationsChanged.next(this.notifications);
  }
}