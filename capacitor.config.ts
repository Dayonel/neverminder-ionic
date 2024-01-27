import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'me.neverminder.app',
  appName: 'Neverminder',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
