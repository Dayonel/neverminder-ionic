import { Component, OnInit } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonItemDivider, IonLabel, IonList, IonListHeader, IonNavLink, IonNote, IonRefresher, IonRefresherContent, IonSearchbar, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ReminderItemComponent } from '../reminder-item/reminder-item.component';
import { RefresherService } from 'src/app/services/refresher.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.scss'],
  standalone: true,
  imports: [NgFor, IonIcon, IonNote, RouterLink, IonSearchbar, IonListHeader, IonItemDivider, IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonNavLink, IonRefresherContent, IonRefresher, ReminderItemComponent]
})
export class ReminderListComponent implements OnInit {

  public data = [
    {
      title: 'Amsterdam',
      description: 'Never gonna give you up Never gonna let you down Never gonna run...',
      hour: '06:11'
    },
    {
      title: 'Madrid',
      description: 'Never gonna give you up Never gonna let you down Never gonna run...',
      hour: '08:30'
    },
    {
      title: 'London',
      description: 'Never gonna give you up Never gonna let you down Never gonna run...',
      hour: '09:00'
    },
    {
      title: 'Istanbul',
      description: 'Never gonna give you up Never gonna let you down Never gonna run...',
      hour: '06:11'
    },
    {
      title: 'Hong Kong',
      description: 'Never gonna give you up Never gonna let you down Never gonna run...',
      hour: '06:11'
    },
    {
      title: 'Geneva',
      description: 'Never gonna give you up Never gonna let you down Never gonna run...',
      hour: '06:11'
    },
    {
      title: 'Cairo',
      description: 'Never gonna give you up Never gonna let you down Never gonna run...',
      hour: '06:11'
    },
    {
      title: 'Buenos Aires',
      description: 'Never gonna give you up Never gonna let you down Never gonna run...',
      hour: '06:11'
    }
  ];
  public results = [...this.data];

  constructor(private refresher: RefresherService) { }

  ngOnInit() { }

  handleRefresh(event: any) {
    this.refresher.refresh(event);
  }

  search(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.title.toLowerCase().indexOf(query) > -1);
  }
}
