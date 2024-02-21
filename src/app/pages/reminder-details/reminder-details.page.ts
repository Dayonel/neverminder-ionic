import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAccordion, IonAccordionGroup, IonActionSheet, IonBackButton, IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonDatetime, IonDatetimeButton, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonListHeader, IonModal, IonNote, IonPopover, IonRange, IonText, IonTextarea, IonTitle, IonToggle, IonToolbar } from '@ionic/angular/standalone';
import { format } from 'date-fns';
import { addIcons } from 'ionicons';
import { alarmOutline, calendarOutline } from 'ionicons/icons';

@Component({
  selector: 'app-reminder-details',
  templateUrl: './reminder-details.page.html',
  styleUrls: ['./reminder-details.page.scss'],
  standalone: true,
  imports: [IonNote, IonAccordionGroup, IonAccordion, IonActionSheet, IonToggle, IonIcon, IonRange, IonBreadcrumb, IonBreadcrumbs, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonModal, IonDatetimeButton, IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonButton, IonText, IonInput, IonTextarea, IonFooter, IonListHeader, IonDatetime]
})
export class ReminderDetailsPage {
  date: Date;
  time: Date;
  formattedDate: string;
  formattedTime: string
  actionSheetOpen = false;
  enabled = true;

  constructor() {
    addIcons({ alarmOutline, calendarOutline });
    this.date = new Date();
    this.time = new Date();
    this.formattedDate = this.formatDate(this.date);
    this.formattedTime = this.formatTime(this.time);
  }

  dateChanged(value: any) {
    console.log(value);
    this.formattedDate = this.formatDate(value);
  }

  timeChanged(value: any) {
    console.log(value);
    this.formattedTime = this.formatTime(value);
  }

  formatDate = (date: Date) => format(date, 'EEEE, dd MMM yyyy');
  formatTime = (time: Date) => format(time, 'HH:mm');

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
