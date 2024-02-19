import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonIcon, IonItem, IonLabel, IonNote, IonRouterLink, IonRouterLinkWithHref, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForward } from 'ionicons/icons';

@Component({
  selector: 'reminder-item',
  templateUrl: './reminder-item.component.html',
  styleUrls: ['./reminder-item.component.scss'],
  standalone: true,
  imports: [IonIcon, IonNote, IonText, IonLabel, IonItem, IonRouterLink, RouterModule]
})
export class ReminderItemComponent implements OnInit {

  constructor() {
    addIcons({ chevronForward });
  }

  ngOnInit() { }

}
