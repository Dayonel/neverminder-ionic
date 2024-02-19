import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonDatetime, IonFooter, IonHeader, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonText, IonTextarea, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reminder-details',
  templateUrl: './reminder-details.page.html',
  styleUrls: ['./reminder-details.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonButton, IonText, IonInput, IonTextarea, IonFooter, IonListHeader, IonDatetime]
})
export class ReminderDetailsPage {

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

}
