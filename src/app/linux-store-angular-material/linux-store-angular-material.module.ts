import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdMenuModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdInputModule } from '@angular/material';

const MATERIAL_MODULES = [
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdSidenavModule,
  MdTabsModule,
  MdToolbarModule,
];

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES,
  ],
  exports: MATERIAL_MODULES,
})
export class LinuxStoreAngularMaterialModule { }
