import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ami.lab2.app',
  appName: 'myApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
