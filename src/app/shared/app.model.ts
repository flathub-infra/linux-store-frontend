import {Screenshot} from './screenshot.model';
import {Category} from './category.model';

export class App {
      flatpakAppId: string;
      name: string;
      summary: string;
      description: string;
      developerName: string;
      projectLicense: string;
      homepageUrl: string;
      bugtrackerUrl: string;
      helpUrl: string;
      donationUrl: string;
      translateUrl: string;
      iconDesktopUrl: string;
      iconMobileUrl: string;
      downloadFlatpakRefUrl: string;
      currentReleaseVersion: string;
      currentReleaseDate: Date;
      currentReleaseDescription: string;
      inStoreSinceDate: Date;
      screenshots: Screenshot[];
      categories: Category[];
    }
