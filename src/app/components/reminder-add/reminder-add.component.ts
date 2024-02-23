import { Component, ViewChild } from '@angular/core';
import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonModal, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';
import { ReminderEditComponent } from '../reminder-edit/reminder-edit.component';

@Component({
  selector: 'reminder-add',
  templateUrl: './reminder-add.component.html',
  styleUrls: ['./reminder-add.component.scss'],
  standalone: true,
  imports: [ReminderEditComponent, IonInput, IonItem, IonContent, IonButton, IonButtons, IonTitle, IonToolbar, IonHeader, IonModal]
})
export class ReminderAddComponent {
  @ViewChild(IonModal) modal!: IonModal;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
    }
  }
}
