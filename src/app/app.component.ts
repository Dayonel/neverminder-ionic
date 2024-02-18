import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { PushNotificationsService } from './services/push-notifications.service';
import { StatusBarServiceService } from './services/status-bar-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor(private pushNotifications: PushNotificationsService,
    private statusBar: StatusBarServiceService) { }

  ngOnInit(): void {
    this.pushNotifications.initialize();
    this.statusBar.initialize();
  }
}
