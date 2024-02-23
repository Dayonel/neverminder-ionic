import { Component } from '@angular/core';
import { IonActionSheet, IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonText, IonToolbar } from '@ionic/angular/standalone';
import { ReminderEditComponent } from 'src/app/components/reminder-edit/reminder-edit.component';

@Component({
  selector: 'app-reminder-details',
  templateUrl: './reminder-details.page.html',
  styleUrls: ['./reminder-details.page.scss'],
  standalone: true,
  imports: [ReminderEditComponent, IonContent, IonHeader, IonText, IonButton, IonButtons, IonBackButton, IonToolbar, IonActionSheet, IonFooter]
})
export class ReminderDetailsPage {
  actionSheetOpen = false;

  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
      handler: () => alert('deleted!')
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
      handler: () => this.actionSheetOpen = false
    },
  ];
}
