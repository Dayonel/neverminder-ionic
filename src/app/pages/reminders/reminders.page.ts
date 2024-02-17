import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonRefresher,
  IonRefresherContent,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonSegment,
  IonSegmentButton
} from '@ionic/angular/standalone';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { PlatformService } from 'src/app/services/platform.service';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.page.html',
  styleUrls: ['./reminders.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonIcon,
    IonRefresher,
    IonRefresherContent,
    IonList,
    IonListHeader,
    IonLabel,
    IonItem,
    IonSegment,
    IonSegmentButton
  ],
})
export class RemindersPage implements OnInit {
  constructor(private platformService: PlatformService) { }

  ngOnInit() {
    const isPushNotificationsAvailable =
      Capacitor.isPluginAvailable('PushNotifications');
    if (!isPushNotificationsAvailable) return;

    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener('registration', (token: Token) => {
      // TODO: Add a loader here
      this.platformService.createPlatform(token.value).subscribe({
        next: () => alert('Push registration success, token: ' + token.value),
        error: () => alert('Something went wrong.'),
      });
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        alert('Push received: ' + JSON.stringify(notification));
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      }
    );
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
}
