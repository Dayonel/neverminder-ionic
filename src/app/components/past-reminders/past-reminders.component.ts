import { Component } from '@angular/core';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'past-reminders',
  templateUrl: './past-reminders.component.html',
  styleUrls: ['./past-reminders.component.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar]
})
export class PastRemindersComponent {

}
