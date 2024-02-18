import { Component } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonNavLink, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'upcoming-reminders',
  templateUrl: './upcoming-reminders.component.html',
  styleUrls: ['./upcoming-reminders.component.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonNavLink]
})
export class UpcomingRemindersComponent {

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
}
