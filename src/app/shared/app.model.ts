import {Screenshot} from './screenshot.model';

export class App {
      flatpakAppId: string;
      name: string;
      summary: string;
      description: string;
      projectLicense: string;
      homepageUrl: string;
      bugtrackerUrl: string;
      iconDesktopUrl: string;
      iconMobileUrl: string;
      downloadFlatpakRefUrl: string;
      currentReleaseVersion: string;
      currentReleaseDate: Date;
      currentReleaseDescription: string;
      inStoreSinceDate: Date;
      screenshots: Screenshot[];
    }
