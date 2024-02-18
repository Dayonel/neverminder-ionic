import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class StatusBarServiceService {

  constructor(private platform: Platform) { }

  async initialize(): Promise<void> {
    if (Capacitor.isNativePlatform()) {

      await SplashScreen.hide(); // bug in Ionic, conflict splash screen + overlay
      setTimeout(async () => {
        await StatusBar.setOverlaysWebView({ overlay: true });
        await StatusBar.setStyle({ style: Style.Light });
      }, 500);
    }
  }
}
