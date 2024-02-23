import { Component, OnInit } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonItem, IonItemDivider, IonLabel, IonList, IonListHeader, IonNavLink, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ReminderItemComponent } from '../reminder-item/reminder-item.component';
import { RefresherService } from 'src/app/services/refresher.service';

@Component({
  selector: 'reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.scss'],
  standalone: true,
  imports: [IonListHeader, IonItemDivider, IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonNavLink, IonRefresherContent, IonRefresher, ReminderItemComponent]
})
export class ReminderListComponent implements OnInit {

  constructor(private refresher: RefresherService) { }

  ngOnInit() { }

  handleRefresh(event: any) {
    this.refresher.refresh(event);
  }

}
