import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonActionSheet, IonBackButton, IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonDatetime, IonDatetimeButton, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonModal, IonNote, IonRange, IonText, IonTextarea, IonTitle, IonToggle, IonToolbar } from '@ionic/angular/standalone';
import { format } from 'date-fns';

@Component({
  selector: 'app-reminder-details',
  templateUrl: './reminder-details.page.html',
  styleUrls: ['./reminder-details.page.scss'],
  standalone: true,
  imports: [IonActionSheet, IonNote, IonToggle, IonIcon, IonRange, IonBreadcrumb, IonBreadcrumbs, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonModal, IonDatetimeButton, IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonButton, IonText, IonInput, IonTextarea, IonFooter, IonListHeader, IonDatetime]
})
export class ReminderDetailsPage {
  datetime = format(new Date(), 'dd-MM-yyyy') + 'T09:00:00.000Z';
  formattedString = '';
  actionSheetOpen = false;

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  dateChanged(value: any) {
    console.log(value);
    this.datetime = value;
  }

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
