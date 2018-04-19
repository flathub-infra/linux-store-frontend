import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatExpansionModule,
  MatListModule,
  MatTooltipModule,
  MatPaginatorModule
];

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES,
  ],
  exports: MATERIAL_MODULES,
})
export class LinuxStoreAngularMaterialModule { }
