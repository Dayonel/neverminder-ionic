import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonIcon, IonItem, IonLabel, IonList, IonNote, IonRouterLink, IonRouterLinkWithHref, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForward } from 'ionicons/icons';

@Component({
  selector: 'reminder-item',
  templateUrl: './reminder-item.component.html',
  styleUrls: ['./reminder-item.component.scss'],
  standalone: true,
  imports: [IonList, IonIcon, IonNote, IonText, IonLabel, IonItem, IonRouterLink, RouterModule]
})
export class ReminderItemComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  @Input() hour = '';

  constructor() {
    addIcons({ chevronForward });
  }

  ngOnInit() { }

}
