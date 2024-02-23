import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import {
  IonContent,
} from '@ionic/angular/standalone';
import { ReminderListComponent } from 'src/app/components/reminder-list/reminder-list.component';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.page.html',
  styleUrls: ['./reminders.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    ReminderListComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RemindersPage { }
