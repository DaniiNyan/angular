import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate.pipe';

const modules = [TruncatePipe];

@NgModule({
  declarations: modules,
  imports: [CommonModule],
  exports: modules
})
export class SharedModule {}
