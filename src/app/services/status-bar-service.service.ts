import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Injectable({
  providedIn: 'root'
})
export class StatusBarServiceService {

  async initialize(): Promise<void> {
    if (Capacitor.isNativePlatform() && Capacitor.getPlatform() == "android") {
      await this.statusBarColor();

      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', async () => {
        await this.statusBarColor();
      });
    }
  }

  isDarkMode = (): boolean => window.matchMedia('(prefers-color-scheme: dark)').matches;

  async statusBarColor() {
    if (this.isDarkMode()) {
      await StatusBar.setStyle({ style: Style.Dark });
      await StatusBar.setBackgroundColor({ color: '#222428' });
    }
    else {
      await StatusBar.setStyle({ style: Style.Light });
      await StatusBar.setBackgroundColor({ color: '#F4F5F8' });
    }
  }
}
