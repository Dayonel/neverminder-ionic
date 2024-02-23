import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonAccordion, IonAccordionGroup, IonButton, IonCardContent, IonContent, IonDatetime, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonNote, IonText, IonTextarea, IonTitle, IonToggle, IonToolbar } from '@ionic/angular/standalone';
import { format } from 'date-fns';
import { addIcons } from 'ionicons';
import { alarmOutline, calendarOutline } from 'ionicons/icons';

@Component({
  selector: 'reminder-edit',
  templateUrl: './reminder-edit.component.html',
  styleUrls: ['./reminder-edit.component.scss'],
  standalone: true,
  imports: [IonNote, IonAccordionGroup, IonAccordion, IonToggle, IonIcon, IonCardContent, IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonText, IonInput, IonTextarea, IonDatetime]
})
export class ReminderEditComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  @Input() openAccordion = false;

  date: Date;
  time: Date;
  formattedDate: string;
  formattedTime: string
  enabled = true;

  constructor(private route: ActivatedRoute) {
    addIcons({ alarmOutline, calendarOutline });
    this.date = new Date();
    this.time = new Date();
    this.formattedDate = this.formatDate(this.date);
    this.formattedTime = this.formatTime(this.time);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.title = params['title'];
    });
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
}
