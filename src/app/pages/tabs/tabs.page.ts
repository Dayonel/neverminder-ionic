import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bookmarkOutline, bookmark, addCircleOutline, addCircle, personCircleOutline, personCircle } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
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
