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
  IonSegmentButton
} from '@ionic/angular/standalone';

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
export class RemindersPage {

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
}
