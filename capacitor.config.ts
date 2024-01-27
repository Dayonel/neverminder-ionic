import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'me.neverminder.app',
  appName: 'Neverminder',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 300,
    },
  },
};

export default config;
