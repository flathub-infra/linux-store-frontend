import { Component, OnInit, Input } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'store-pre',
  templateUrl: './pre.component.html',
  styleUrls: ['./pre.component.scss']
})
export class PreComponent {

  @Input() text: string = '';
  @Input() enableCopyToClipboard: boolean = true;

  @ViewChild('textElement', { read: ElementRef, static: true }) private textElementView: ElementRef;
  @ViewChild('textElement', { static: true }) tooltip: MatTooltip;

  onCopy() {

    const element: HTMLElement = this.textElementView.nativeElement;

    try {
      const selection = window.getSelection();
      const range = document.createRange();

      range.selectNodeContents(element);

      selection.removeAllRanges();
      selection.addRange(range);
    } catch (error) {
      console.warn('Could not select range. Your browser may not be supported.');
    }
    try {
      const status = document.execCommand('Copy');
      if (status) {
        this.tooltip.disabled = false;
        this.tooltip.show();
        setTimeout(() => {
          this.tooltip.disabled = true;
        }, 2000);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.warn('Could not copy text. Your browser may not be supported.', error);
    }
  }

}
