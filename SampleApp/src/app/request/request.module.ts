import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RequestComponent],
  exports:[RequestComponent]
})
export class RequestModule { }
