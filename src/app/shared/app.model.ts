import {Screenshot} from './screenshot.model';

export class App {
      flatpakAppId: string;
      name: string;
      summary: string;
      description: string;
      projectLicense: string;
      iconDesktopUrl: string;
      iconMobileUrl: string;
      homepageUrl: string;
      bugtrackerUrl: string;
      downloadFlatpakRefUrl: string;
      currentRelease: string;
      screenshots: Screenshot[];
    }
