import { Component } from '@angular/core';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RefresherService } from 'src/app/services/refresher.service';

@Component({
  selector: 'past-reminders',
  templateUrl: './past-reminders.component.html',
  styleUrls: ['./past-reminders.component.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, IonRefresherContent, IonRefresher]
})
export class PastRemindersComponent {
  constructor(private refresher: RefresherService) { }

  handleRefresh(event: any) {
    this.refresher.refresh(event);
  }
}
