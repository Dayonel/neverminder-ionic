import { Component, ViewEncapsulation } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonItem, IonItemDivider, IonLabel, IonList, IonNavLink, IonRefresher, IonRefresherContent,  IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RefresherService } from 'src/app/services/refresher.service';
import { ReminderItemComponent } from '../reminder-item/reminder-item.component';

@Component({
  selector: 'upcoming-reminders',
  templateUrl: './upcoming-reminders.component.html',
  styleUrls: ['./upcoming-reminders.component.scss'],
  standalone: true,
  imports: [IonItemDivider, IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonNavLink, IonRefresherContent, IonRefresher, ReminderItemComponent]
})
export class UpcomingRemindersComponent {
  constructor(private refresher: RefresherService) { }

  handleRefresh(event: any) {
    this.refresher.refresh(event);
  }
}
