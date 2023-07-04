import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

const mat = [
  MatTabsModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...mat
  ],
  exports: [
    ...mat
  ]
})
export class MaterialModule { }
