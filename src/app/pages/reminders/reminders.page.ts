import { Component } from '@angular/core';
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
  IonSegmentButton,
  IonNav,
  IonNavLink,
  IonButton
} from '@ionic/angular/standalone';

import { UpcomingRemindersComponent } from 'src/app/components/upcoming-reminders/upcoming-reminders.component';
import { PastRemindersComponent } from 'src/app/components/past-reminders/past-reminders.component';

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
    IonSegmentButton,
    IonNav,
    IonNavLink,
    IonButton,
    UpcomingRemindersComponent,
    PastRemindersComponent
  ],
})
export class RemindersPage {
  selectedSegment = "upcoming";

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
}
