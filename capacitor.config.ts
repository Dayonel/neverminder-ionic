import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'me.neverminder.app',
  appName: 'Neverminder',
  webDir: 'www',
  server: {
    //url: '192.168.178.129', // TODO: Remove this in prod
    androidScheme: 'https',
  },
};

export default config;
