import { Component } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonNavLink, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RefresherService } from 'src/app/services/refresher.service';

@Component({
  selector: 'upcoming-reminders',
  templateUrl: './upcoming-reminders.component.html',
  styleUrls: ['./upcoming-reminders.component.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonNavLink, IonRefresherContent, IonRefresher]
})
export class UpcomingRemindersComponent {
  constructor(private refresher: RefresherService) { }

  handleRefresh(event: any) {
    this.refresher.refresh(event);
  }
}
