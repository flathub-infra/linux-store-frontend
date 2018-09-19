import { Component } from '@angular/core';
import { VERSION } from '../../../environments/version';

@Component({
  selector: 'store-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent { 
  version = VERSION;
}
