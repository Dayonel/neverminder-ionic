import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonRouterLink } from '@ionic/angular/standalone';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bookmarkOutline, bookmark, addCircleOutline, addCircle, personCircleOutline, personCircle } from 'ionicons/icons';
import { ReminderAddComponent } from 'src/app/components/reminder-add/reminder-add.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [ReminderAddComponent, IonRouterLink, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonButton],
})
export class TabsPage {
  selectedTab: string = "";
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ bookmarkOutline, bookmark, addCircleOutline, addCircle, personCircleOutline, personCircle });
  }

  tabChanged(event: any) {
    this.selectedTab = event.tab;
  }
}
