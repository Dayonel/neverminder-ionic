import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.page.html',
  styleUrls: ['./add-reminder.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AddReminderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
