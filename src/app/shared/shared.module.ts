import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbActionsModule,
  NbAlertModule,
  NbBadgeModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbPopoverModule,
  NbSelectModule,
  NbSidebarModule,
  NbSpinnerModule,
  NbTabsetModule,
  NbTimepickerModule,
  NbUserModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
const NB_MODULES = [
  NbLayoutModule,
  NbEvaIconsModule,
  NbSidebarModule,
  NbUserModule,
  NbActionsModule,
  NbContextMenuModule,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbSpinnerModule,
  NbAlertModule,
  NbSelectModule,
  NbIconModule,
  NbCheckboxModule,
  NbListModule,
  NbTimepickerModule,
  NbTabsetModule,
  NbPopoverModule,
  NbBadgeModule,
  NbFormFieldModule,
];
const MAT_MODULES = [
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatPaginatorModule,
  MatDialogModule,
  MatChipsModule,
  MatInputModule,
  MatBadgeModule,
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...NB_MODULES,
    ...MAT_MODULES,
  ],
  exports: [...NB_MODULES, ...MAT_MODULES, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
