import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    if (!Capacitor.isPluginAvailable('StatusBar')) return;

    StatusBar.setOverlaysWebView({ overlay: true });
    if (this.isDarkMode()) {
      StatusBar.setStyle({ style: Style.Dark });
    }
    else {
      StatusBar.setStyle({ style: Style.Light });
    }
  }

  isDarkMode(): boolean {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    return prefersDark.matches;
  }
}
